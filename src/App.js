import React from 'react';
import back from './back.jpg';
import './App.css';

// typing effect plugin, you can use from here - https://www.npmjs.com/package/typewriter-effect
import Typewriter from 'typewriter-effect';

function App() {
  const info = [
    ">> Hi  <br/>",
    ">> Nice to see you <br/>",
    ">> Тhis interesting plugin has a typing effect. <br/>",
    ">> Тake it and use it well! 😇",
  ]
    return (
      <div className="terminal">
        <div className="term_top">
          <div className="controls">
            <div className="close">x</div>
            <div className="min">_</div>
            <div className="max">[]</div>
          </div>
          <span className="akk">name@ubuntu:~/Desktop</span>
          </div>
        <div className="term_body" id="term_body">
          <Typewriter
            onInit={(typewriter) => {
              for(let i = 0; i < info.length; i++){
                typewriter.typeString(info[i])
                    .pauseFor(2500)
                    .start();
              }
            }}
          />
        </div>
    </div> 
    );
}

export default App;
