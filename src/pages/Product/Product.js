import React from 'react';
import { FlatList } from 'react-native';
import {REACT_APP_DENEME} from '@env';
import Loading from '../../components/Loading';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

export default function Product({navigation}) {

  const {loading, data} = useFetch(REACT_APP_DENEME);

  const handleProductSelect = (id) => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
  <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} /> 
  );

  if(loading){
    return <Loading />
  }
  
  

  return (
      <FlatList data = {data} renderItem={renderProduct}/>
  );
};