import "./BasicItem.css";
import Item from "../models/Item";
import { Link } from "react-router-dom";
import menu from "../menu";

interface Props{
    item: Item;
}

export default function BasicItem({item}: Props){

    return(
        <div className ="BasicItem__container">
            <p>{item.name}</p>
            <p>${(item.price).toFixed(2)}</p>
            <Link to={`/details/${item.id}`}>Details</Link>
        </div>
    )
};