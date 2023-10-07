import React from 'react'
import { Link } from 'react-router-dom';
import "../pages/Second/style.css";
const ChooseSelectBox = ({numbers}) => {
    return (
        <div className="choose-container">
            {numbers && numbers.map((num) => {
                const { key, value } = num;
                return (
                    <div key={Math.random()} className="select-box" >
                        <Link to={`${key}`} >{value}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ChooseSelectBox