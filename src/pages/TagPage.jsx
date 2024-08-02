import { useParams } from "react-router-dom"

export function TagPage() {
    
    const {tag} = useParams();

    return (
        <main style={{backgroundColor: 'white'}}>
            Param {tag}
        </main>
    )
}