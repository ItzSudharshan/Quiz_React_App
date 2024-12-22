import React, { useState } from 'react';
import { data } from './data';
import './QuizCSS/stylequiz.css'

export default function QuizApp() {
    const [index, setIndex] = useState(0);

    //creating score even for quiz 
    const [score, setScore] = useState(0);

    const [option, setOption] = useState('');

    //When handle next is called (when user clicks next button question number gets updated as well as every time you click next option gets reset )

    const [finished, setFinish] = useState(false);

    //creating an array of correct answers
    const correctAnswers = [
        'Option1',  // Redux is Centralized State Management System
        'Option2',  // To build user interfaces
        'Option1',  // useState
        'Option3',  // Using props
        'Option1',  // setState()
        'Option3',  // componentDidLeave
        'Option1',  // JavaScript XML
        'Option2',  // npx create-react-app my-app
        'Option3',  // 3000
        'Option2'   // To perform side effects in function components
    ];
    
    
    const handleNext = () => {
        if (correctAnswers[index] === option) {
            setScore(score + 1);
        }
    
        if (index < data.length - 1) {
            setIndex(index + 1);
            setOption(null);
        } else {
            setFinish(true);
        }
    }
        if(finished) {
            return(
                <>
                <h1>Quiz Finished</h1>
                <h3>Your Score is {score} out of {data.length}</h3>
                </>
            )
        }


    

    const handleSelect = (optn) => {
        setOption(optn);
    }
    return (
      <div className='quiz'>
        <h1>Quiz</h1>
        <h3>{data[index].Question}</h3>
        <ul>
          <li className={option === 'Option1' ? 'selected': ''}
          onClick={() => {handleSelect('Option1')}}
          >{data[index].Option1}</li>



          <li className={option === 'Option2' ? 'selected': ''}
          onClick={() => {handleSelect('Option2')}}
          >{data[index].Option2}</li>


          <li className={option === 'Option3' ? 'selected': ''}
          onClick={() => {handleSelect('Option3')}}
          >{data[index].Option3}</li>



          <li className={option === 'Option4' ? 'selected': ''}
          onClick={() => {handleSelect('Option4')}}
          >{data[index].Option4}</li>

        </ul>
        <button onClick={handleNext} disabled = {!option}>Next</button>
        <h5>Question {index + 1} of {data.length}</h5>
      </div>
    );
}

