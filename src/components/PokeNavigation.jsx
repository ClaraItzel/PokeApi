
export const PokeNavigation = ({increment, decrement, counter}) => {
  return (
    <>
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
    </>
  )
}
