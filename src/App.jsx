
import { useState } from 'react';
import './App.css'
import { LoadingMessage, PokeCard } from './components'
import { useCounter, useFetchApi } from './hooks'

function App() {

  const [currentPokemon, setCurrentPokemon] = useState(0)

  const {counter, increment, decrement, setCounter } = useCounter(initialValue);
  const { data, loading, hasError, errorMessage } = useFetchApi(counter);



  return (

    <>
      <main
        className='container'
      >

        <h1
          className='text-4xl font-bold text-center pt-5 text-indigo-500'
        >PokeApi</h1>



        {
          loading && <LoadingMessage /> }

        { !loading && !!counter ?

              <>

              <PokeCard 
                      data={counter}
                      name={data?.name}
                          id={data?.id}

                            sprites={[
                              data?.sprites.front_default,
                              data?.sprites.back_default,
                              data?.sprites.front_shiny,
                              data?.sprites.back_shiny
                          ]}
                          />
                
          

              <button 
                    className="btn btn-primary mx-2 my-2"
                    onClick={ ()=> counter > 1 ?  decrement() : null}>
                    Anterior
                </button>

                <button 
                    className="btn btn-primary mx-2 my-2"
                    onClick={ increment }>
                    Siguiente
                </button>

                <button
                    className="btn btn-primary mx-2 my-2"
                    onClick={ ()=> counter > 0 ? counter : null}>
                    Ver Detalles
                </button>

                </>
                : <>
                <section>
                  <div className='flex justify-evenly font-bold'>
                         <label htmlFor="numberPomemon"> 
                            Ingrese el numero del Pokemon
                         </label>

                          <input
                            type="number"
                            id="numberPokemon"
                            value={currentPokemon}
                            className='border border-gray-300 rounded-md p-2'
                            onClick={ (e)=> e.target.select()}
                            onChange={ (e)=> setCurrentPokemon(e.target.value)}
                          />
                  </div>
                  <button
                    onClick={ ()=> setCounter(currentPokemon)}
                  >
                    Buscar Pokemon
                  </button>
                </section>
                </>
             }
       
       

      </main>
    </>
  )
}

export default App
