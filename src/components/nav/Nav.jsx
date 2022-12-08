import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import{Link} from "react-router-dom"
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"


export default function Nav (props) {
    return <div className={styles.Nav}>
         <NavLink to='/home' className={styles.gradient}>
        'Home'
        </NavLink>

        <NavLink to='/about'className={styles.gradient}>
        'About'
        </NavLink> 
         
         <NavLink to= '/Favorites' className={styles.gradient}>
          'Likes'
         </NavLink>

        
        <SearchBar onSearch = {props.onSearch}/>
        </div>;
}
