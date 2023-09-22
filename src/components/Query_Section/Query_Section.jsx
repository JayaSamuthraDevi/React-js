import React from 'react'
import "./Query_Section.css"
import Icons from '../../assets/icons/Icons'

function Query_Section() {
  return (
    <>
    <div className='query_Section  col'>
        <h2>Ask your queries here!</h2>
        <p className='msg-box'> Hello! I am your Financial Analyst AI, I can assist you with financial analysis on companies. Type your questions below. </p>

        <div className='input-outer-div'>

     
        <form>
            <input type="text" className='input-box' id='input_box' placeholder='Type message'/>
           <div className="input-btn">
           <img src={Icons.input_btn} alt=""  />

           </div>
            
        </form>
        </div>
    </div>
    </>
  )
}

export default Query_Section