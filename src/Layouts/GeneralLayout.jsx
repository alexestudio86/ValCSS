import { Header } from "../components/Header";
import style00 from '../css/val.min.module.css';


export function GeneralLayout({children}) {
    return (
        <div className={[style00['light-gray'], style00['vh-100'], style00['vw-100']].join(' ')} id={style00['tem00']}>
            <div className={[style00['container']]}>
                <Header/>
                {children}
            </div>
        </div>
    )
}