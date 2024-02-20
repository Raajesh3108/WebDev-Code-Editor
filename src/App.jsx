import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  // use state for handling codes for html css js
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  
  // lets code login of compile code
  const handleOutput = (e) => {
    // code
    // get iframe using or useref hook but i am using id
    const iframe = document.getElementById("output");
    // add html and css code
    iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";

    // now add js code
    iframe.contentWindow.eval(jsCode);
  };

  return (
    <div className="playground">
      {/* for ide */}
      <div className="left">
        {/* for html */}
        <label>HTML</label>
        <textarea name="html" onChange={(e) => setHtmlCode(e.target.value)}></textarea>
        {/* for css */}
        <label>CSS</label>
        <textarea name="css" onChange={(e) => setCssCode(e.target.value)}></textarea>
        {/* for javascript */}
        <label>JavaScript</label>
        <textarea name="javascript" onChange={(e) => setJsCode(e.target.value)}></textarea>
      </div>
      {/* for output */}
      <div className="right">
        <button onClick={handleOutput}>Run</button>
        {/* we use iframe to render html in our web app */}
        <iframe id="output"></iframe>
      </div>
    </div>
  );
};

export default App;
