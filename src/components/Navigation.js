import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <Nav className="col-12 col-md-8">
            <Link to={'/'}>All posts </Link>
            <Link to ={'/create'}>New post</Link>
        </Nav>
    );
};

export default Navigation;

const Nav = styled.nav`
display: flex;
justify-content: space-between;
`;