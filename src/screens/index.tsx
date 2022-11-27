import React, { PropsWithChildren, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import { ITodo, ITodoBody } from "../types/Todo.types";

const Home: React.FC<PropsWithChildren> = ({}) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onAddTodo = (todo: ITodoBody) => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: new Date().getMilliseconds(),
          status: false,
          ...todo,
        },
      ];
    });
  };

  const onDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeStatus = (id: number) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) item.status = !item.status;
        return item;
      })
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.title}>Test App</Text>
      </View>
      <SafeAreaView style={styles.safe}>
        <Form onAddTodo={onAddTodo} />
        <List
          items={todos}
          onChangeStatus={onChangeStatus}
          onDeleteTodo={onDeleteTodo}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "600",
  },

  safe: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 8,
  },

  head: {
    paddingTop: 28,
    backgroundColor: "#14dfee",
  },
});

export default Home;
