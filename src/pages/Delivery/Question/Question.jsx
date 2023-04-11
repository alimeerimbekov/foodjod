import React, {useState} from 'react';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'

const Question = ({item}) => {

    const [active, setActive] = useState(false)


    return (
        <div className='delivery__card' onClick={() => setActive((prev) => !prev)}>
            <h3 className="delivery__title" style={{borderRadius: !active ? '10px' : ''}}>
            <span>{item.title}</span>
            <span>
                {
                    active ? <BsChevronUp/> : <BsChevronDown/>
                }
            </span>
            </h3>
            <p style={{display: active ? 'flex' : 'none'}} className="delivery__text">{item.answer}</p>
        </div>
    );
};

export default Question;