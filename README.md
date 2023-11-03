# Assesment Basic Login Form

Goal: implement basic login form with a username and password field. The form should be submitted via AJAX and the response should be displayed on the page.

## Installation

1. Clone the repository
2. Run `npm install` from the root of the repository (with npm workspaces installation is done globally for all packages)
3. Run `npm start` to start concurrently the backend and the frontend apps

## Backend

Simple endpoint done to return a response with the username and password received. Two authorized users are created inline in the auth service.

- admin: username: 'admin' - password: 'admin12H@' ;
- user: username: 'user' - password: 'user24H@' ;

## Frontend

Application run on http://localhost:5173/

## Not done

- No unit tests ;
- No e2e tests ;
- No documentation ;
- No component split for re-usability: input could be isolated ;
- No complexe UI behavior to manage reset of error status ;
- No validation on username and password format ;
- No loading state when the aut call is done (frontend side) ;
- And more...

Send me message if you have trouble to install/run the application.

Thanks for your time.
