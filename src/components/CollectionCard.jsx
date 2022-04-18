import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
    width: 100%;

    background-color: #21212b;
    border-radius: 1.2rem;

    display: flex;
    flex-direction: column;
    
    padding: 2rem;

    cursor: pointer;

    &:hover
    {
        filter: brightness(90%);
    }

    transition: .4s ease;
`;

const Name = styled.h2`
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 1rem;
`;

const Status = styled.span`
    font-size: 1.4rem;
    font-weight: 300;
    color: #888;
`;

export const CollectionCard = (props) => {
    return (
        <StyledCard>
            <Name>{props.name}</Name>
            <Status>{`${props.completedTasks || 0}/${props.totalTasks || 0} Completed`}</Status>
        </StyledCard>
    )
}