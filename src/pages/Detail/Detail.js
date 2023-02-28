import { View, Text, Image} from 'react-native'
import React from 'react'
import styles from './Detail.style'

import {REACT_APP_DENEME} from '@env';
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading';
import Error from '../../components/Error';

export default function Detail({route}) {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${REACT_APP_DENEME}/${id}`)

  if(loading){
    return <Loading />
  }
  
  if(error){
    return <Error />
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri : data.image}} />
      <View style={styles.body_container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  )
}