import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { context } from './../../hooks/store';
import "./style.css";


const ThirdPage = () => {
  const {answerList} = useContext(context);
  const {questionNo,answerNo} = useParams();
  const {answerResult} = answerList.filter((answer)=> answer.questionNo == questionNo && answer.answerNo == answerNo)[0];

  return (
    <>
      <div className="answer-container">
        အဖြေ:<h3 className="answer-title">{answerResult}</h3>
       
      </div>
    </>
  )
}

export default ThirdPage