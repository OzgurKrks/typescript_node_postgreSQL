# typescript_node_postgreSQL
TODO_CRUD typescript - ExpressJs - postgreSQL

# Getting started
To get the Node server running locally:
- Clone this repo
- npm install to install all required dependencies
- Create postgreSQL database and Get Connection with pg
- Set environment variables in config.env under ./env
  * Set DB_USER=<YOUR_DB_USER>
  * Set DB_PASSWORD =<YOUR_DB_PASSWORD>
  * Set DB_HOST =<YOUR_DB_HOST>
  * Set DB_PORT =<YOUR_DB_PORT>
  * Set DB_DATABASE=<YOUR_DB_DATABASE>
- npm run dev to start the local server

## Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv) : Dotenv is a that loads environment variables from a .env file.
- [express](https://www.npmjs.com/package/express) : Web framework for Node.js.
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) : Middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
- [pg](https://www.npmjs.com/package/pg) : For modeling and mapping postgreSQL data to JavaScript
- [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution and REPL for node.js, with source map and native ESM support.
- [typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application-scale JavaScript.

## Error Handling
In middlewares/errors/errorHandler.js, we define a error-handling middleware for handling Mongoose's errors and our own errors.
