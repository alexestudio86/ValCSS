import { NavLink } from "react-router-dom";
import styleT01 from './Tem01.Header.Nav.module.css';

export function Tem01HeaderNav() {

    const pages = [
        {
            title:  'Templates',
            path:   'templates'
        },{
            title:  'dropdown',
            path:   'analytics'
        },{
            title:  'Tags',
            path:   'tags'
        }
    ];

    return (
        <nav id={styleT01["nav01"]}>
            <NavLink to='/' end>{document.title}</NavLink>
            <button style={{display:'none'}}>Open</button>
            <div>
                <ul>
                    {pages.map( (page, index) => (
                        <li key={index}>
                            <NavLink to={page.path} end >{page.title}</NavLink>
                        </li>
                    ))}
                </ul>
                <form>
                    <input type="search" placeholder="search" />
                    <button type="submit"></button>
                </form>
            </div>
      </nav> 
    )
};