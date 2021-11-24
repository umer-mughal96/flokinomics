import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import MainRoutes from './utils/routes/Routes';
import theme from './assets/theme/Theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainRoutes />
    </ChakraProvider>
  );
}

export default App;
