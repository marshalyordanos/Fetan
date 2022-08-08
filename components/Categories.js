import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        padding: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        title="Testing 1"
        imgUrl={require("../assets/Burger1.jpg")}
      />
      <CategoryCard
        title="Testing 2"
        imgUrl={require("../assets/Burger1.jpg")}
      />
      <CategoryCard
        title="Testing 3"
        imgUrl={require("../assets/Burger1.jpg")}
      />
      <CategoryCard
        title="Testing 4"
        imgUrl={require("../assets/Burger1.jpg")}
      />
      <CategoryCard
        title="Testing 4"
        imgUrl={require("../assets/Burger1.jpg")}
      />
      <CategoryCard
        title="Testing 4"
        imgUrl={require("../assets/Burger1.jpg")}
      />
      <CategoryCard
        title="Testing 4"
        imgUrl={require("../assets/Burger1.jpg")}
      />
    </ScrollView>
  );
};

export default Categories;
