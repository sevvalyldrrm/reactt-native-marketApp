import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Product from './pages/Product/Product'
import Detail from './pages/Detail/Detail'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ProductPage' component={Product} />
        <Stack.Screen name='DetailPage' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}