# Express Docker Container Restart Endpoint

This repository contains a simple Express server that provides an endpoint to restart a Docker container on the local machine.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Docker (with Docker CLI)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-docker-restart
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:

    - Create a `.env` file in the root directory based on the `.env.example` template.
    - Specify the `PORT` and `CONTAINER_NAME` variables in the `.env` file.

## Usage
- Start the server:
    ```
    npm start
    ```
- Once the server is running, send a **GET** request to `/restart-container` to restart the Docker container specified in the `CONTAINER_NAME` environment variable.

Example request using curl:
```
curl http://localhost:5050/restart-container
```

## Configuration
### Environment Variables
- `PORT`: Port on which the Express server will listen (default is **3000** if not specified).
- `CONTAINER_NAME`: Name of the Docker container to restart.