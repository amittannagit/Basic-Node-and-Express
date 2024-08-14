# Boilerplate Express Project

This project is a simple Express.js application built as part of a learning exercise on freeCodeCamp.

## Features

- Serves static files from the `/public` directory
- Provides a JSON API at `/json` that responds with a message
- Includes a logging middleware that logs all requests to the console
- Serves an HTML file for the root route `/`
- Provides an endpoint `/now` that responds with the current server time
- Implements an echo server at `/:word/echo`
- Handles GET and POST requests to `/name`

## Environment Variables

This project uses the following environment variable:
- `MESSAGE_STYLE`: Controls the message style for the `/json` route. Set to `uppercase` to transform the message to uppercase.

## How to Use

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory with the necessary environment variables.
4. Start the server with `npm start`.
5. The application will be available at `http://localhost:3000`.

## Example Routes

- **GET /:** Serves the `index.html` file.
- **GET /public:** Serves static assets from the `/public` directory.
- **GET /json:** Returns a JSON object with a message.
- **GET /now:** Returns the current server time in JSON format.
- **GET /:word/echo:** Returns a JSON object with the echoed word.
- **GET/POST /name:** Handles name parameters and returns them as JSON.

## License

This project is part of a freeCodeCamp exercise and is open source.
