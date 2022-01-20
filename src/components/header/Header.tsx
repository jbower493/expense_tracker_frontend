// Imports
import { ReactElement } from 'react';
import styled from 'styled-components';
import config from 'config/config.json';


// Styles
const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 22px;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;


// Component
const Header = (): ReactElement => {
    return (
        <StyledHeader>
            <h1>{config.app_name}</h1>
        </StyledHeader>
    )
}

export default Header;