import { useRef } from "react"

export const ModalPokemon = ({stats, name}) => {
console.log(stats)
    
 
  return (
    <>


<div className="modal fade" id="PokeModal" aria-labelledby="PokeModalLabel" aria-hidden="true" data-bs-toggle="modal" data-bs-target="#PokeModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="PokeModalLabel">{name}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {
            stats.map((s,i)=>{
                return(
                    <div key={i} className="d-flex justify-content-between">
                        <p>{s.stat.name}</p>
                        <p>{s.base_stat}</p>
                    </div>
                )
            })
        }
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        <button
            className="btn btn-primary mx-2 my-2"
            data-bs-toggle="modal"
            data-bs-target="#PokeModal"
            >
            Ver Detalles
        </button>
    </>

  )
}
