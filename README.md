# Personal Porfolio  ⚡️ [![GitHub](https://img.shields.io/github/license/samiurprapon/samiurprapon.github.io?color=blue)](https://github.com/samiurprapon/samiurprapon.github.io/blob/main/LICENSE)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```

## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
$ git clone https://github.com/samiurprapon/samiurprapon.github.io.git

# Go into the repository
$ cd samiurprapon.github.io

# Install dependencies
$ npm install

#Start's development server
$ npm start
```

## Personal details Customization

#### Personalize page content in `/src/portfolio.js` & modify it as you like.

```javascript
/* Change this file to get your Personal Porfolio */
const greeting = {
  username: 'SamiurPrapon',
  title: "Hi, I'm Prapon",
  subTitle: emoji(
    'I love to interact with Humans & Machines from an Abstract level. 🚀'
  ),
  resumeLink:
    '',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/samiurprapon",
  linkedin: "https://www.linkedin.com/in/prapon/",
  gmail: "samiur.prapon@gmail.com",
  facebook: "https://www.facebook.com/prapon14"
};


const skillsSection = { .... }

const techStack = { .... }

const workExperience = { .... }

const openSource = { .... }

const bigProjects = { .... }

const achievementSection = { .... }

const blogSection = { .... }

const contactInfo = { .... }

```

## Linking Portfolio to Github

Generate a Github personal access token following these [instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) (make sure you don't select any scope just generate a simple token).

1. Create a file called .env in the root directory of your project, check the base file

Note: Instead of creating a `.env` file, you can just run this command `cp env.example .env` inside the root directory

```bash
- DeveloperFolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - env.example  <-- this is the base file
  - .gitignore
  - package-lock.json
  - package.json
```

2. Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your github token like this.

```javascript
 // .env
  REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
```

Set `showGithubProfile` to true or false to show Contact Profile using Github, defaults to false.

**Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

Note: Open Source Projects section only show pinned items of your Github.
If you are seeing something as shown below, follow these [instructions](https://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile).

![ERROR](https://i.imgur.com/Hj6mu1K.png)

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.


### Deploying to Github Pages

This section guides you to deploy your portfolio on Github pages.

- Navigate to `package.json` and enter your domain name instead of `https://samiurprapon.github.io/` in `homepage` variable. For example, if you want your site to be `https://<your-username>.github.io/developerFolio`, add the same to the homepage section of `package.json`.

- In short you can also add `/devloperFolio` to `package.json` as both are exactly same. Upon doing so, you tell `create-react-app` to add the path assets accordingly.

- Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

- Follow through the guide to setup GitHub pages from the official CRA docs [here](https://create-react-app.dev/docs/deployment/#github-pages).


Or, you can use `Github CI` to do the job for you.
- Generate personal token from `https://github.com/settings/tokens` as `PERSONAL_ACCESS_TOKEN` & `WEBSITE_SECRET`
- add those secrect on `https://github.com/<your_username>/<repository_name>/settings/secrets/actions`
- Open `.github\workflows\deploy.yml` and configure 
```yml
      run: |
        git config --global user.email "your_mail"}
        git config --global user.name "your_name"
        git remote set-url origin https://${{secrets.PERSONAL_ACCESS_TOKEN}}@github.com/<your_username>/<repository_name>.git
        CI=false npm run deploy
      env:
        REACT_APP_GITHUB_TOKEN: ${{secrets.WEBSITE_SECRET}}
```

### Overcome Github Page Limitation

I found, Github removes personal tokens on each deployment because of it's security policy. So, what I simply did, manually set the response when it doesn't get the result. As example,  `/src/containers/projects/Projects.js`
```javascript 
    .then((result) => {
        setrepoFunction(result.data.user.pinnedItems.edges);    
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
                      name: "JWT-Authenticaton-server",
                      description:
                        "Simple and effective method of developing JWT. Token based authentication",
                      forkCount: 0,
                      stargazers: {
                        totalCount: 0,
                      },
                      url:
                        "https://github.com/samiurprapon/JWT-Authenticaton-server",
                      id: "MDEwOlJlcG9zaXRvcnkzMjE5NzEwODY=",
                      diskUsage: 53,
                      primaryLanguage: {
                        name: "JavaScript",
                        color: "#f1e05a",
                      },
                    },
                    ...
                  },
                ],
              },
            },
          },
        };
        
        setrepoFunction(repo.data.user.pinnedItems.edges);
    }

```

Similarly, I put profile data mannually on `/src/containers/profile/Profile.js`

```javascript
    let result = {
        "data": {
            "user": {
                "name": "Samiur Prapon",
                "bio": "♦️ World is Diamond Shaped.",
                "isHireable": false,
                "avatarUrl": "https://avatars.githubusercontent.com/u/25266703?u=f5614b531668cbd808573f709329e5f105339879&v=4",
                "location": "Bangladesh"
            }
        }
    }
```

## Technologies 

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
- [react-headroom](https://github.com/KyleAMathews/react-headroom)
- [color-thief](https://github.com/lokesh/color-thief)


## Acknowledgment
This application uses Open Source components. You can find the source code of their open source projects along with license information below. We acknowledge and are grateful to these developers for their contributions to open source .

[developerFolio](https://github.com/saadpasta/developerFolio) Copyright (c) 2021. <br>This application is contributed by [Saad Pasta](https://github.com/saadpasta) and distributed under GNU General Public License v3.0.