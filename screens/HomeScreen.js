import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
// import { ScrollView } from "react-native-web";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "Testing",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white  pt-5 flex-col">
      {/* header */}
      <View className="flex-row pb-3 items-center  mx-4 space-x-2 px-4">
        <Image
          source={require("../assets/HomeIcon.jpg")}
          className="h-8 w-8 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-gray-400 text-sm font-bold">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon color={"#00CCBB"} size={20} />
          </Text>
        </View>
        <UserIcon color={"#00CCBB"} className="p-5" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className=" flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color={"#00CCBB"} />
          <TextInput
            placeholder="Restaurants and cuisiens"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color={"#00CCBB"} />
      </View>

      <ScrollView>
        {/* catagories */}
        <Categories />
        {/* {featured rows} */}
        <FeaturedRow
          id="1"
          title="Featured"
          des="Paid placements from  our parents"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="2"
          title="Featured"
          des="Paid placements from  our parents"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="3"
          title="Featured"
          des="Paid placements from  our parents"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
