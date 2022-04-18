import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    width: 100%;

    color: #fff;
    background-color: transparent;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    border: 3px solid #30303a;
    border-radius: 1.4rem;

    padding: 1rem 2rem;

    &::placeholder
    {
        color: #d1d1d3;
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        user-select: none;
    }

    &:focus
    {
        outline: none;
        border: 3px solid #ddd;
    }
`;

export const TextField = (props) => {
    


    return (
        <InputStyled {...props}/>
    )
}