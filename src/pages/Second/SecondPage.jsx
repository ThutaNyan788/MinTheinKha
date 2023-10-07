import React, { useContext } from 'react'
import "./style.css";
import { useParams, Link, useLocation, Outlet } from "react-router-dom"
import { context } from '../../hooks/store';
import ChooseSelectBox from './../../components/ChooseSelectBox';

const SecondPage = () => {
  const { questionNo } = useParams();
  const location = useLocation();
  const { numberlist: numbers, questionList } = useContext(context);

  const { questionName } = questionList.filter((no) => no.questionNo == questionNo)[0];



  return (
    <>
      <div className="sec-container">
        <div>
          <Link to="/" className="sec-back-btn">နောက်သို့</Link>
          <h3 className="sec-title">{questionName}</h3>
        </div>

        {(location.pathname == `/numberList/${questionNo}`) && (
          <ChooseSelectBox numbers={numbers} />
        )}

        <Outlet/>
      </div>
    </>
  )
}

export default SecondPage