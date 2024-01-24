# real-time-chat-webApp
# Basic Chat App with ReactJS and Node.js using ChatEngine.io

This README provides an overview and setup instructions for a basic chat application built using ReactJS and Node.js, with message management powered by ChatEngine.io.

## Overview

This chat application allows users to send and receive real-time messages. It utilizes ChatEngine.io, a service that handles the real-time communication and message storage. The frontend of the application is built using ReactJS, providing an intuitive and interactive user interface for chatting.

## Prerequisites

Before setting up the chat app, ensure you have the following installed on your system:

1. Node.js and npm (Node Package Manager): You can download and install Node.js from the official website (https://nodejs.org/).

## Getting Started

Follow the steps below to set up the chat app:

### Frontend (ReactJS)

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd chat-app-reactjs-nodejs
   ```

2. Navigate to the frontend folder:

   ```bash
   cd client-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure ChatEngine.io credentials:
   
   Before proceeding, you'll need to sign up for a free account at ChatEngine.io (https://www.chatengine.io/). After signing up, create a new project to obtain your credentials (Project ID and API Key).

   Next, create a `.env` file in the frontend folder and add the following content:

   ```plaintext
   REACT_APP_CHAT_ENGINE_PROJECT_ID=YOUR_CHATENGINE_PROJECT_ID
   REACT_APP_CHAT_ENGINE_API_KEY=YOUR_CHATENGINE_API_KEY
   ```

   Replace `YOUR_CHATENGINE_PROJECT_ID` and `YOUR_CHATENGINE_API_KEY` with the credentials you obtained from ChatEngine.io.

5. Start the React development server:

   ```bash
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

### Backend (Node.js)

1. Navigate to the backend folder:

   ```bash
   cd ../server-nodejs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure ChatEngine.io credentials:
   
   Similar to the frontend setup, create a `.env` file in the backend folder and add the following content:

   ```plaintext
   CHAT_ENGINE_SECRET_KEY=YOUR_CHATENGINE_SECRET_KEY
   ```

   Replace `YOUR_CHATENGINE_SECRET_KEY` with the secret key obtained from ChatEngine.io.

4. Start the Node.js server:

   ```bash
   npm start
   ```

   The backend server will run on `http://localhost:3001`.

## Usage

With both the frontend and backend servers running, you can access the chat application in your web browser by visiting `http://localhost:3000`. The app will prompt you to log in or create a new user. Once logged in, you can start sending and receiving real-time messages with other users.

## Contributing

Feel free to contribute to the development of this chat app by submitting pull requests or reporting issues. Please follow the standard GitHub workflow for contributions.

## License

This chat application is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

This chat application was built using ChatEngine.io, ReactJS, and Node.js, which are amazing tools and technologies for building real-time chat applications. Special thanks to the teams behind these technologies.


