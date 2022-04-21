import { Axios, DELETE_TASK_ROUTE, GET_TASKS_ROUTE, UPDATE_TASK_ROTUE, CREATE_TASK_ROTUE } from "../config/axios.config";


export class TaskService
{
    static async GetTasks(collectionId)
    {
        try
        {
            let response = await Axios.get(GET_TASKS_ROUTE(collectionId));
    
            return response;
        }
        catch(err)
        {
            throw new Error("Request Failed");
        }
    }

    static async CreateTask(collectionId, text)
    {
        try
        {
            let response = await Axios.post(CREATE_TASK_ROTUE(collectionId), { text });
    
            return response;
        }
        catch(err)
        {
            throw new Error("Request Failed");
        }
    }

    static async UpdateTask(collectionId, taskId, text, completed)
    {
        try
        {
            let response = await Axios.patch(UPDATE_TASK_ROTUE(collectionId, taskId), { text, completed });
    
            return response;
        }
        catch(err)
        {
            throw new Error("Request Failed");
        }
    }
}

// export const UpdateTask = async (collectionId, taskId, text, completed) => await Axios.patch(UPDATE_TASK_ROUTE(collectionId, taskId), { text, completed });s

// export const DeleteTask = async (collectionId, taskId) => await Axios.delete(DELETE_TASK_ROUTE(collectionId, taskId));