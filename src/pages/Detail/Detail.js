

import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Detail.style'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading';
import {REACT_APP_DENEME} from '@env';

export default function Detail({route}) {
  const {id} = route.params;
  const {loading, data} = useFetch(`${REACT_APP_DENEME}/${id}`);

  if (loading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
};