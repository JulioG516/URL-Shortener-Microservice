# URL Shortener Microservice

This is a URL Shortener Microservice project developed as part of the FreeCodeCamp curriculum. The application provides a simple API for shortening long URLs into shorter, more manageable links.

## Features

- Shorten long URLs into shorter, unique aliases.
- Redirect shortened URLs to their original long URLs.
- Store and retrieve URLs using a database.

## Technologies Used

- Node.js
- Express.js
- RESTful API principles

you can also just connect MongoDb and Mongoose to persist in a database, or you other preffered


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/url-shortener-microservice.git

2. Navigate to the project directory:
cd url-shortener-microservice

3. Install the dependencies:
npm install


4. Set up the environment variables:
   - Rename the `.env.example` file to `.env`.
   - Configure the database connection URL and other required variables.

5. Start the application:


6. The server should now be running at `http://localhost:3000`. You can test the API using a tool like Postman or cURL.

## Usage

The API provides the following endpoints:

- `POST /api/shorturl/new` - Create a short URL for a given long URL.
- `GET /api/shorturl/:alias` - Redirect to the original long URL associated with the provided alias.

Please refer to the API documentation for detailed usage instructions.

## Contributing

Contributions to the project are welcome! If you find any issues or want to suggest improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


