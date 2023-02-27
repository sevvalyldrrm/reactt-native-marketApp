import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import {REACT_APP_DENEME} from '@env';
import axios from 'axios'

import ProductCard from '../../components/ProductCard'

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    fetchData();
   }, []);

   const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(REACT_APP_DENEME);
     setData(productData);
     setLoading(false)
    } catch(error) {
      setError (error.message)
      setLoading (false)
    }
   };


  // useEffect(() => {
  //   fetch(REACT_APP_DENEME)
  //     .then((resp) => resp.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error)) 
  //     .finally(() => setLoading(false));
  // }, []);

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
  )
}