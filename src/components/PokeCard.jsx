import React from 'react'

export const PokeCard = ({id, name, sprites=[]}) => {

  return (
    <section style={{width:'18rem'}}>
       <div style={{width: "18rem"}}>
            <div className="flex space-x-3 ">
            
            {
                sprites.map((sprite, index) => (
                    <img key={index} src={sprite} className="shadow-lg " alt={name} style={{height:'15rem', width: "15rem"}} />
                ))
            }
            </div>
            <div className="card-body">
                <h5 className="card-title text-uppercase"> {id}. {name} </h5>
            </div>

        </div>
    </section>
  )
}
