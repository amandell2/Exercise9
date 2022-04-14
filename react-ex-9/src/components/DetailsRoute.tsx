import "./DetailsRoute.css";
import Item from "../models/Item";
import menu from "../menu";
import { useParams } from "react-router-dom";
/*
The DetailsRoute component will be rendered when the path matches “/details/:id” exactly. 
This component shows all the values of a particular menu item based on the id derived from the path params.
*/


export default function DetailsRoute(){
    const id: string | undefined = useParams().id;
    const selectedItem: Item | undefined = menu.find((item)=> item.id === id);
    
    return(
        <div>
            <p>Name: {selectedItem?.name}</p>
            <p>Description: {selectedItem?.description}</p>
            <p>Calories: {selectedItem?.calories}</p>
            <p>Price: ${selectedItem?.price.toFixed(2)}</p>
            {selectedItem?.vegetarian ? <p>Vegetarian</p> : <p>Not Vegetarian</p>}
        </div>
    )
};