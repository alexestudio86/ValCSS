import style01 from  '../../components/template01/val.template-01.module.css';

export function Tem01Layout({children}) {
    return (
        <div id={style01['tem01']}>
            {children}
        </div>
    )
}