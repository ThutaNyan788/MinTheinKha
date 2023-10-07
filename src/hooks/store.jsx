import { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";

export const context = createContext();
import {questions,answers,numberList} from "../../_data/db.json";

export const ContextProvider = ({children})=>{
    const [questionNo,setQuestionNo] = useState(0);
    const [answerNo,setAnswerNo] = useState(0);

    // const {data:questionList,setData} = useFetch("http://localhost:3000/questions");
    // const {data:numberList} = useFetch("http://localhost:3000/numberList");
    // const {data:answerList} = useFetch("http://localhost:3000/answers");
    const questionList = questions;
    const numberlist = numberList;
    const answerList = answers;

    return (
        <context.Provider value={{
           questionList,
           numberlist,
           answerList,
           setQuestionNo,
           setAnswerNo,
           questionNo,
           answerNo,
           
        }}>
            {children}
        </context.Provider>
    )
}