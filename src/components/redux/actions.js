export const ADD_PERSONAJE = "ADD_PERSONAJE"
export const DELETE_PERSONAJE = "DELETE_PERSONAJE"
export const ORDER = "ORDER"
export const FILTER = "FILTER"


export const addPersonaje =((personaje) => {
    return {type: "ADD_PERSONAJE",
           payload: personaje,
        }
});


export const deletePersonaje =((id) => {
    return {type: "DELETE_PERSONAJE",
           payload: id,
        }
});


export const filterCards = ((gender) => {
    return{type: "FILTER",
        payload: gender
        };
})

export const orderCards = ((orderly) => {
  return{
    type: "ORDER",
    payload: orderly,
  }


})