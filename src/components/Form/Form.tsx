import React, { PropsWithChildren, useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { ITodoBody } from "../../types/Todo.types";

interface FormProps {
  onAddTodo: (todo: ITodoBody) => void;
}

const Form: React.FC<PropsWithChildren<FormProps>> = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (text: string) => {
    setText(text);
  };

  const handleChangeDescr = (text: string) => {
    setDescription(text);
  };

  const handleSubmit = () => {
    onAddTodo({ title: text.trim(), description: description.trim() });
    setText("");
    setDescription("");
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Create todo:</Text>
      <View style={styles.form}>
        <View style={styles.input_wrapper}>
          <Text style={styles.input_label}>Title:</Text>
          <TextInput
            placeholder="Type here..."
            onChangeText={handleChange}
            value={text}
            multiline
            style={styles.input}
          />
        </View>
        <View style={styles.input_wrapper}>
          <Text style={styles.input_label}>Description:</Text>
          <TextInput
            placeholder="Description..."
            onChangeText={handleChangeDescr}
            value={description}
            multiline
            style={styles.input}
            numberOfLines={3}
            textAlignVertical="top"
          />
        </View>
        <Pressable
          style={({ pressed }) => ({
            ...styles.btn,
            opacity: !text ? 0.4 : 1,
            backgroundColor: pressed ? "#04857e" : "#00f0e4",
          })}
          onPress={handleSubmit}
          disabled={!text}
        >
          <Text style={styles.btn_text}>CREATE!</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#272727",
    borderWidth: 1,
    marginVertical: 15,
  },

  form: {
    paddingVertical: 8,
  },

  input_wrapper: {
    marginBottom: 15,
  },

  input_label: {
    fontSize: 12,
    lineHeight: 18,
  },

  input: {
    borderRadius: 1,
    borderStyle: "solid",
    borderColor: "#272727",
    borderBottomWidth: 1,
  },

  label: {
    color: "#808080",
    fontSize: 18,
    fontWeight: "500",
  },

  btn: {
    padding: 6,
    alignSelf: "center",
  },
  btn_text: {
    color: "#fff",
  },
});

export default Form;
