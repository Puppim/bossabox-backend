## Running the application

The application is built with Node.js and already has all environment configured with docker. To start the application you will need docker and docker-compose installed on the machine. Having that you may run:

### docker-compose up

The application will be avaible on PORT 3000 by default, but it's configurable via docker-compose.yml file as an environment variable.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run in the development environment, run the following command:

### `yarn dev`

## To run the tests in the docs directory, you can run:

### dredd api.apib http://localhost:3000  