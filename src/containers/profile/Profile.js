import React, { useState, useEffect, lazy, Suspense } from "react";
import ApolloClient, { gql } from "apollo-boost";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import config from "../../config";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setrepo] = useState([]);

  function setProfileFunction(array) {
    setrepo(array);
  }

  function getProfileData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(config.githubConvertedToken)}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
      {
        user(login:"${config.githubUserName}") { 
          name
          bio
          isHireable
          avatarUrl
          location
        }
    }
      `,
      })
      .then((result) => {
        setProfileFunction(result.data.user);
      })
      .catch(function (error) {
        let result = {
          data: {
            user: {
              name: "Samiur Prapon",
              bio: "♦️ World is Diamond Shaped.",
              isHireable: false,
              avatarUrl:
                "https://avatars.githubusercontent.com/u/25266703?u=f5614b531668cbd808573f709329e5f105339879&v=4",
              location: "Bangladesh",
            },
          },
        };

        // console.log(error);
        setProfileFunction(result.data.user);

        // console.log(
        //   "Because of this Error Contact Section is Showed instead of Profile"
        // );
        openSource.showGithubProfile = "true";
      });
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      getProfileData();
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
