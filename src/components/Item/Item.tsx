import React, { PropsWithChildren } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { ITodo } from "../../types/Todo.types";

interface ItemProps extends ITodo {
  index: number;
  onDeleteTodo: (id: number) => void;
  onChangeStatus: (id: number) => void;
}

const Item: React.FC<PropsWithChildren<ItemProps>> = ({
  title,
  id,
  status,
  onDeleteTodo,
  onChangeStatus,
  index,
  description,
}) => {
  const showConfirmDialog = () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove todo?",
      [
        {
          text: "Yes",
          onPress: () => {
            onDeleteTodo(id);
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  return (
    <Pressable
      style={styles.item_cont}
      onPress={() => onChangeStatus(id)}
      onLongPress={showConfirmDialog}
    >
      <View style={styles.wrapper}>
        <View style={styles.item_body}>
          <View style={[styles.body_item]}>
            <Text style={styles.num}>{index}.</Text>
          </View>
          <View style={[styles.body_item, styles.body]}>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            {!!description && (
              <View>
                <Text style={styles.descr}>{description}</Text>
              </View>
            )}
          </View>
          <View style={[styles.body_item, styles.status]}>
            <View style={styles.indicator}>
              <View style={styles.circle(status)} />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item_cont: {
    marginVertical: 12 / 2,
  },

  wrapper: {
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2b2a2a",
    paddingVertical: 18,
    paddingHorizontal: 12,
  },

  item_body: {
    paddingHorizontal: 8 / -2,
    flexDirection: "row",
  },

  body_item: {
    marginHorizontal: 8 / 2,
  },

  num: {
    fontSize: 18,
  },

  body: {
    flex: 1,
  },

  title: {},

  descr: {
    color: "#6e6e6e",
    fontSize: 12,
  },

  status: {
    alignSelf: "center",
  },

  indicator: {
    borderRadius: 12,
    width: 24,
    height: 24,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#080808",
    alignItems: "center",
    justifyContent: "center",
  },

  circle: ((status: boolean) => {
    return {
      backgroundColor: status ? "green" : "red",
      borderRadius: 8,
      width: 16,
      height: 16,
    };
  }) as any,
});

export default Item;
