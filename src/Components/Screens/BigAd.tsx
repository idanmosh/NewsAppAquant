import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BigAdScreenProps} from '../../Routes';
import {calcSize} from '../../Utils';

const BigAd: FC<BigAdScreenProps> = ({route}) => {
  const ad = route.params.ad;
  return (
    <View style={styles.container}>
      <Text>Title: {ad.title}</Text>
      <Text>Published Date: {ad.publishedAt}</Text>
      <Image
        source={{uri: ad?.urlToImage}}
        style={styles.image}
        height={80}
        width={80}
      />
      <Text>Description: {ad.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: calcSize(5),
    padding: calcSize(5),
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'blue',
  },
  image: {height: 80, width: 80},
});

export default BigAd;
