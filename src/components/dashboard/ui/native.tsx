/*********************************************************
* IMPORTS
*********************************************************/
/* BASE *************************************************/
import { ReactElement } from 'react';
// import styled from 'styled-components';

/* COMPONENTS *******************************************/
// import Summary from 'components/dashboard/modules/summary';

/* ACTIONS / UTILS / TYPES ******************************/
import { Category } from 'components/dashboard/models';

/*********************************************************
*   STYLES
*********************************************************/


/*********************************************************
*   TYPES
*********************************************************/
type DashboardWebProps = {
    categories: Category[]
};

/*********************************************************
*   COMPONENT
*********************************************************/
const DashboardNative = ({ categories }: DashboardWebProps): ReactElement => {
    
    /************** RENDER **************/
    return (
        <>
            {/* <SecondaryHeader>
                <h2>Dashboard</h2>
                <h6>Hello</h6>
            </SecondaryHeader>
            <Main>
                <h3>Categories</h3>
                {categories.map((category, index): ReactElement => (
                    <Summary key={index} category={category} />
                ))}
            </Main> */}
            <h2>Whatever the react native equivalent is</h2>
        </>
    );
}

/*********************************************************
*   EXPORT
*********************************************************/
export default DashboardNative;