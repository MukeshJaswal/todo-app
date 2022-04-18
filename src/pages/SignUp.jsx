import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const FormHeader = styled.h1`
    color: #fff;
    font-size: 5rem;
    font-weight: 900;
    margin-bottom: 6rem !important;
`

const FormWarpper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 45rem;
    height: auto;
    padding: 2rem;
    
    & > *
    {
        margin-bottom: 2rem;
    }

    & > *:last-child
    {
        margin-top: 4rem;
        margin-bottom: 0;
    }
`

export const SignupPage = () => {

    return (
        <Container>
            <FormWarpper>
                <FormHeader>Sign Up</FormHeader>
                <TextField placeholder="First Name" type="email"/>
                <TextField placeholder="Last Name" type="email"/>
                <TextField placeholder="Email" type="email"/>
                <TextField placeholder="Password" type="password"/>
                <Button style={{ marginTop: '2rem' }}>Signup</Button>
            </FormWarpper>
        </Container>
    )
}