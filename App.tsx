import React from 'react';
import {LogBox} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {WHITE} from './src/Constants';
import {QueryClient, QueryClientProvider} from 'react-query';
import Routes from './src/Routes';

LogBox.ignoreLogs(['Setting a timer']);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: WHITE,
    card: WHITE,
  },
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
