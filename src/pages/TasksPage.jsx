import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { AddInput } from "../components/AddInput";
import { Checkbox } from "../components/Checkbox";
import { TaskCard } from "../components/TaskCard";
import { AppLayout } from "../layout/AppLayout";

const Container = styled.div`
    width: 100%;
    height: 100%;

    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4rem;

    padding: 2rem;
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 70rem;

    flex-shrink: 0;
`;

const TaskSection = styled.section`
    margin-top: 4rem;

    width: 100%;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;

`;

const TasksHeader = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    color: #fff;

    padding: 0 1rem;
    padding-bottom: 1.4rem;

    border-bottom: 2px solid #333;

    margin-bottom: 2rem;
`;

const TasksCardContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    flex-shrink: 0;

    & > div
    {
        margin-bottom: 1rem;
    }
`;

const EmptyTask = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

const EmptyTaskText = styled.p`
    white-space: pre-line;
    font-size: 1.6rem;
    font-weight: 400;
    color: #555;
    word-wrap: break-word;

    margin-top: 4rem;
`;


const TasksPage = (props) => {

    const params = useParams();

    const [ loading, setLoading ] = React.useState(false);
    const collections = undefined;

    React.useEffect(() => {
        console.log(params);
    }, [])

    return (
        <Container>
            <Wrapper>
                <AddInput placeholder="Type here to create a Task" />

                <TaskSection>
                    <TasksHeader>Tasks: {props.collectionName}</TasksHeader>

                    {
                        loading ?
                        <div style={{ width: '100%', margin: '4rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ReactLoading type="spin" color="#ddd" height={40} width={40} />
                        </div>
                        :
                        <>
                        {
                            collections === undefined ?
                            <EmptyTask>
                                <EmptyTaskText>
                                    You haven't created any collection. 
                                    Type collection name above to get started.
                                </EmptyTaskText>
                            </EmptyTask>
                            :
                            <TasksCardContainer>
                                {
                                    [...Array(10)].map(collection => (
                                        <TaskCard key={collection} name='Hello'/>
                                    ))
                                }
                            </TasksCardContainer>
                        }
                        </>
                    }
                </TaskSection>
            </Wrapper>
        </Container>
    )
}

export default AppLayout(TasksPage);