import React from "react";
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Wrapper = styled.div`
    width: 100%;

    background-color: #21212b;

    padding: 2rem;

    border-radius: 1.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FieldWrapper = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FieldSet= styled.fieldset`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
`

const Input = styled.input`
    width: 100%;
    height: 5rem;

    color: #fff;
    background-color: transparent;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    border: 3px solid #30303a;
    border-radius: 1.4rem;

    padding: 1rem 2rem;

    &::placeholder
    {
        color: #d1d1d3;
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        user-select: none;
    }

    &:focus
    {
        outline: none;
        border: 3px solid #ddd;
    }

    margin-right: 2rem;
`;

const Button = styled.button`
    width: 5rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    color: #fff;
    background-color: ${props => props.backgroundColor || '#E52B64'};

    border: none;
    border-radius: 50%;

    font-family: 'Poppins', sans-serif;
    font-size: 2.6rem;
    font-weight: 500;

    cursor: pointer;

    &:focus
    {
        outline: none;
    }

    &:hover
    {
        filter: brightness(90%);
    }

    &:select
    {
        filter: brightness(110%);
    }

    &:disabled
    {
        filter: none;
        cursor: default;
        background-color: #30303a;
    }
`;

export const AddInput = (props) => {

    const submit = (e) => {
        e.preventDefault();
        props.onSubmit(e);
    }

    return (
        <Wrapper>
            <FieldWrapper onSubmit={submit}>
                <FieldSet disabled={props.disableFields || false}>
                    <Input type="text" {...props}/>
                    <Button disabled={props.disabledSubmit || false}>
                        {
                            props.disableFields ?
                            <ReactLoading type="spin" color="#ddd" height={40} width={40} />
                            :
                            '+'
                        }
                    </Button>
                </FieldSet>
            </FieldWrapper>
        </Wrapper>
    )
}