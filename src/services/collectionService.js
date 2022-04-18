import { Axios, CREATE_COLLECTION_ROUTE, DELETE_COLLECTION_ROUTE, GET_COLLECTIONS_ROUTE, UPDATE_COLLECTION_ROUTE } from "../config/axios.config";

export class CollectionService
{
    static async getCollections()
    {
        try
        {
            let response = await Axios.get(GET_COLLECTIONS_ROUTE);

            return response;
        }
        catch(err)
        {
            throw new Error("Request Failed");
        }
    }


    
    static async CreateCollection(name)
    {
        try
        {
            let response = await Axios.post(CREATE_COLLECTION_ROUTE, { name });

            return response;
        }
        catch(err)
        {
            throw new Error("Request Failed");
        }
    }


    static async UpdateCollection(collectionId, name)
    {
        try
        {
            let response = await Axios.patch(UPDATE_COLLECTION_ROUTE(collectionId), { name });

            return response;
        }
        catch(err)
        {
            throw new Error("Request Failed");
        }
    }


    static async DeleteCollection(collectionId)
    {
        try
        {
            let response = await Axios.delete(DELETE_COLLECTION_ROUTE(collectionId));

            return response;
        }
        catch(err)
        {
            throw new Error("Request Failed");
        }
    }
}