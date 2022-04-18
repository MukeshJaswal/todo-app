import React from "react";
import styled from 'styled-components';

const AvatarStyled = styled.div`
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;

    background-color: #181820;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`;

const Letters = styled.h2`
    font-size: 1.4rem;
    font-weight: 500;
    color: #fff;
    user-select: none;
`;

export const Avatar = (props) => {

    let firstName = props.firstName || '';
    let lastName = props.lastName || '';

    firstName = firstName !== '' ? firstName.charAt(0) : '';
    lastName = lastName !== '' ? lastName.charAt(0) : '';

    return (
        <AvatarStyled onClick={props.onClick}>
            <Letters>{`${firstName}${lastName}`}</Letters>
        </AvatarStyled>
    )
}