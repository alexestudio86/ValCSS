import { NavLink } from "react-router-dom";

export function Navbar() {

    const pages = [
        {
            title:  'Home',
            path:   '/'
        },        {
            title:  'Tags',
            path:   'tags'
        }
    ];

    return (
        <nav className="bar black">
            {pages.map( page => (
                <NavLink className="bar-item button" to={page.path} >{page.title}</NavLink>
            ))}
      </nav> 
    )
};