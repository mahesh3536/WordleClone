import React from 'react'

export default function Model({isCorrect,turn,solution}) {
  return (
    <div className='Model'>
     {isCorrect && (
        <div>
            <h1>You win!</h1>
            <p className='solution'>{solution}</p>
            <p>You found solution in {turn} guesses </p>
        </div>
     )}
     {!isCorrect && (
        <div>
            <h1>Never Mind</h1>
            <p className='solution'>{solution}</p>
            <p>Better Luck next time</p>
        </div>
     )}
    </div>
  )
}
