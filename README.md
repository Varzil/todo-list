# Todo App
Name - Varzil Thakkar
Roll No - 21BCP090

# Docker Compose File Explanation

## Version
This Docker Compose file is written in version '3.8' format.

## Services
The file defines two services:
1. `client`
2. `server`

### Client Service
- **Build:** Builds the Docker image from the `./client` directory.
- **Image:** Specifies the name of the image to be built as `varzil/21bcp090_todo_frontend:latest`.
- **Ports:** Maps port 3000 of the host to port 3000 of the container, allowing access to the client application.
- **Depends On:** Ensures that the `server` service is started before the `client` service.

### Server Service
- **Build:** Builds the Docker image from the `./server` directory.
- **Image:** Specifies the name of the image to be built as `varzil/21bcp090_todo_backend:latest`.
- **Ports:** Maps port 8000 of the host to port 8000 of the container, allowing access to the server application.
- **Environment:** Sets the environment variable `DB_URL` to the value of `${MONGODB_URI}`. This is likely used by the server application to connect to a MongoDB database whose URI is provided through an external source.

