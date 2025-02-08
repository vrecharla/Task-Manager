# Task Manager App

This is a simple Task Manager app built with the following technologies:

- **Frontend**: React.js (with Axios for API requests)
- **Backend**: Node.js + Express
- **Styling**: CSS
- **Package Manager**: npm

## Project Setup

### 1. Prerequisites

Make sure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/) (which includes npm)
- Git (optional, for version control)

---

## Backend Setup (Node.js + Express)

### 1. Navigate to the Project Directory

```bash
mkdir task-manager
cd task-manager
```

### 2. Set Up the Server

```bash
mkdir server
cd server
npm init -y
```

### 3. Install Required Dependencies

```bash
npm install express cors body-parser
```

### 4. Save the `index.js` File
Save file named `index.js` inside the `server` folder.


### 5. Start the Backend Server

```bash
node index.js
```

The backend API will now be available at `http://localhost:5000`.

---

## Frontend Setup (React.js)

### 1. Navigate Back to Root and Create React App

```bash
cd ..
npx create-react-app client
cd client
```

### 2. Install Axios

```bash
npm install axios
```

### 3. Update `src/App.js`

Modify `src/App.js` with the code shown in App.js file:

### 4. Update `src/App.css` for Styling

Modify `src/App.css` with the code shown in App.css file:

### 5. Start the React Development Server

```bash
npm start
```

The React app will now be running at `http://localhost:3000`.

---

## Running Both Frontend and Backend Together

To run both servers together, install `concurrently`:

```bash
npm install -g concurrently
```

Then, in the root directory (`task-manager`), create a `package.json` script to start both:

```json
"scripts": {
    "start": "concurrently \"npm run server\" \"npm run client\"",
    "server": "cd server && node index.js",
    "client": "cd client && npm start"
}
```

Now, start both servers:

```bash
npm start
```

---

## Conclusion

You have now set up a full-stack **Task Manager** application with React on the frontend and Node.js + Express on the backend. You can enhance it by adding features like task editing, user authentication, and persistent storage using a database like MongoDB or PostgreSQL.

Happy coding! 🚀

