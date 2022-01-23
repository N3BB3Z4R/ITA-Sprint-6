import { createGlobalStyle } from 'styled-components';

// const desktopStartWidth = '996'
// const desktop = `@media (min-width: ${desktopStartWidth}px)`
// const mobile = `@media (max-width: ${desktopStartWidth}px)`

/* Estilo global con Styled-Component */
export const GlobalStyle = createGlobalStyle`

  :root {
    --color-primary: hsl(10, 65%, 40%);
    --color-secondary: hsl(30, 90%, 50%);
    --color-tertiary: hsl(210, 100%, 45%);
    --color-light-primary: hsla(0, 90%, 45%, 0.9);
    --color-dark-tertiary: hsl(210, 65%, 10%);
  }

  body {
    margin: 0rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${(props) => props.img});
    background-size: cover;
    backdrop-filter: blur(2px);
    transition: background-image 0.6s ease-in-out;
  }

  .header {
    /* background-color: #282c34; */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;

// export const imgSelector = (index) => {
//   switch (index) {
//     case 0:
//       return img1;
//     case 1:
//       return img2;
//     case 2:
//       return img3;
//     case 3:
//       return img4;
//     default:
//       return img1;
//   }
// }

/* background-image: url(${props => ('./img/' + (props.index + 1) + '.jpg')}); */
  /* background-image: url(${(props) => props.index === 0 ? img1 : props.index === 1 ? img2 : props.index === 2 ? img3 : img4}); */