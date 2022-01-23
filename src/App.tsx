/*********************************************************
* IMPORTS
*********************************************************/
/* BASE *************************************************/
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

/* COMPONENTS *******************************************/
import Header from 'components/header/Header';
import Dashboard from 'components/dashboard';
// import ExampleSlice from 'components/exampleSlice/example';

/*********************************************************
*   COMPONENT
*********************************************************/
const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Dashboard />
                {/* <ExampleSlice /> */}
            </ThemeProvider>
        </div>
    )
};

/*********************************************************
*   EXPORT
*********************************************************/
export default App;