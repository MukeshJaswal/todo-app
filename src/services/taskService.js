import { Axios, CREATE_TASK_ROUTE, DELETE_TASK_ROUTE, GET_TASKS_ROUTE, UPDATE_TASK_ROUTE } from "../config/axios.config";



export const GetTasks = async (collectionId) => await Axios.get(GET_TASKS_ROUTE(collectionId));

export const CreateTask = async (collectionId, text) => await Axios.post(CREATE_TASK_ROUTE(collectionId), { text });

export const UpdateTask = async (collectionId, taskId, text, completed) => await Axios.patch(UPDATE_TASK_ROUTE(collectionId, taskId), { text, completed });

export const DeleteTask = async (collectionId, taskId) => await Axios.delete(DELETE_TASK_ROUTE(collectionId, taskId));