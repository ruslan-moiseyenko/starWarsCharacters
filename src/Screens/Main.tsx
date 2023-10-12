/* eslint-disable react-native/no-color-literals */
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { RenderItem } from '../Components/RenderItem';
import { useAppDispatch, useAppSelector } from '../Hooks/redux';
import { useGetPeopleQuery } from '../Services/api';
import { addFavoriteCharacter } from '../Store/Common/commonSlice';
import {
  getFavoriteFemaleCount,
  getFavoriteManCount,
  getFavoriteOthersCount,
} from '../Store/Common/selectors';

export const Main = () => {
  const { data, error, isLoading } = useGetPeopleQuery();

  const menCount = useAppSelector(getFavoriteManCount);
  const womenCount = useAppSelector(getFavoriteFemaleCount);
  const othersCount = useAppSelector(getFavoriteOthersCount);

  const dispatch = useAppDispatch();

  dispatch(addFavoriteCharacter({ people: data?.results }));

  const characters = data?.results;

  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <View>
        <Text>Favorite Men: {menCount}</Text>
        <Text>Favorite Women: {womenCount}</Text>
        <Text>Favorite Others: {othersCount}</Text>
      </View>
      <FlatList
        data={characters}
        renderItem={({ item }) => {
          return <RenderItem item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,

    backgroundColor: '#A1A1A1',
  },
});
