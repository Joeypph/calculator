import React from 'react'
import '../calc.css'

const Calculator = () => {
  
  const createDigits = () => {
    const digitsBtn = []
    for (let i = 1; i < 10; i++) {
      digitsBtn.push(
        <button key={i}>{i}</button>
      )
    }
    return digitsBtn
  }
  return (
      <div className="app">
        <div className="calculator">
          <div className='inputContainer'>
            <span>0</span>
          </div>
          <div className='operations'>
            <button>/</button>
            <button>*</button>
            <button>-</button>
            <button>DEL</button>
          </div>
          <div className='digits'>  
            {createDigits()}
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>
  )
}

export default Calculator