import { Link } from 'react-router-dom';
import { useState} from 'react';
import Button from 'react-bootstrap/Button';



function Test(){
    const questions=[
        {
            question:"what does HTML stand for?",
            answers:[
                {choice:"Hyperlink and Text Markup Language",correct:false},
                {choice:"Hyper Text Markup Language",correct:true},
                {choice:"High-level Text Modeling Language",correct:false},
                {choice:"Hyper Transfer Markup Language",correct:false},
            ]
        },
        {
            question:"In css, what property is used to control the spacing between elements?",
            answers:[
                {choice:"padding",correct:false},
                {choice:"space",correct:false},
                {choice:"margin",correct:true},
                {choice:"gap",correct:false},
            ]
        },
        {
            question:"Wich javaScript keyword is used to declare a variable with block scope?",
            answers:[
                {choice:"var",correct:false},
                {choice:"let",correct:true},
                {choice:"const",correct:false},
                {choice:"variable",correct:false},
            ]
        },
        {
            question:"What is the purpose of the 'viewport' meta tag in HTML?",
            answers:[
                {choice:"To set the background color of the webpage",correct:false},
                {choice:"To define the size of the browser window",correct:false},
                {choice:"To control the layout on different devices",correct:true},
                {choice:"To specify the font family for the text",correct:false},
            ]
        },
        {
            question:"Which of the following is NOT a valid HTML element?",
            answers:[
                {choice:"<HTML>",correct:false},
                {choice:"<img>",correct:false},
                {choice:"<br>",correct:false},
                {choice:"<it>",correct:true},
            ]
        },
        {
            question:"What does the CSS property 'color:red',do? ",
            answers:[
                {choice:"Change text color to red",correct:true},
                {choice:"Change image color to red",correct:false},
                {choice:"Change backgroud color to red",correct:false},
                {choice:"Change border color to red",correct:false},
            ]
        },
        {
            question:"Which javaScript method is used to add a new element to the end of an array?",
            answers:[
                {choice:"push()",correct:true},
                {choice:"append()",correct:false},
                {choice:"add()",correct:false},
                {choice:"insert()",correct:false},
            ]
        },
        {
            question:"How can you center an element horizontally in CSS?",
            answers:[
                {choice:"text-align:center",correct:false},
                {choice:"margin:auto",correct:true},
                {choice:"align:center",correct:false},
                {choice:"position:center",correct:false},
            ]
        },
        {
            question:"What is the purpose of the alt attribute in an HTML image tag?",
            answers:[
                {choice:"It specifies the alignment of the image",correct:false},
                {choice:"It provides alternative text for the image",correct:true},
                {choice:"It defines the image's dimensions",correct:false},
                {choice:"It sets the image URL",correct:false},
            ]
        },
        {
            question:"How to link HTMl to JavaScript file?",
            answers:[
                {choice:"<link>",correct:false},
                {choice:"<url>",correct:false},
                {choice:"<href>",correct:false},
                {choice:"<script>",correct:true},
            ]
        },
    ]
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [count,setCount]=useState(false);
    const [score,setScore]=useState(0);
    const HandleAnswerButtonClick=(correct)=>{
        if(correct===true){
            setScore(score+1)
        }
        const nextQuestion =currentQuestion +1;
        if(nextQuestion<questions.length){
        setCurrentQuestion(nextQuestion)}
        else{
            setCount(true);
        }
    }

    return(
        <div id="body">
        <div>
        {count?(
            <div id="score-section">
                <h1>you scored {score} out of {questions.length}</h1>
                <Link to='/Ending'><Button variant="light" id="cancel">Finish</Button></Link>
            </div>
             ):(
            <>
            <div id="question-section">
                <div id="question-count" >
                    <h1>Question {currentQuestion+1}/{questions.length}</h1>
                        <div id="question-text">
                            {questions[currentQuestion].question}
                        </div>
                        <div id="answer-section">
                        {questions[currentQuestion].answers.map((answer)=><div id="button">
                        <Button variant="outline-light" onClick={()=>HandleAnswerButtonClick(answer.correct)}>{answer.choice}</Button>
                        </div>)}
                        </div>
                        <Link to='/Ending'><Button variant="light" id="cancel">Cancel</Button></Link>
                </div>
            </div>
      
                   
            </>
        )
    }

    </div>
    </div>
    

    )

}


export default Test;