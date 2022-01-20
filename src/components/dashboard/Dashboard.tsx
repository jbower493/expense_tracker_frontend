// Imports
import { ReactElement } from 'react';
import styled from 'styled-components';
import Summary from 'components/summary/Summary';

import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { addOne, removeOne } from './dashboardSlice';
import { useGetCategoriesQuery } from 'api/dashboard';

// Styles
const Main = styled.main`
    flex: 1;
    padding: 15px;

    h2 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    h3 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;

// Component
const Dashboard = (): ReactElement => {
    // const categories = useAppSelector((state) => state.dashboard.categories);
    const dispatch = useAppDispatch();

    // Using a query hook automatically fetches data and returns query values
    const { data, error, isLoading } = useGetCategoriesQuery('hey');
    // Individual hooks are also accessible under the generated endpoints:
    // const { data, error, isLoading } = pokemonApi.endpoints.getCategories.useQuery()

    if (isLoading) return <h2>Loading...</h2>;
    if (!data) return <h3>No data</h3>;

    return (
        <Main>
            <h2>Dashboard</h2>
            <h3>Categories</h3>
            {data.categories.map((category, index): ReactElement => (
                <Summary key={index} category={category} />
            ))}
        </Main>
    );
}

export default Dashboard;