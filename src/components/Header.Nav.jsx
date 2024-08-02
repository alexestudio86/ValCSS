import { NavLink } from "react-router-dom";

export function HeaderNav() {

    const pages = [
        {
            title:  'Home',
            path:   '/'
        },{
            title:  'Templates',
            path:   'templates'
        },{
            title:  'Tags',
            path:   'tags'
        }
    ];

    return (
        <nav>
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

            </div>
      </nav> 
    )
};