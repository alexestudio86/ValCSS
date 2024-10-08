import { useLoaderData, useSearchParams } from "react-router-dom"

export function TagPage() {
    
    const [params, setParams] = useSearchParams();
    const {tag} = useLoaderData();
    console.log('tag:', tag)

    return (
        <main style={{backgroundColor: 'white'}}>
            Param {tagSlug}
        </main>
    )
}