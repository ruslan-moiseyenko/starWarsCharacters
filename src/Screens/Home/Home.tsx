import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { Board } from '@/Components/Board/Board';
import { Pagination } from '@/Components/Pagination';
import { RenderItem } from '@/Components/RenderItem';
import { ENDPOINTS } from '@/Constants/endpoints';
import { getPageNumberFromTheURL } from '@/Helpers/helpers';
import { useAppSelector } from '@/Hooks/redux';
import { useGetPeopleQuery } from '@/Services/api';
import {
  getFavoriteFemaleCount,
  getFavoriteManCount,
  getFavoriteOthersCount,
} from '@/Store/Common/selectors';
import { COLORS } from '@/Theme/Colors';

export const Home = () => {
  const [pageUrl, setPageUrl] = useState<string>(ENDPOINTS.PEOPLE);
  const { data, isLoading, isFetching } = useGetPeopleQuery(pageUrl);

  const menCount = useAppSelector(getFavoriteManCount);
  const womenCount = useAppSelector(getFavoriteFemaleCount);
  const othersCount = useAppSelector(getFavoriteOthersCount);

  const characters = data?.results;

  return (
    <>
      <View style={styles.container}>
        <Board
          menCount={menCount}
          womenCount={womenCount}
          othersCount={othersCount}
        />

        {isLoading || isFetching ? (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator size="large" color={COLORS.BROWN} />
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
          pages={data?.count ? Math.ceil(data.count / 10) : 0}
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
