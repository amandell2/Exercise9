import "./MenuRoute.css";
import BasicItem from "./BasicItem";
import menu from "../menu";
/*
The MenuRoute component will be rendered when the path matches “/” exactly. 
The MenuRoute component will contain the BasicItem component. 
Use the map method to produce as many BasicItem components as there are items in the menu.
*/

export default function MenuRoute(){
    return(
        <div>
            {menu.map((item)=>
             <BasicItem key={item.id} item={item}/>
            )}
        </div>
    )
};