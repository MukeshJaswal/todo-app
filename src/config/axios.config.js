import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const Axios = axios.create({
    baseURL: BASE_URL,
    timeout: 15000
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