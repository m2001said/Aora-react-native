import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptySata from "../../components/EmptySata";
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    // re call videso
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-8 px-4 space-y-6">
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-lg text-gray-50">Welcome Back</Text>
                <Text className="text-2xl text-white font-bold">Mohamed</Text>
              </View>

              <Image source={images.logoSmall} className="w-8 h-9" />
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-2 pb-8">
              <Text className="text-gray-100 font-pregular">Latest videos</Text>
              <Trending
                posts={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] ?? []}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptySata
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
