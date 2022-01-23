/*********************************************************
* IMPORTS
*********************************************************/
/* BASE *************************************************/
import { ReactElement } from 'react';
import styled from 'styled-components';

/* COMPONENTS *******************************************/
import Summary from 'components/dashboard/modules/summary';

/* ACTIONS / UTILS / TYPES ******************************/
import { useGetCategoriesQuery } from 'components/dashboard/api';


/*********************************************************
*   STYLES
*********************************************************/
const Main = styled.main`
    flex: 1;
    padding: 15px;

    h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;

const SecondaryHeader = styled.div`
    margin-bottom: 30px;
    padding: 20px ${({ theme }) => theme.padding.app};
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

    h2 {
        font-size: 20px;
        font-weight: 600;
    }
`;

/*********************************************************
*   COMPONENT
*********************************************************/
const Dashboard = (): ReactElement => {
    // Using a query hook automatically fetches data and returns query values
    const { data, isLoading } = useGetCategoriesQuery('hey');
    // Individual hooks are also accessible under the generated endpoints:
    // const { data, error, isLoading } = dashboardApi.endpoints.getCategories.useQuery()

    /************** RENDER **************/
    if (isLoading) return <h2>Loading...</h2>;
    if (!data) return <h3>No data</h3>;

    return (
        <>
            <SecondaryHeader>
                <h2>Dashboard</h2>
                <h6>Hello</h6>
            </SecondaryHeader>
            <Main>
                <h3>Categories</h3>
                {data.categories.map((category, index): ReactElement => (
                    <Summary key={index} category={category} />
                ))}
            </Main>
        </>
    );
}

/*********************************************************
*   EXPORT
*********************************************************/
export default Dashboard;