import React from "react";
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { AddInput } from "../components/AddInput";
import { Checkbox } from "../components/Checkbox";
import { CollectionCard } from "../components/CollectionCard";
import { AppLayout } from "../layout/AppLayout";
import { addCollection, addUser, createCollection } from "../redux/appReducer";
import { CollectionService } from "../services/collectionService";

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

const CollectionSection = styled.section`
    margin-top: 4rem;

    width: 100%;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;

`;

const CollectionsHeader = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    color: #fff;

    padding: 0 1rem;
    padding-bottom: 1.4rem;

    border-bottom: 2px solid #333;

    margin-bottom: 2rem;
`;

const CollectionsCardContainer = styled.div`
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

const EmptyCollection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;


const EmptyImage = styled.img`
    width: 100%;
    max-width: 24rem;

    object-fit: contain;
    filter: brightness(90%);

    margin-top: 4rem;
`;

const EmptyCollectionText = styled.p`
    white-space: pre-line;
    font-size: 1.6rem;
    font-weight: 400;
    color: #555;
    word-wrap: break-word;

    margin-top: 4rem;
`;


const CollectionsPage = () => {

    const [ collectionName, setCollectionName ] = React.useState('');
    const [ disableField, setDisableField ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(false);

    const collections = useSelector(state => state.app.collections);

    const dispatch = useDispatch();

    React.useEffect(() => {
        if(collections === undefined)
        {
            setLoading(true);
            CollectionService.getCollections()
            .then(response => {
                response.status === 200 && dispatch(addCollection(response.data))
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
        }
    }, [collections])

    return (
        <Container>
            <Wrapper>
                <AddInput 
                    placeholder="Type here to create a Collection" 
                    value={collectionName} onChange={e => setCollectionName(e.target.value)} 
                    disabledSubmit={collectionName !== '' ? false : true}
                    disableFields={disableField}
                    onSubmit={e => {
                        setDisableField(true);

                        CollectionService.CreateCollection(collectionName)
                        .then(response => {
                            response.status === 201 && setCollectionName('');
                            dispatch(createCollection(response.data))
                            setDisableField(false);
                        })
                        .catch(err => {
                            setDisableField(false);

                            console.log(err);
                        })
                    }}    
                />

                <CollectionSection>
                    <CollectionsHeader>Collections</CollectionsHeader>

                    {
                        loading ?
                        <div style={{ width: '100%', margin: '4rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ReactLoading type="spin" color="#ddd" height={40} width={40} />
                        </div>
                        :
                        <>
                        {
                            collections === undefined ?
                            <EmptyCollection>
                                <EmptyImage src={require('../assets/box.png')} alt="empty-collections-img"/>
                                <EmptyCollectionText>
                                    You haven't created any collection. 
                                    Type collection name above to get started.
                                </EmptyCollectionText>
                            </EmptyCollection>
                            :
                            <CollectionsCardContainer>
                                {
                                    collections.map(collection => {

                                        let completedTasksCount = collection.tasks.filter(task => task.completed === true).length;

                                        return (
                                            <Link key={collection._id} to={`/${collection._id}/tasks`} style={{ width: '100%', textDecoration: 'none' }}>
                                                <CollectionCard 
                                                    name={collection.name} 
                                                    completedTasks={completedTasksCount}
                                                    totalTasks={collection.tasks.length}
                                                />
                                            </Link>
                                        )
                                    })
                                }
                            </CollectionsCardContainer>
                        }
                        </>
                    }

                    
                </CollectionSection>
            </Wrapper>
        </Container>
    )
}

export default AppLayout(CollectionsPage);