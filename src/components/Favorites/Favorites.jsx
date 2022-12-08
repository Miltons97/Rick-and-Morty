import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import{filterCards, orderCards} from "../redux/actions"


export function Favorites(props) {
    const dispatch = useDispatch();
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div>
            <div>
                <select name="order" id="" onChange={e => dispatch(orderCards(e.target.value))}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
                </select>
                <select name="" id="" onChange={handleFilter}>
                    <option value="default" disabled>
                      Select...
                    </option>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Gender less">Gender less</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div>
                {props.myFavorites && props.myFavorites.map((personaje, index) => (<Card
                        key={index}
                        id={personaje.id} 
                        name={personaje.name}
                        species={personaje.species}
                        gender={personaje.gender}
                        image={personaje.image}
                        onClose={personaje.onClose(personaje.id)}
                                     />))}
        </div>
        </div>
    )



}


export function mapStateToProps (state){
    return {
       myFavorites: state.myFavorites
    }
 }

 export default connect (mapStateToProps, null)(Favorites)