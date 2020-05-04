import * as React from 'react';
import { StyleSheet, Text, FlatList, View } from "react-native";

type ToDoListProps = { list: [{key: string}] }
export default function ToDoList({ list }: ToDoListProps) {
    return  (
    <FlatList
        data={list}
        renderItem={({ item, index }) =>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{item.key}</Text>
            </View>
    }
    />
  )
}