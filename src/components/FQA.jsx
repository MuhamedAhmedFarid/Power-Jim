import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'


function FQA(props) {
    const [isAnswerShowing, setIsAnswerShowing] = React.useState(false)


  return (
    <artical className='faq'>
        <div onClick={() => setIsAnswerShowing(prev => !prev)} >
            <h4>{props.question}</h4>
            <button className='faq__icon'>{isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        
        </div>
        {isAnswerShowing && <p>{props.answer}</p>}
    </artical>
  )
}

export default FQA