import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: 0.7px;
        font-family: 'Ubuntu', sans-serif;
        /* 400, 500, 700 */

        /* for text legigiblity */
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased !important;
        -moz-font-smoothing: antialiased !important;
        text-rendering: optimizelegibility !important;
        letter-spacing: .02em;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    body {
        scroll-behavior: smooth;
        font-size: 1.6rem;
    }

    main {
        padding-top: 100px;
    }

    section {
        padding-left: 2.5%;
        padding-right: 2.5%;

        @media (min-width: 1400px) {
            padding-left: 7%;
            padding-right: 7%;
        }

        @media (min-width: 1700px) {
            padding-left: 10%;
            padding-right: 10%;
        }

        @media (min-width: 2000px) {
            padding-left: 15%;
            padding-right: 15%;
        }
    }

    section:not(:first-of-type) {
        padding-top: 100px;
    }

    ::-webkit-scrollbar {
        width: 15px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Merriweather', serif;
        /* 400, 700, 900 */

        /* for headings legigiblity */
        letter-spacing: .03em
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.lightText};
    }

    h2 {
        font-size: 2.3rem;
        color: ${({ theme }) => theme.colors.lightText};
    }

    h3 {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.lightText};
    }

    p {
        line-height: 1.4em;
    }

    input, select, textarea {
        width: 100%;
        /* padding: 5px 10px; */
        padding: 0 10px;
        height: 30px;
        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme.colors.mainColor};
        background: ${({ theme }) => theme.colors.secBg};
        color: ${({ theme }) => theme.colors.lightText};
    }

    input:focus, select:focus, textarea:focus {
        border: 1px solid transparent;
        outline: 1px solid ${({ theme }) => theme.colors.mainColor};
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(26, 82, 118, 0.6);
    }

    ::placeholder {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.lightTextSec};
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2.8rem;
        }
    }
`

export default GlobalStyles