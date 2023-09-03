---

# Sklog API

Sklog is a simple API that allows users to create and manage blog posts, whilst also featuring some other functionalities such as pagination and search. It is built using NodeJS, ExpressJS, PostgreSQL, TypeScript, TypeORM and Jest for testing.

## Features

- User and admin registration: users and admins can create accounts with their full name, email address and password.
- User and admin login: users and admins can login to their accounts with their email address and password.
- User session revocation: admins can revoke the session of any user.
- Create blog: users can create blog posts with a title, description and content.
- Update blog: users can update the title, description and content of their blog posts.
- Delete blog: users can delete their blog posts.
- View blog: users can view their blog posts.
- View all blogs: users can view all blog posts.
- Search blog: users can search for blog posts by title or description.
- Paginate blogs: users can paginate through blog posts.
- API Testing: Comprehensive unit tests are implemented using Jest.


## API Endpoints
### Authentication (users and admins)
- `POST /api/v1/auth/register`: Register a new user account.
- `POST /api/v1/auth/login`: Log in using email and password

### Blog functionalities
- `POST /api/v1/blog/create`: Create a new blog post
 
## Database Setup:

   - Launch a PostgreSQL shell and login using `psql -U <username>`.
   - Create a new database using `CREATE DATABASE "sklog";`.
   - Connect to the database using `\c sklog`.
   - Start the server, it will automatically describe the necessary tables

## Prerequisites

- Node.JS (v14.^.^ or higher)
- PostgreSQL database
- Postman for testing the API
- Redis for caching
- Docker for containerization

## Installation

1. Clone the repository:

```bash
git clone https://github.com/starlingvibes/sklog-api.git
```

2. Navigate to the project directory:

```bash
cd sklog-api/
```

3. Install dependencies:

```bash
yarn add package.json
```

4. Create a `.env` file in the project root and set the following environment variables:

```env
# server settings
PORT=8000

# database settings
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=sklog

# redis configuration
REDIS_HOST=
REDIS_PASSWORD=
REDIS_PORT=
REDIS_URL=

# application secrets
JWT_SECRET_USER=
JWT_SECRET_ADMIN=
ADMIN_TOKEN=
```

5. Set up your PostgreSQL database with the provided configuration.


6. Create a Redis instance and set the environment variables in the `.env` file.

7. Start the server:

```bash
yarn start:dev
```


## Testing

The API includes unit tests implemented using Jest.

To run tests:

```bash
yarn test
```

## Dockerization 

The API is containerized using Docker. A Dockerfile is provided in the repository. To build and run the Docker container:

```bash
docker build -t sklog-api .
docker run -p 13000:8000 -d sklog-api
```

## Postman Collection

You can find a Postman collection with example API requests in the `src/postman` directory. Import this collection into Postman to test the API endpoints.

## Contributing

Contributions to this project are welcome! Feel free to submit issues and pull requests.
For any inquiries or questions, feel free to contact [dera@ieee.org](mailto:dera@ieee.org).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
