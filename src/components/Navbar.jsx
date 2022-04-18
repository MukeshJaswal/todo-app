import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from './Avatar';

const NavbarStyled = styled.nav`
    width: 100%;
    height: 6rem;

    flex-shrink: 0;

    background-color: #21212b;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0;
`;

const LeftContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RightContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TodoLogo = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
`;

export const Navbar = () => {

    const [ firstName, setFirstName ] = React.useState('');
    const [ lastname, setLastName ] = React.useState('');

    React.useEffect(() => {
        let user = JSON.parse(sessionStorage.getItem('user'));

        if(user !== null)
        {
            setFirstName(user.firstName);
            setLastName(user.lastName);
        }
    }, [])

    return (
        <NavbarStyled>
            <LeftContent>
                <TodoLogo>Todo</TodoLogo>
            </LeftContent>

            <RightContent>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <Avatar firstName={firstName} lastName={lastname}/>
                </Link>
            </RightContent>
        </NavbarStyled>
    )
}