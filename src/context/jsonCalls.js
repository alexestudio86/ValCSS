import tags from './tags.json' assert {type:"json"};


export const getTags = async () => {
    try {
        return {tags};
    } catch (error) {
        return error
    }
};

export const getTag = async ( {request} ) => {
    const url = new URL(request.url);
    const searchLabel = url.searchParams.get('labels');
    try {
        //console.log('el param:', params)
        return{tag: tags["anchor"]}
    } catch (error) {
        return error
    }
};