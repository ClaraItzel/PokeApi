
import './App.css'
import { LoadingMessage, ModalPokemon, PokeCard, PokeNavigation, PokeSearch } from './components'
import { useCounter, useFetchApi } from './hooks'

function App() {

  const initialPokemon = 1;
  const {counter, increment, decrement,  getNumber} = useCounter(initialPokemon);
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

        { !loading ?

              <>
              <PokeSearch
                getNumber={getNumber}
                counter={counter}
              />

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

                          height = {data?.height}
                          weight = {data?.weight}
                          types = {data?.types}
                          abilities = {data?.abilities}

                          
                          />
                
          
                  <PokeNavigation
                    increment={increment}
                    decrement={decrement}
                    counter={counter}
                  />

                  <ModalPokemon
                    stats={data?.stats || []}
                    name={data?.name}
                  />
              

                

                </>
                : <>
                <section>
                 

                </section>
                </>
             }
       
       

      </main>
    </>
  )
}

export default App
