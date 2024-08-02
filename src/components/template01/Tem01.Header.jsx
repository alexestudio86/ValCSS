import { Tem01HeaderNav } from "./Tem01.Header.Nav";


export function Tem01Header() {
    return (
        <header>
            <h1 style={{fontSize: '30px', padding: '16px', backgroundColor:'white'}}>{document.title}</h1>
            <Tem01HeaderNav/>
        </header>
    )
}