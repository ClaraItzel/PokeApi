
export const PokeCard = ({id, name, sprites=[], height, weight, types, abilities} ) => {

  return (
    <section >
       <div >
            <div className="flex flex-wrap justify-center items-center space-x-4">
            
            {
                sprites.map((sprite, index) => (
                    <img key={index} src={sprite} className="shadow-lg " alt={name} style={{height:'15rem', width: "15rem"}} />
                ))
            }
            </div>

            <div className="card-header text-center font-bold p-5">
              <div className="card-body">
                  <h5 className="card-title text-uppercase"> {id}. {name} </h5>
                  <p className="card-text">Altura: {height} </p>
                  <p className="card-text">Peso: {weight} </p>
                  <p className="card-text">Tipo: {types.map(t=>t.type.name).join(', ')} </p>
                  <p className="card-text">Habilidades: {abilities.map(a=>a.ability.name).join(', ')} </p>
              </div>
            </div>

        </div>
    </section>
  )
}
