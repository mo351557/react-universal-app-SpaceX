# SpaceX Launch Application for Publicis Sapient

React Server Side Rendering demo project.

Demo: [Click to see DEMO](https://spacex-in-sapient.herokuapp.com/)

## Lighthouse score 
![SpaceX Launch](https://github.com/mo351557/react-universal-app-SpaceX/blob/master/LightHouse_score_SpaceX.PNG)

## Technologies Used

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Redux](https://redux.js.org/)
- [Heroku](https://www.heroku.com/)

### Installing

First clone project and install dependencies

```sh
$ git clone https://github.com/mo351557/react-universal-app-SpaceX.git
$ cd react-universal-app-SpaceX
$ npm install
```

Run on local

```sh
$ npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

Deployment build

```sh
$ npm run build:prod
```

You can deploy this project to:

- [Heroku](https://www.heroku.com/)


 ## Project Description
 
 In this Project, I have used Redux for state management and React Hooks for managing lifecycles of the application.

 Route concept is used for filtering and once clicked on any filter button, filtering happens and it is reflected in the url as per the requirement.

 Applied filters will change the URL and update the Page with latest records without refreshing the page. This was achieved by store in redux.
 
 And if the page is refreshed with the applied filters in the URL – the resulting page should be server side rendered & subsequent filters should again be client side rendered.




