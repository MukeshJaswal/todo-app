import React from 'react';
import styled from 'styled-components';



const ButtonStyled = styled.button`
    width: ${props => props.width || 'auto'};
    height: 5rem;

    color: #fff;
    background-color: ${props => props.backgroundColor || '#E52B64'};

    border: none;
    border-radius: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 4rem;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    cursor: pointer;

    &:focus
    {
        outline: none;
    }

    &:hover
    {
        filter: brightness(90%);
    }

    &:select
    {
        filter: brightness(110%);
    }

    &:disabled
    {
        filter: none;
        cursor: default;
        background-color: #30303a;
    }
`;


export const Button = (props) => {
    return (
        <ButtonStyled {...props}/>
    )
}