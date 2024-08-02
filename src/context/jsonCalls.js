import tags from './tags.json' assert {type:"json"};


export const getTags = async () => {
    try {
        return {tags};
    } catch (error) {
        return error
    }
}