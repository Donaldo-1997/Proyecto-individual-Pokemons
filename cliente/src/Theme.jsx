import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        main: '#FF8F00',
        light: '#FFDB00',
        dark: '#26355D',
        contrastText: '#FFFFFF',
        text: {
            primary: '#121828',
            secondary: '#FFFFFF',
        }
    }
}

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}