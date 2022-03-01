import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {calcSize} from '../../Utils';

export interface AdsProps {
  ads: {
    category: string;
    data: Array<any>;
  };
  onPress: (ad: any) => void;
}

const SmallAd: FC<AdsProps> = ({ads, onPress}) => {
  return (
    <>
      {ads?.data?.map(ad => (
        <TouchableWithoutFeedback
          onPress={() => {
            console.log(ad);
            onPress(ad);
          }}
          style={styles.container}>
          <Text>Title: {ad.title}</Text>
          <Text>Published Date: {ad.publishedAt}</Text>
          <Image
            source={{uri: ad?.urlToImage}}
            style={styles.image}
            height={50}
            width={50}
          />
          <Text>Description: {ad.description}</Text>
        </TouchableWithoutFeedback>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: calcSize(5),
    padding: calcSize(5),
    backgroundColor: 'blue',
  },
  image: {height: 50, width: 50},
});

export default SmallAd;
