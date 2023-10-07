import React, { useContext, useEffect, useRef, useState } from 'react'
import "./style.css"
import useFetch from './../../hooks/useFetch';
import {Link} from "react-router-dom"
import { context } from '../../hooks/store';
const FirstPage = () => {
    const {questionList} = useContext(context);
    const [filters,setFilters] = useState([]);
    const searchfield = useRef();
    
    useEffect(()=>{
        if(questionList){
            setFilters(questionList);
        }
    },[questionList]);


    const handleSubmit=(e)=>{
        e.preventDefault();
        let value = searchfield.current.value;
        
        
        if(value == ""){
           setFilters(questionList);
        }else{
            let questions = questionList.filter((q)=>q.questionName.includes(value));
            setFilters(questions);
            
        }
         
    }
    return (
        <>
            <h1 className="first-title">သိလိုသောမေးခွန်းအားရှာ ဖွေပါ။</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" id="" ref={searchfield} placeholder="ရှာဖွေရန်..." className="search-bar" />
                </form>
            </div>

            {/* <!-- first page looping --> */}
            <div className="first-question-container">
                <ul>
                    {filters && filters.map((item) => {
                        return (
                            <Link to={`/numberList/${item.questionNo}`} key={item.questionNo} >
                                <li ><span>{item.questionNo}</span>{item.questionName}</li>
                            </Link>
                        )
                    })}

                </ul>
            </div>
        </>
    )
}

export default FirstPage