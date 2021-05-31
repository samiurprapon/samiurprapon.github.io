import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const { isDark } = useContext(StyleContext);
  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
    });

    client
      .query({
        query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.user.pinnedItems.edges);
        console.log(result);
      })
      .catch(function (error) {
        // console.log(error);
        let repo = {
          data: {
            user: {
              pinnedItems: {
                totalCount: 6,
                edges: [
                  {
                    node: {
                      name: "Blood-Book",
                      description: "My very first semester final project",
                      forkCount: 0,
                      stargazers: {
                        totalCount: 4,
                      },
                      url: "https://github.com/samiurprapon/Blood-Book",
                      id: "MDEwOlJlcG9zaXRvcnkyNTEzMDYwNTA=",
                      diskUsage: 13,
                      primaryLanguage: {
                        name: "C",
                        color: "#555555",
                      },
                    },
                  },
                  {
                    node: {
                      name: "PhoneBook",
                      description: "Java Desktop Application using javafx",
                      forkCount: 0,
                      stargazers: {
                        totalCount: 0,
                      },
                      url: "https://github.com/samiurprapon/PhoneBook",
                      id: "MDEwOlJlcG9zaXRvcnkxODE2OTE2NTI=",
                      diskUsage: 7202,
                      primaryLanguage: {
                        name: "Java",
                        color: "#b07219",
                      },
                    },
                  },
                  {
                    node: {
                      name: "BeesVsPanda",
                      description:
                        "This game has been played by most of the 90's kid. ",
                      forkCount: 0,
                      stargazers: {
                        totalCount: 5,
                      },
                      url: "https://github.com/samiurprapon/BeesVsPanda",
                      id: "MDEwOlJlcG9zaXRvcnkyNTUzNjk4MjA=",
                      diskUsage: 6657,
                      primaryLanguage: {
                        name: "Java",
                        color: "#b07219",
                      },
                    },
                  },
                  {
                    node: {
                      name: "Medical-Result-2019",
                      description:
                        "This project was really interesting project for me. I was really enthusiast to get my ex girlfriend's medical admission test result. I didn't have her test roll number and any other information expect her name spelling. So that I decided to find her result, this code was the prove of my fatigue 🐸",
                      forkCount: 0,
                      stargazers: {
                        totalCount: 1,
                      },
                      url: "https://github.com/samiurprapon/Medical-Result-2019",
                      id: "MDEwOlJlcG9zaXRvcnkyMTcyNTcxMDE=",
                      diskUsage: 3,
                      primaryLanguage: {
                        name: "Python",
                        color: "#3572A5",
                      },
                    },
                  },
                  {
                    node: {
                      name: "JWT-Authenticaton-server",
                      description:
                        "Simple and effective method of developing JWT. Token based authentication",
                      forkCount: 0,
                      stargazers: {
                        totalCount: 0,
                      },
                      url: "https://github.com/samiurprapon/JWT-Authenticaton-server",
                      id: "MDEwOlJlcG9zaXRvcnkzMjE5NzEwODY=",
                      diskUsage: 53,
                      primaryLanguage: {
                        name: "JavaScript",
                        color: "#f1e05a",
                      },
                    },
                  },
                  {
                    node: {
                      name: "SadChat",
                      description:
                        "A ready to go Android project to pass course.",
                      forkCount: 1,
                      stargazers: {
                        totalCount: 2,
                      },
                      url: "https://github.com/samiurprapon/SadChat",
                      id: "MDEwOlJlcG9zaXRvcnkzMjkyNDc3OTE=",
                      diskUsage: 497,
                      primaryLanguage: {
                        name: "Java",
                        color: "#b07219",
                      },
                    },
                  },
                ],
              },
            },
          },
        };

        setrepoFunction(repo.data.user.pinnedItems.edges);
        console.log(
          "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
        );
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Feature Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
