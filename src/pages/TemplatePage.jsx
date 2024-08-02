

export function TemplatePage() {

    const {template} = useParams();

    return (
        <>
            {identTemplate(template)}
        </>
    )
}