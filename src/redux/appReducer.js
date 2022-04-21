import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    collections: undefined,
    activeCollectionTasks: []
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
        },
        addTasks(state, action)
        {
            state.activeCollectionTasks = action.payload;
        },
        addTask(state, action)
        {
            const { collectionId, task } = action.payload;

            let collections = state.collections;
            collections.find(collection => collection._id === collectionId).tasks.unshift(task);

            state.collections = collections;
            
            state.activeCollectionTasks.unshift(task);

        },
        updateTask(state, action)
        {
            const { collectionId, taskId, completed } = action.payload;

            let collections = state.collections;
            collections.find(collection => collection._id === collectionId).tasks.find(task => task._id === taskId).completed = completed;

            state.collections = collections;
            state.activeCollectionTasks = state.collections.find(collection => collection._id === collectionId).tasks.filter(task => task.collectionId === collectionId);
        }
    }
})

export const { addUser, deleteUser, addCollection, createCollection, deleteCollections, addTasks, addTask, updateTask } = AppSlice.actions;

export default AppSlice.reducer;