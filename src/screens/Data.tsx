import React, { PropsWithChildren } from "react";
import { Text, View } from "react-native";

interface DataProps {}

const Data: React.FC<PropsWithChildren<DataProps>> = ({}) => {
  return (
    <View>
      <Text>Data</Text>
    </View>
  );
};

export default Data;
