import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/Theme/Colors';

import { ButtonReset } from '../Components/Buttons/ButtonReset';
import { Pagination } from '../Components/Pagination';
import { RenderItem } from '../Components/RenderItem';
import { ENDPOINTS } from '../Constants/endpoints';
import { getPageNumberFromTheURL } from '../Helpers/helpers';
import { useAppSelector } from '../Hooks/redux';
import { useGetPeopleQuery } from '../Services/api';
import {
  getFavoriteFemaleCount,
  getFavoriteManCount,
  getFavoriteOthersCount,
} from '../Store/Common/selectors';

export const Home = () => {
  const [pageUrl, setPageUrl] = useState<string>(ENDPOINTS.PEOPLE);
  const { data, isLoading } = useGetPeopleQuery(pageUrl || '');

  const menCount = useAppSelector(getFavoriteManCount);
  const womenCount = useAppSelector(getFavoriteFemaleCount);
  const othersCount = useAppSelector(getFavoriteOthersCount);

  const characters = data?.results;

  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
        <View>
          <Text>Favorite Men: {menCount}</Text>
          <Text>Favorite Women: {womenCount}</Text>
          <Text>Favorite Others: {othersCount}</Text>
          <ButtonReset />
        </View>
        {isLoading ? (
          <View style={styles.loadingWrapper}>
            <Text>...Loading</Text>
          </View>
        ) : (
          <FlatList
            data={characters}
            renderItem={({ item }) => {
              return <RenderItem item={item} />;
            }}
          />
        )}
      </View>
      <View>
        <Pagination
          onBackPress={() => setPageUrl(data?.previous || '')}
          onForwardPress={() => setPageUrl(data?.next || '')}
          isBackDisabled={!data?.previous}
          isForwardDisabled={!data?.next}
          currentPage={getPageNumberFromTheURL(pageUrl)}
          pages={data?.count ? Math.trunc(data.count / 10) : 0}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  loadingWrapper: {
    flex: 1,
    backgroundColor: COLORS.BLACK + 'bb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
