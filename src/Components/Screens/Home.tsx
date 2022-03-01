import React, {FC, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {HomeScreenProps} from '../../Routes';
import * as api from '../../Api';
import {useQuery} from 'react-query';
import {calcSize, extractIndexToString} from '../../Utils';
import SmallAd from '../Common/SmallAd';
import {CATEGORIES} from '../../Constants';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Home: FC<HomeScreenProps> = ({navigation}) => {
  const {data} = useQuery('categories', api.fetchCategories);

  const onPress = (ad: any) => {
    navigation.navigate('BigAd', {ad});
  };

  const [dataState, setDataState] = useState(data);

  const onPressCategory = (category: string) => {
    setDataState(data?.filter((val: any) => val.category === category));
  };

  const HeaderComponent = () => {
    return (
      <View style={styles.categoryContainer}>
        {CATEGORIES.map(category => (
          <TouchableWithoutFeedback
            onPress={() => onPressCategory(category)}
            style={styles.categoryItem}>
            <Text>{category}</Text>
          </TouchableWithoutFeedback>
        ))}
      </View>
    );
  };

  return (
    <FlatList
      data={dataState}
      ListHeaderComponent={HeaderComponent}
      keyExtractor={extractIndexToString}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={<View style={{height: calcSize(30)}} />}
      contentContainerStyle={{
        marginTop: calcSize(30),
      }}
      keyboardShouldPersistTaps="handled"
      renderItem={({item}) => <SmallAd ads={item} onPress={onPress} />}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    padding: 5,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
    borderRadius: 15,
    margin: 10,
  },
});
