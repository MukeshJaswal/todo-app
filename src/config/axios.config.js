import axios from "axios";

const BASE_URL = process.env.BASE_URL || 'http://localhost:4000';

export const Axios = axios.create({
    baseURL: BASE_URL,
    timeout: 15000
});

Axios.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem('user-token')}`;
    return config;
})


// Auth Routes
export const SIGNUP_ROUTE = '/signup';
export const SIGNIN_ROUTE = '/signin';
export const SIGNOUT_ROUTE = '/signout';

// Collection Routes
export const GET_COLLECTIONS_ROUTE = '/collections';
export const CREATE_COLLECTION_ROUTE = '/create/collection';
export const UPDATE_COLLECTION_ROUTE = (collectionId) => `/update/collection/${collectionId}`;
export const DELETE_COLLECTION_ROUTE = (collectionId) => `/delete/collection/${collectionId}`;

// Task Routes
export const GET_TASKS_ROUTE = (collectionId) => `/${collectionId}/tasks`;
export const CREATE_TASK_ROTUE = (collectionId) => `/create/${collectionId}/task`;
export const UPDATE_TASK_ROTUE = (collectionId, taskId) => `/update/${collectionId}/task/${taskId}`;
export const DELETE_TASK_ROTUE = (collectionId, taskId) => `/delete/${collectionId}/task/${taskId}`;