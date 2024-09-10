# WebDev Code Editor

A web-based code editor built using React and Vite, designed for web developers to write, edit and preview code in real-time.

## 🚀 How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/Raajesh3108/WebDev-Code-Editor.git
```

2. Navigate to the project directory:

```bash
cd WebDev-Code-Editor
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and go to `http://localhost:3000` to start coding!

## 🛠 Code Breakdown

### Step 1: Vite's Default HTML Structure

When you create a React project using Vite, it generates a basic `index.html` file located in the `public` folder. This file is the entry point for our React application.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Code Editor Project</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

This `index.html` file is used by Vite to mount the React application and render content dynamically.

### Step 2: Import Dependencies

First, import React and the necessary hooks (`useState`), along with your `App.css` for styling.

```jsx
import React from "react";
import { useState } from "react";
import "./App.css";
```

### Step 3: Set Up Component and State

Create the `App` component and initialize state variables to hold HTML, CSS and JavaScript code.

```jsx
const App = () => {
  // use state for handling codes for html, css, and js
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
```

### Step 4: Handling Output

The `handleOutput` function is responsible for injecting the HTML, CSS and JavaScript code into an `iframe` to render the output.

```jsx
const handleOutput = (e) => {
  // Get iframe using id
  const iframe = document.getElementById("output");

  // Inject HTML and CSS code into the iframe
  iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

  // Inject JavaScript code into the iframe
  iframe.contentWindow.eval(jsCode);
};
```

### Step 5: Creating the UI

The JSX structure consists of two main sections: the code input area (left) and the output area (right). The left side contains three text areas for HTML, CSS, and JavaScript input. The right side displays the output in an iframe.

```jsx
return (
  <div className="playground">
    {/* IDE Section */}
    <div className="left">
      {/* HTML Input */}
      <label>HTML</label>
      <textarea name="html" onChange={(e) => setHtmlCode(e.target.value)}></textarea>

      {/* CSS Input */}
      <label>CSS</label>
      <textarea name="css" onChange={(e) => setCssCode(e.target.value)}></textarea>

      {/* JavaScript Input */}
      <label>JavaScript</label>
      <textarea name="javascript" onChange={(e) => setJsCode(e.target.value)}></textarea>
    </div>

    {/* Output Section */}
    <div className="right">
      <button onClick={handleOutput}>Run</button>
      <iframe id="output"></iframe>
    </div>
  </div>
);
```