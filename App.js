import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { linking } from './src/constants/Linking';
import NfcManager from 'react-native-nfc-manager';

import HomeScreen from './src/screens/HomeScreen';
import ReaderScreen from './src/screens/ReaderScreen';
import WriterScreen from './src/screens/WriterScreen';
import CopyScreen from './src/screens/CopyScreen';
import EraseScreen from './src/screens/EraseScreen';

const StackNavigator = createNativeStackNavigator();

const App = () => {
  const [isNfcSupported, setIsNfcSupported] = useState(false);
  const [isNfcEnable, setIsNfcEnable] = useState(false);

  useEffect(() => {
    const checkIsSupported = async () => {
      const isSupported = await NfcManager.isSupported();
      setIsNfcSupported(isSupported);
    }
    checkIsSupported();
  }, [isNfcSupported]);

  useEffect(() => {
    const checkIsEnable = async () => {
      const isEnable = await NfcManager.isEnabled();
      setIsNfcEnable(isEnable);
    }
    checkIsEnable();
  }, [isNfcEnable, isNfcSupported]);

  return (
    <NavigationContainer linking={linking}>
      <StackNavigator.Navigator initialRouteName="Home" backBehavior="Home">

        <StackNavigator.Screen name='Home' options={{ headerShown: false }}>
          {props => <HomeScreen
            {...props}
            isNfcSupported={isNfcSupported}
            isNfcEnable={isNfcEnable}
            setIsNfcSupported={setIsNfcSupported}
          />}
        </StackNavigator.Screen>

        <StackNavigator.Screen name='Reader' options={{ headerShown: false }}>
          {props => <ReaderScreen
            {...props}
            isNfcEnable={isNfcEnable}
          />}
        </StackNavigator.Screen>

        <StackNavigator.Screen name='Writer' options={{ headerShown: false }}>
          {props => <WriterScreen
            {...props}
            isNfcEnable={isNfcEnable}
          />}
        </StackNavigator.Screen>

        <StackNavigator.Screen name='Copy' options={{ headerShown: false }}>
          {props => <CopyScreen
            {...props}
            isNfcEnable={isNfcEnable}
          />}
        </StackNavigator.Screen>

        <StackNavigator.Screen name='Erase' options={{ headerShown: false }}>
          {props => <EraseScreen
            {...props}
            isNfcEnable={isNfcEnable}
          />}
        </StackNavigator.Screen>

      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;