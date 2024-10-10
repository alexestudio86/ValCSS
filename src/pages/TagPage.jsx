import { useLoaderData } from "react-router-dom";
import 'google-code-prettify/bin/prettify.min.css';  // Estilos para el resaltado de sintaxis
import 'google-code-prettify/bin/prettify.min.js';
import { useEffect } from "react";

export function TagPage() {

    const {tag} = useLoaderData();

    const htmlEscape = (e) => {
        return e
        .replace(/&/g, '&amp;')
        .replace(/<br\s*\/?>/g, '\n')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    useEffect( () => {
        // Ejecutar prettify para resaltar el código
        window.PR.prettyPrint();
    });

    return (
        <main>
            {tag.map( (t,i) => (
                <article className="white p-2" key={i}>
                    <h1 className="text-center">{t.title}</h1>
                    <pre className="prettyprint linenums">
                        <code className="language-html" dangerouslySetInnerHTML={{__html: htmlEscape(t.example)}}>
                        </code>
                    </pre>
                    <p>{t.description}</p>
                </article>
            ))}
        </main>
    )
}