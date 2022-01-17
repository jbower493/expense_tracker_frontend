// Imports
import { createGlobalStyle } from 'styled-components';
import Header from 'components/header/Header';
import Dashboard from 'components/dashboard/Dashboard'


//Types
export type Category = {
    categoryName: string,
    budget: number,
    spend: number,
    priority: 1 | 2 | 3
};

export const categories: Category[] = [
    {
        categoryName: 'food',
        budget: 500,
        spend: 350,
        priority: 1
    },
    {
        categoryName: 'petrol',
        budget: 200,
        spend: 45,
        priority: 2
    },
    {
        categoryName: 'utilities',
        budget: 120,
        spend: 87,
        priority: 2
    },
    {
        categoryName: 'clothes shopping',
        budget: 150,
        spend: 196,
        priority: 3
    }
];


//Styles
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap'); 

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Red Hat Text', sans-serif;
    }
`;


// Component
const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Dashboard />
        </div>
    )
}

export default App;