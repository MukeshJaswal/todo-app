import { Axios, SIGNIN_ROUTE, SIGNOUT_ROUTE, SIGNUP_ROUTE } from "../config/axios.config";

export class UserService
{
    /** 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} email 
     * @param {string} password 
    */
    static async signUp(firstName, lastName, email, password)
    {
        try
        {
            let response = await Axios.post(SIGNUP_ROUTE, { firstName, lastName, email, password });

            return response;
        }
        catch(err)
        {
            throw new Error("Authentication Failed");
        }
    }
    

    /** 
     * @param {string} email 
     * @param {string} password 
    */
    static async signIn(email, password)
    {
        try
        {
            let response = await Axios.post(SIGNIN_ROUTE, { email, password });

            return response;
        }
        catch(err)
        {
            throw new Error("Authentication Failed");
        }
    }


    static async signOut()
    {
        try
        {
            let response = await Axios.post(SIGNOUT_ROUTE);

            return response;
        }
        catch(err)
        {
            throw new Error("Authentication Failed");
        }
    }
}