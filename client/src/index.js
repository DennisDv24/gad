import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { urjcTheme } from './styles/theme';

ReactDOM.render(
  	<React.StrictMode>
	  	<ChakraProvider theme={urjcTheme}>
    		<App />
	  	</ChakraProvider>
  	</React.StrictMode>,
  	document.getElementById('root')
);

