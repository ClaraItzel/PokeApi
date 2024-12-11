import { useRef } from "react"

export const PokeSearch = ({getNumber, counter}) => {

  const inputRef = useRef(null)

  return (
      <section>
                    
        <label htmlFor="numberPomemon"> 
        Ingrese el numero del Pokemon
        </label>

        <input
        type="number"
        id="numberPokemon"
        className='border border-gray-300 rounded-md p-2'
        onClick={ (e)=> e.target.select()}
        ref={inputRef}
        />

        <button
        className='btn btn-primary'
        onClick={ ()=> getNumber(Number(inputRef.current.value)) }
        >
          Buscar
        </button>
    </section>
  )
}
