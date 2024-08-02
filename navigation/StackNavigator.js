/* eslint-disable */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
    const stack = createNativeStackNavigator
  return (
   <NavigationContainer>
    <Stack.Navigator>
        
    </Stack.Navigator>
   </NavigationContainer>
  );
};
export default StackNavigator;

const styles = StyleSheet.create({});
