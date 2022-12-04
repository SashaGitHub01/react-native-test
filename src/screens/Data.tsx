import React, { PropsWithChildren } from "react";
import { Pressable, Text, View } from "react-native";
import { DataScreenProps } from ".";

const Data: React.FC<PropsWithChildren<DataScreenProps>> = ({
  navigation,
  route,
}) => {
  console.log(route.params);
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Main",
            params: {
              id: "2",
            },
          })
        }
      >
        <Text>Go to Home page {`>`}</Text>
      </Pressable>
    </View>
  );
};

export default Data;
