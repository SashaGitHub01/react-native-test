import React, { PropsWithChildren } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { ITodo } from "../../types/Todo.types";
import Item from "../Item/Item";

interface ListProps {
  items: ITodo[];
  onDeleteTodo: (id: number) => void;
  onChangeStatus: (id: number) => void;
}

const List: React.FC<PropsWithChildren<ListProps>> = ({
  items,
  onDeleteTodo,
  onChangeStatus,
}) => {
  return (
    <FlatList
      style={styles.list}
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <Item
          onChangeStatus={onChangeStatus}
          index={index + 1}
          {...item}
          onDeleteTodo={onDeleteTodo}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 15,
    paddingHorizontal: 12 / -2,
  },
});

export default List;
