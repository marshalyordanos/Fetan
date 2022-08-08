import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, des, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{des}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id="12"
          imgUrl={require("../assets/burger.jpg")}
          title="Beef Burger"
          rating={4.5}
          genre="US"
          address="Addis ababa"
          short_description="That is a testy description"
          dishes={9}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id="12"
          imgUrl={require("../assets/burger.jpg")}
          title="Beef Burger"
          rating={4.5}
          genre="US"
          address="Addis ababa"
          short_description="That is a testy description"
          dishes={9}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id="12"
          imgUrl={require("../assets/burger.jpg")}
          title="Beef Burger"
          rating={4.5}
          genre="US"
          address="Addis ababa"
          short_description="That is a testy description"
          dishes={9}
          long={20}
          lat={10}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
