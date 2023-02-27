import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'


export default function Loading() {
  return <LottieView source={require('../../assest/loading.json')} autoPlay/>;
};