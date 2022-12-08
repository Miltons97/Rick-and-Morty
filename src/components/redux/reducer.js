import { ADD_PERSONAJE, DELETE_PERSONAJE, FILTER, ORDER } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: []
  }
  
  const rootReducer = (state = initialState, {type,payload})=> {
      switch(type){
          case ADD_PERSONAJE:
              return{
                allCharacters:[...state.allCharacters, payload],
                myFavorites:[...state.myFavorites, payload] //allCharacters
                //   ...state,
                //   myFavorites:[...state.myFavorites, payload],
              };
              case DELETE_PERSONAJE:
                  return{
                      ...state,
                    myFavorites: state.myFavorites.filter(e => e.myFavorites !== payload),
                  };
              
              case FILTER:
               
                    const filterCharacters = payload === "All" ? 
                    state.allCharacters:
                     state.allCharacters.filter(
                        char => char.gender === payload
                    );
                    return{
                        ...state,
                        myFavorites: filterCharacters,
                    };

                case ORDER:
                 const sortedCharacters = state.allCharacters;
                 if(payload === "Ascendente")
                    sortedCharacters.sort((a,b) => a.id - b.id);
                  else 
                    sortedCharacters.sort((a,b) => b.id - a.id);
                 return{
                    ...state,
                    myFavorites: sortedCharacters,
                 }
                
                  default:
                      return{...state}
      }
  }
  

  export default rootReducer