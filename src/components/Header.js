import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <header className="col-12 col-md-8">
            <Link to={'/'}>
                <Title>React Blog</Title>
            </Link>
        </header>
    );
};

export default Header;

const Title = styled.h1`
text-align: center;
`;