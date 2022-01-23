/*********************************************************
* IMPORTS
*********************************************************/
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            secondary: string,
            lightGray: string,
            darkNavy: string
        },
        padding: {
            app: string
        }
    }
}