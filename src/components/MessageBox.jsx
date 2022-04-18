import React from "react";
import styled from 'styled-components';

const MessageBoxStyled = styled.div`
    width: 100%;
    background-color: ${
        props => {
            switch(props.type)
            {
                case 'error':
                    return '#F44336';
                case 'warning':
                    return '#FFC107';
                case 'success':
                    return '#4CAF50';
                default:
                    return '#4CAF50';
            }
        }
    };

    border-radius: 1.2rem;

    margin: 2rem 0;
`;

const Message = styled.p`
    white-space: pre-line;
    font-size: 1.2rem;
    font-weight: 500;

    padding: 1rem;

    color: #fff;
`;

export const MessageBox = (props) => {
    return (
        <MessageBoxStyled type={props.type}>
            <Message>{props.message}</Message>
        </MessageBoxStyled>
    )
}