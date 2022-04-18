import React from "react";
import styled from 'styled-components';
import { Checkbox } from "./Checkbox";

const StyledCard = styled.div`
    width: 100%;

    background-color: #21212b;
    border-radius: 1.2rem;

    display: flex;
    align-items: center;
    
    padding: 1.2rem 2rem;

    cursor: pointer;

    &:hover
    {
        filter: brightness(90%);
    }

    & > h2
    {
        margin-left: 1rem;
    }
`;

const Name = styled.h2`
    font-size: 1.6rem;
    font-weight: 300;
    color: #fff;
`;

const Status = styled.span`
    font-size: 1.2rem;
    font-weight: 300;
    color: #555;
`;

export const TaskCard = (props) => {
    return (
        <StyledCard>
            <Checkbox />
            {
                props.completed ?
                <Name><s>{props.name}</s></Name>
                :
                <Name>{props.name}</Name>
            }
        </StyledCard>
    )
}