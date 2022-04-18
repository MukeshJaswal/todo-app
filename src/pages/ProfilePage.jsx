import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { Button } from "../components/Button";
import { AppLayout } from "../layout/AppLayout";
import { addUser, deleteCollections, deleteUser } from "../redux/appReducer";
import { UserService } from "../services/userService";
import { MessageBox } from "../components/MessageBox";
import { useNavigate } from "react-router-dom";


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


const PageHeading = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
`;


const Wrapper = styled.div`
    width: 100%;
    max-width: 48rem;

    padding: 1rem;

    background-color: ${props => props.backgroundColor || '#21212b'};
    border-radius: 1.2rem;

    margin: ${props => props.margin || '2rem 0'}; 

    & > div:not(:last-child)
    {
        margin-bottom: 2rem;
    }
`;


const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const Heading = styled.h3`
    font-size: 1.3rem;
    font-weight: 300;
    color: #87888e;

    margin-bottom: 0.4rem;
`;

const Value = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
`;


const ProfilePage = () => {

    const [ showLoading, setShowLoading ] = React.useState(false);
    const [ showError, setShowError ] = React.useState(false);

    const user = useSelector(state => state.app.user);
    const dispatch = useDispatch();
    let navigation = useNavigate();


    React.useEffect(() => {
        let user = JSON.parse(sessionStorage.getItem('user'));

        if(user !== null)
            dispatch(addUser(user));
        else
        {
            user = {
                firstName: '',
                lastName: '',
                email: ''
            }
        }

    }, [])

    const logout = () => {
        setShowLoading(true);
        setShowError(false);

        UserService.signOut()
        .then(response => {
            if(response.status === 200)
            {
                sessionStorage.clear();
                dispatch(deleteUser());
                dispatch(deleteCollections());

                // Redirect
                navigation('/', { replace: true });
            }
            else
            {
                setShowLoading(false);
                setShowError(true);
            }
        })
        .catch(err => {
            setShowLoading(false);
            setShowError(true);
        })
    }

    return (
        <Container>
            <PageHeading>Profile</PageHeading>
            <Wrapper>
                <FieldWrapper>
                    <Heading>First Name</Heading>
                    <Value>{user.firstName || ''}</Value>
                </FieldWrapper>

                <FieldWrapper>
                    <Heading>Last Name</Heading>
                    <Value>{user.lastName || ''}</Value>
                </FieldWrapper>

                <FieldWrapper>
                    <Heading>Email</Heading>
                    <Value>{user.email || ''}</Value>
                </FieldWrapper>
            </Wrapper>

            <Wrapper backgroundColor="none" margin="0">
            {
                showError &&
                <MessageBox 
                    type="error"
                    message="Something went wrong!"
                />
            }
            </Wrapper>

            <Button backgroundColor="#21212b" disabled={showLoading} onClick={logout}>
            {
                showLoading ?
                <ReactLoading type="spin" color="#ddd" height={30} width={30} />
                :
                "Sign out"
            }
            </Button>
        </Container>
    )
}

export default AppLayout(ProfilePage);