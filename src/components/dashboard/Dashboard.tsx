// Imports
import { ReactElement } from 'react';
import styled from 'styled-components';
import { categories } from 'App';
import Summary from 'components/summary/Summary';

// Styles
const Main = styled.main`
    flex: 1;
    padding: 15px;

    h2 {
        color: #001a5c;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    h3 {
        color: #001a5c;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;

// Component
const Dashboard = (): ReactElement => {
    return (
        <Main>
            <h2>Dashboard</h2>
            <h3>Categories</h3>
            {categories.map((category, index): ReactElement => (
                <Summary key={index} category={category} />
            ))}
        </Main>
    );
}

export default Dashboard;