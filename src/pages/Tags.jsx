import { Link, useLoaderData } from "react-router-dom";
import styles from "./Tags.module.css";

export function Tags() {

    const {tags} = useLoaderData();

    return(
        <>
            <main>
                <h1 className={styles.h1}>Tags HTML</h1>
                    {
                        tags.length > 0
                        ?
                        <div className={[styles['tags-container']].join(' ')}>
                            {tags.map((tag, index) => (
                                <article key={index} style={{background: 'white', border: '1px solid #ccc'}}>
                                    <Link to={`search?q=${tag.id}`} style={{textDecoration: 'none'}}>
                                        <header style={{textTransform:'uppercase', padding:'16px', backgroundColor:'#f1f1f1', color:'#000'}}>{tag.title}</header>
                                        <section style={{padding:'16px'}}>
                                            <p>{tag.example}</p>
                                            {/*<code>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948. </code>*/}
                                        </section>
                                        <footer style={{backgroundColor:'#9e9e9e', color:'#000', padding:'16px', textAlign:'center'}}>{tag.tag}</footer>
                                    </Link>
                                </article>
                            ))}
                        </div>
                        :
                        <p>No hay</p>
                    }
            </main>
            <div>
                <audio></audio>
                <b></b>
                <base></base>
                <bdo></bdo>
                <blockquote></blockquote>
                <br></br>
                <button></button>
                <canvas></canvas>
                Caption:
                {`<caption></caption>`}
                <cite></cite>
                <code></code>
                {`<col></col>`}
                {`<colgroup></colgroup>`}
                <datalist></datalist>
                <dd></dd>
                <del></del>
                <details></details>
                <dialog></dialog>
                <dfn></dfn>
                <dl></dl>
                <dt></dt>
                <em></em>
                <embed></embed>
                <fieldset></fieldset>
                <figure></figure>
                <footer></footer>
                <form></form>
                <header></header>
                <hr></hr>
                <i></i>
                <iframe></iframe>
                <img></img>
                <input></input>
                <ins></ins>
                <kbd></kbd>
                <label></label>
                <legend></legend>
                <li></li>
                <link></link>
                <mark></mark>
                <map></map>
                <menu></menu>
                <meta></meta>
                <meter></meter>
                <nav></nav>
                <noscript></noscript>
                <object></object>
                <ol></ol>
                <optgroup></optgroup>
                <option></option>
                <output></output>
                <p></p>
                <param></param>
                <pre></pre>
                <progress></progress>
                <q></q>
                <ruby></ruby>
                <rp></rp>
                <rt></rt>
                <samp></samp>
                <script></script>
                <section></section>
                <select></select>
                <small></small>
                <source></source>
                <span></span>
                <strong></strong>
                <style></style>
                <sub></sub>
                <sup></sup>
                <table></table>
                {`<tbody></tbody>`}
                {`<td></td>`}
                <textarea></textarea>
                {`<tfoot></tfoot>`}
                {`<th></th>`}
                {`<thead></thead>`}
                <time></time>
                <title></title>
                {`<tr></tr>`}
                <u></u>
                <ul></ul>
                <var></var>
                <video></video>
            </div>
        </>
    )
}