# Mil Cópias

## Development Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js & NPM](https://nodejs.org/en/download/)

### Starting the Development Environment

1. Clone the repository:

2. Install dependencies:

   ```sh
    npm install
   ```

3. Create a `.env` file based on `.env.example` and set all required environment variables.

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the app running.

## Deployment

1. Add the remote server:
   ```sh
   git remote add <server_name> ssh://dokku@<server_address>:822/<app_name>
   ```
2. Push the code to deploy:
   ```sh
   git push <server_name> main
   ```
