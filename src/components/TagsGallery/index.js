export const TagsGallery = () => {

    const galleryDetails = [
        {
            title:          'Alosaurio',
            id:             1,
            src:            require('@site/static/img/alosaurio.jpg').default,
            description:    'Dinosaurio carnívoro y bípedo del Jurásico tardío, de gran tamaño (8-12 metros), con poderosos dientes y garras. Fue uno de los principales depredadores de su época.'
        },        {
            title:          'Argentinosaurus',
            id:             2,
            src:            require('@site/static/img/argentinosaurus.jpg').default,
            description:    'Dinosaurio gigantesco herbívoro del Cretácico, considerado uno de los más grandes que existió, alcanzando hasta 40 metros de largo y 100 toneladas de peso'
        },        {
            title:          'Brontosaurus',
            id:             3,
            src:            require('@site/static/img/brontosaurus.jpg').default,
            description:    'Dinosaurio herbívoro del Jurásico tardío, que caminaba en cuatro patas y tenía un cuello largo. Alcanzaba hasta 22 metros de largo y pesaba alrededor de 15 toneladas'
        },        {
            title:          'Dilofosurio',
            id:             4,
            src:            require('@site/static/img/dilofosurio.jpg').default,
            description:    'Dinosaurio carnívoro del Jurásico temprano, con una longitud de hasta 7 metros. Se caracterizaba por tener dos crestas óseas en su cabeza.'
        },        {
            title:          'Diplodocus',
            id:             5,
            src:            require('@site/static/img/diplodocus.jpg').default,
            description:    'Dinosaurio herbívoro del Jurásico tardío, con un cuerpo largo y esbelto, alcanzando hasta 30 metros de longitud. Tenía un cuello y una cola muy largos, y caminaba en cuatro patas.'
        },{
            title:          'Iguanodon',
            id:             6,
            src:            require('@site/static/img/iguanodon.jpg').default,
            description:    'Dinosaurio herbívoro del período Cretácico, conocido por su gran tamaño (hasta 10 metros) y por tener un pulgar en forma de espina que usaba para defenderse. Caminaba en dos o cuatro patas.'
        },        {
            title:          'Parasaurolophus',
            id:             7,
            src:            require('@site/static/img/parasaurolophus.jpg').default,
            description:    'Dinosaurio herbívoro del Cretácico, conocido por su distintiva cresta larga y curva en la cabeza. Alcanzaba hasta 10 metros de longitud y caminaba en dos o cuatro patas.'
        },        {
            title:          'Stegosaurus',
            id:             8,
            src:            require('@site/static/img/stegosaurus.jpg').default,
            description:    'Dinosaurio herbívoro del Jurásico tardío, conocido por sus grandes placas óseas en la espalda y una cola con púas defensivas. Medía hasta 9 metros de largo y caminaba en cuatro patas.'
        },        {
            title:          'Triceratops',
            id:             9,
            src:            require('@site/static/img/triceratops.jpg').default,
            description:    'Dinosaurio herbívoro del Cretácico, famoso por sus tres cuernos en la cabeza y un gran collar óseo. Podía medir hasta 9 metros de largo y pesaba varias toneladas, caminando en cuatro patas.'
        },        {
            title:          'Troodon',
            id:             10,
            src:            require('@site/static/img/troodon.jpg').default,
            description:    'pequeño dinosaurio carnívoro del Cretácico, conocido por su inteligencia relativa y su visión aguda. Medía aproximadamente 2 metros de largo y tenía dientes afilados y garras, lo que sugiere una dieta variada'
        }
    ];

    return (
        <>
            {galleryDetails.map( galleryItem => (
                <img alt={galleryItem.title} src={galleryItem.src} width='100px' />
            ))}
        </>
    )
}