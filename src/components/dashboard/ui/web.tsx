/*********************************************************
* IMPORTS
*********************************************************/
/* BASE *************************************************/
import { ReactElement } from 'react';
import styled from 'styled-components';

/* COMPONENTS *******************************************/
import Summary from 'components/dashboard/modules/summary';

/* ACTIONS / UTILS / TYPES ******************************/
import { Category } from 'components/dashboard/models';

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
*   TYPES
*********************************************************/
type DashboardWebProps = {
    categories: Category[]
};

/*********************************************************
*   COMPONENT
*********************************************************/
const DashboardWeb = ({ categories }: DashboardWebProps): ReactElement => {
    
    /************** RENDER **************/
    return (
        <>
            <SecondaryHeader>
                <h2>Dashboard</h2>
                <h6>Hello</h6>
            </SecondaryHeader>
            <Main>
                <h3>Categories</h3>
                {categories.map((category, index): ReactElement => (
                    <Summary key={index} category={category} />
                ))}
            </Main>
        </>
    );
}

/*********************************************************
*   EXPORT
*********************************************************/
export default DashboardWeb;