import React from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import validator from 'validator';
import ReactLoading from 'react-loading';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { TextField } from "../components/TextField";
import { addUser } from "../redux/appReducer";
import { UserService } from "../services/userService";
import { MessageBox } from "../components/MessageBox";


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

    & > input
    {
        margin-bottom: 2rem;
    }

    & > button
    {
        margin-top: 2rem;
    }
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


export const SignUpPage = () => {

    const [ firstName, setFirstName ] = React.useState('');
    const [ lastName, setLastName ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const [ disableFields, setDisableFields ] = React.useState(false);
    const [ error, showError ] = React.useState(false);
    const [ errorMessage, setErrorMessage ] = React.useState('');

    const dispatch = useDispatch();
    let navigation = useNavigate()


    const onSubmit = (e) => {
        e.preventDefault();

        setDisableFields(true);
        UserService.signUp(firstName, lastName, email, password)
        .then(response => {
            if(response.status === 201)
            {
                const { firstName, lastName, email, token } = response.data;
                dispatch(addUser({ firstName, lastName, email }));

                // let user = response.data;
                sessionStorage.setItem('user', JSON.stringify({ firstName, lastName, email }));
                sessionStorage.setItem('user-token', token);

                // Redirect
                navigation('/collections', { replace: true });
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
            <FormHeader>Sign up.</FormHeader>
            <AuthForm onSubmit={onSubmit}>
                <FieldSet disabled={disableFields}>
                    <TextField placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <TextField placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <TextField placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <TextField placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <Button disabled={!(validator.isEmail(email) && (password.length >= 8 && password.length <= 16) && (firstName.length >= 1 && firstName.length <= 20) && (lastName.length >= 1 && lastName.length <= 20))} width="100%">
                    {
                        disableFields ?
                        <ReactLoading type="spin" color="#ddd" height={30} width={30} />
                        :
                        "Sign up"
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
                    Have an account? <Link to="/" style={{ textDecoration: 'none' }}><SignUpText>Sign in</SignUpText></Link>
                </InfoWrapper>
            </AuthForm>
        </Container>
    )
}