import { Link } from 'react-router-dom';
import './Header.css';

/*
The Header component will always be present, regardless of the route. 
The text “Menu” in the header is a link to the “/” path while the text “search” is a link to the “/search” path. (use <Link></Link>).
*/

export default function Header(){
    
    return(
        <Link to="/">
            <h1>Menu</h1>
        </Link>
    )
}