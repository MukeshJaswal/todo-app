import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    collections: undefined
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addUser(state, action)
        {
            state.user = action.payload;
        },
        deleteUser(state)
        {
            state.user = {};
        },
        addCollection(state, action)
        {
            state.collections = action.payload;
        },
        deleteCollections(state)
        {
            state.collections = undefined;
        },
        createCollection(state, action)
        {
            state.collections.unshift(action.payload);
        }
    }
})

export const { addUser, deleteUser, addCollection, createCollection, deleteCollections } = AppSlice.actions;

export default AppSlice.reducer;