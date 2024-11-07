export {Components};

function crearRedeSociales(enlaces) {

    let redeSociales = {
        'facebook': ['facebook.svg','Facebook'],
        'instagram': ['instagram.svg','Instagram'],
        'twitter': ['twitter.svg','Twitter'],
    };

    Object.entries(redeSociales).forEach(([afiliacion, values]) => {
        const [img, redSocial]  = values;
        redeSociales[afiliacion] = {
            redSocial,
            img: './img/'+ img,
        }
    })

    const nuevaAfiliacion = Object.entries(redeSociales).reduce((acc, [key, value]) => {
        const enlace = enlaces.find(link => new RegExp(key, 'i').test(link));
        if (enlace) {
            acc.push({ ...value, link: enlace })
        }
        return acc;
    }, []);
    return nuevaAfiliacion;
}



const Components={
    crearRedeSociales,
}