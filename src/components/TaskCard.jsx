import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { updateTask } from "../redux/appReducer";
import { TaskService } from "../services/taskService";
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

    const [ checked, setChecked ] = React.useState(false);
    const dispatch = useDispatch();

    React.useEffect(() => {
        setChecked(props.completed);
    }, [])

    React.useEffect(() => {
        
    }, [checked]);

    const handleTaskState = (e) => {

        TaskService.UpdateTask(props.collectionId, props.taskId, props.text, !checked)
        .then(response => {
            setChecked(response.data.completed);
            dispatch(updateTask({ collectionId: props.collectionId, taskId: props.taskId, completed: response.data.completed }));
        })
        .catch(err => {
            console.log('Failed to update Task');
        })
    }

    return (
        <StyledCard>
            <Checkbox checked={checked} onChange={handleTaskState}/>
            {
                props.completed ?
                <Name><s>{props.text}</s></Name>
                :
                <Name>{props.text}</Name>
            }
        </StyledCard>
    )
}