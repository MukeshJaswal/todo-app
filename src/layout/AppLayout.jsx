import React from "react";
import styled from 'styled-components';
import { Navbar } from "../components/Navbar";

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    overflow: hidden;
    overflow-y: auto;

    background-color: #181820;
`;

const Body = styled.div`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    margin-top: 6rem;
`;

export const AppLayout = (Component) => {
    return (props) => {
        return (
            (
                <Container>
                    <Navbar />
                    <Body>
                        <Component {...props}/>
                    </Body>
                </Container>
            )
        )
    }
}