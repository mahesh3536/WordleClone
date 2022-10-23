import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Keypad from './Keypad'
// components
import Grid from './Grid'
import Model from './Model'
import { useState } from 'react'
export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup,usedKeys } = useWordle(solution)
  const [showModel,setshowModel] = useState(false)
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    if(isCorrect){
      // console.log('congrats,you win')
      setTimeout(()=>setshowModel(true),2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if(turn > 5){
      setTimeout(()=>setshowModel(true),2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup,isCorrect,turn])
 
  return (
    <div>
      {/* <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div> */
       console.log(solution)}
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys}/>
      {showModel && <Model isCorrect={isCorrect} turn = {turn} solution = {solution}/>}
    </div>
  )
}