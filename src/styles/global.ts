/*********************************************************
* IMPORTS
*********************************************************/
/* BASE *************************************************/
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap'); 

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Red Hat Text', sans-serif;
        background-color: ${({ theme }) => theme.colors.darkNavy};
        color: white;
    }
`;

/*********************************************************
*   EXPORT
*********************************************************/
export default GlobalStyle;