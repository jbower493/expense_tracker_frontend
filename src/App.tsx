// Imports
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from 'components/header/Header';
import Dashboard from 'components/dashboard/Dashboard'


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

const theme = {
    colors: {
        primary: '#001a5c',
        secondary: '#00ffc2',
        lightGray: '#eaeaea'
    }
};


// Component
const App = () => {
    return (
        <div>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
                <Dashboard />
            </ThemeProvider>
        </div>
    )
}

export default App;