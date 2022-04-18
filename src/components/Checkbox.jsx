import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: block;
    position: relative;
    padding-left: 2.4rem;
    margin-bottom: 2.4rem;
    cursor: pointer;
    font-size: 1.4rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & > span:after
    {
        left: 8px;
        top: 4px;
        width: 6px;
        height: 12px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    & > input:checked ~ span:after
    {
        display: block;
    }

    &:hover input ~ span
    {
        background-color: #ccc;
    }

    & > input:checked ~ span {
        background-color: #E52B64;
    }

    span:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

const Span = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 2.2rem;
    width: 2.2rem;
    background-color: #eee;

    border-radius: 50%;
`;

export const Checkbox = (props) => {
    return (
        <Label>
            <Input type="checkbox" {...props}/>
            <Span />
        </Label>
    )
}