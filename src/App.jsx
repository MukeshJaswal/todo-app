import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import CollectionsPage from "./pages/CollectionsPage";
import ProfilePage from "./pages/ProfilePage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import TasksPage from "./pages/TasksPage";
import { store } from "./redux/store";


const IsAuthenticated = () => sessionStorage.getItem('user-token') !== null ? true : false;

const RequireAuth = ({ children, path }) => {
    const location = useLocation();
    return IsAuthenticated() === false ? <Navigate to={path || '/'} state={{ from: location }} replace/> : children;
}

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />}/>
                    <Route path="/signup" element={<SignUpPage />}/>

                    <Route 
                        path="/collections"
                        element={
                            <RequireAuth>
                                <CollectionsPage />
                            </RequireAuth>
                        }
                    />

                    <Route 
                        path="/profile"
                        element={
                            <RequireAuth>
                                <ProfilePage />
                            </RequireAuth>
                        }
                    />

                    <Route 
                        path="/collection/:collectionId"
                        element={
                            <RequireAuth>
                                <TasksPage />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}