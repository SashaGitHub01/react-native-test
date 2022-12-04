import React, { PropsWithChildren, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreenProps, HomeStack } from ".";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import { ITodo, ITodoBody } from "../types/Todo.types";
import HomeDetailsPage from "./HomeDetails";
import HomeMain from "./HomeMain";

const Home: React.FC<PropsWithChildren<HomeScreenProps>> = ({
  navigation,
  route,
}) => {
  return (
    <HomeStack.Navigator initialRouteName="Main">
      <HomeStack.Screen
        name="Details"
        options={{ title: "Details" }}
        initialParams={{ detail: "DET" }}
        component={HomeDetailsPage}
      />
      <HomeStack.Screen
        name="Main"
        options={{ title: "Main" }}
        component={HomeMain}
        initialParams={{ id: "11" }}
      />
    </HomeStack.Navigator>
  );
};

export default Home;
