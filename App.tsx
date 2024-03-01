import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Welcome from './src/modules/welcome/Welcome';
import Login from './src/modules/login/Login';
import MainTab from './src/modules/mainTab/MainTab';
import ArticleDetail from './src/modules/articleDetail/ArticleDetail';
import SearchGoods from './src/modules/searchGoods/SearchGoods';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={{width: '100%', height: '100%'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            cardStyle: {elevation: 1},
          }}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="ArticleDetail"
            component={ArticleDetail}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="SearchGoods"
            component={SearchGoods}
            options={{
              headerShown: false,
              presentation: 'transparentModal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
