import React from 'react';
import {
  ChakraProvider, Text,
} from '@chakra-ui/react';
import MainRoutes from './utils/routes/Routes';
import theme from './assets/theme/Theme';
import Home from './screens/home/Home';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <MainRoutes />
      </ChakraProvider>
    </>

  );
}

export default App;
