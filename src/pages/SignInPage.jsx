import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import validator from 'validator';
import ReactLoading from 'react-loading';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "../components/Button";
import { MessageBox } from "../components/MessageBox";
import { TextField } from "../components/TextField";
import { UserService } from "../services/userService";
import { addUser } from "../redux/appReducer";


const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #181820;
`

const FormHeader = styled.h1`
    color: #fff;
    font-size: 5rem;
    font-weight: 700;

    margin-bottom: 4rem;
`;

const AuthForm = styled.form`
    width: 100%;
    max-width: 40rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem;
`;

const FieldSet= styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;

    & > input
    {
        margin-bottom: 2rem;
    }

    & > button
    {
        margin-top: 2rem;
    }
`;

const InfoWrapper = styled.span`
    font-size: 1.4rem;
    font-weight: 400;
    color: #d1d1d3;

    margin-top: 3rem;
`;

const SignUpText = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
    color: #E52B64;

    cursor: pointer;
`


export const SignInPage = () => {

    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const [ disableFields, setDisableFields ] = React.useState(false);
    const [ error, showError ] = React.useState(false);
    const [ errorMessage, setErrorMessage ] = React.useState('');

    const dispatch = useDispatch();
    let navigation = useNavigate();

    const onSetEmail = (e) => {
        setEmail(e.target.value);
    }

    const onSetPassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        setDisableFields(true);
        UserService.signIn(email, password)
        .then(response => {
            if(response.status === 200)
            {
                const { firstName, lastName, email, token } = response.data;
                dispatch(addUser({ firstName, lastName, email }));

                // let user = response.data;
                sessionStorage.setItem('user', JSON.stringify({ firstName, lastName, email }));
                sessionStorage.setItem('user-token', token);

                // Redirect
                navigation("/collections", { replace: true });
            }
            else
            {
                setDisableFields(false);
                setErrorMessage("Invalid Email/Password");
                showError(true);
            }
        })
        .catch(err => {
            setDisableFields(false);
            setErrorMessage("Something went wrong!");
            showError(true);
        })
    }

    return (
        <Container>
            <FormHeader>Sign in.</FormHeader>
            <AuthForm onSubmit={onSubmit}>
                <FieldSet disabled={disableFields}>
                    <TextField placeholder="Email" value={email} onChange={onSetEmail}/>
                    <TextField placeholder="Password" value={password} onChange={onSetPassword}/>

                    <Button disabled={!(validator.isEmail(email) && (password.length >= 8 && password.length <= 16))} width="100%">
                    {
                        disableFields ?
                        <ReactLoading type="spin" color="#ddd" height={30} width={30} />
                        :
                        "Sign in"
                    }
                    </Button>
                </FieldSet>

                {
                    error &&
                    <MessageBox 
                        type="error"
                        message={errorMessage}
                    />
                }

                <InfoWrapper>
                    Don't have an account? <Link to="/signup" style={{ textDecoration: 'none' }}><SignUpText>Create One</SignUpText></Link>
                </InfoWrapper>
            </AuthForm>
        </Container>
    )
}