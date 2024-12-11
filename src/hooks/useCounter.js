import {  useState } from "react"



export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        if(counter < 150)
        setCounter((cur)=>cur + 1)
    }

    const decrement = () =>{ 
        if(counter > 0)
            setCounter((cur)=>cur - 1)
    }

    const reset = () =>  setCounter(initialValue)


    const getNumber = (number) => {
        
           if(number < 0 || number > 150)return;
           
        setCounter(number)            
        }
    
    return{
        counter,
        increment,
        decrement,
        reset,

        setCounter,
        getNumber
    }
}