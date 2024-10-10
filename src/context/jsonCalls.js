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
    const searchTerm = url.searchParams.get('q');
    const findOjt = tags.filter( tag => tag.id === searchTerm)
    try {
        //console.log('el param:', params)
        return{tag: findOjt}
    } catch (error) {
        return error
    }
};