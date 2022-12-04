import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { HomeDetailsScreenProps } from ".";

interface HomeDetailsPageProps extends HomeDetailsScreenProps {}

const HomeDetailsPage: React.FC<PropsWithChildren<HomeDetailsPageProps>> = ({
  navigation,
  route,
}) => {
  console.log(11, route.params.detail);
  return (
    <View>
      <Text>Home-details</Text>
    </View>
  );
};

export default HomeDetailsPage;
