import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Start(){
    return <div id="body">
                <div id="section">
                    <h1>Welcome to the Quiz</h1>
                    <p>This quiz will test your knowledge on various topics related to FrontEnd development.<br></br>
                        Are you ready to begin?</p>
                    <Link to="/Test"> <Button variant="outline-light">Start Quiz</Button></Link>
                </div>
            </div>

}

export default Start;