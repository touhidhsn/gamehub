import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App.tsx';
import './index.css';
import theme from './theme.ts';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClinet = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClinet}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
