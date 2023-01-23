import { Button } from './components/Button'
import { useEffect, useState } from 'react'
import { evaluate } from 'mathjs'
import styles from './App.module.scss'

function App() {
  const [display, setDisplay] = useState('')

  const addValue = value => setDisplay(display + value)

  const clearDisplay = () => setDisplay('')
  
  const calculate = () => {
    if(display){
      try{
        setDisplay(evaluate(display).toFixed(2))
      }
      catch{
        alert('Error de sintaxis')
      }
    }
    else{
      alert('Nada que calcular!')
    }
  }

  const functionFindKey = event => {
    if(event.keyCode == 13){
      calculate()
    }
  }

  const deleteCharacter = () => display && setDisplay(display.toString().slice(0, -1))

  useEffect(() => {
    document.addEventListener('keydown', functionFindKey)
    return () => document.removeEventListener('keydown', functionFindKey)
  }
  ,[])

  return (
    <div className={styles.calculator}>
      <div className={styles.display}><p>{display}</p></div>
      <div className={styles.container__buttons}>
        <button onClick={() => clearDisplay()} className={styles.button__clear}>C</button>
        <button onClick={() => deleteCharacter()} className={styles.button__delete}>DEL</button>
        <Button onClick={addValue}>*</Button>
        <Button onClick={addValue}>7</Button>
        <Button onClick={addValue}>8</Button>
        <Button onClick={addValue}>9</Button>
        <Button onClick={addValue}>/</Button>
        <Button onClick={addValue}>4</Button>
        <Button onClick={addValue}>5</Button>
        <Button onClick={addValue}>6</Button>
        <Button onClick={addValue}>+</Button>
        <Button onClick={addValue}>1</Button>
        <Button onClick={addValue}>2</Button>
        <Button onClick={addValue}>3</Button>
        <Button onClick={addValue}>-</Button>
        <Button onClick={addValue}>0</Button>
        <Button onClick={addValue}>.</Button>
        <button id='calculate' onClick={() => calculate()} className={styles.calculate}>=</button>
      </div>  
    </div>
  )
}

export default App
