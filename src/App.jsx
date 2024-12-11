
import './App.css'
import { LoadingMessage, PokeCard } from './components'
import { useCounter, useFetchApi } from './hooks'

function App() {
  const {counter, increment, decrement } = useCounter(1);
  const { data, loading, hasError, errorMessage } = useFetchApi(`https://pokeapi.co/api/v2/pokemon/${counter}`)


  console.log(loading)

  return (

    <>
      <main
        className='container'
      >

        <h1
          className='text-4xl font-bold text-center pt-5 text-indigo-500'
        >PokeApi</h1>

        {
          loading && data ? <LoadingMessage /> : <>

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
          
          </>
        }

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
       
       

      </main>
    </>
  )
}

export default App
