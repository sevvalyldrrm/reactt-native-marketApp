import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import {REACT_APP_DENEME} from '@env';


import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch';

export default function Product() {

  const {loading, data, error} = useFetch(REACT_APP_DENEME);


  const renderProduct = ({item}) => <ProductCard product={item}/>;

  if(loading){
    return <ActivityIndicator size = 'large'/>
  }
  
  if(error){
    return <Text>{error}</Text>
  }

  return (
    <View>
      <FlatList data = {data} renderItem={renderProduct}/>
    </View>
  );
};