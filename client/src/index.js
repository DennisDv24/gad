import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { urjcTheme } from './styles/theme';
import { Provider } from 'react-redux';
import { store } from './state/store';

ReactDOM.render(
  	<React.StrictMode>
		<ChakraProvider theme={urjcTheme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ChakraProvider>
  	</React.StrictMode>,
  	document.getElementById('root')
);

