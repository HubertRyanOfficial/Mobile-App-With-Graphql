import React from 'react';

// * modules

import {ApolloProvider} from '@apollo/client';

// * components

import Home from './src/Home';
import Posts from './src/Posts';

// * utils

import apiConfig from './src/config/apiConfig';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//

const StackNavigator = createNativeStackNavigator();

function App() {
  return (
    <ApolloProvider client={apiConfig}>
      <NavigationContainer>
        <StackNavigator.Navigator>
          <StackNavigator.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: 'Usuários',
            }}
          />
          <StackNavigator.Screen
            name="Posts"
            component={Posts}
            options={({route}) => ({title: `${route.params.username} - Posts`})}
          />
        </StackNavigator.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
// Desenvolvido por Hubert Ryan
