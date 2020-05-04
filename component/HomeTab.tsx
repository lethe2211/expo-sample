import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button } from "react-native";
import ToDoList from './ToDoList';

export default function HomeTab() {
    const [toDoList, setToDo] = React.useState([
        {key: 'lethe2211'},
        {key: 'yoshikyoto'}
    ]);
    const [text, setText] = React.useState('');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <Button
                title="Add"
                onPress={() => setToDo(toDoList.concat({key: text}))}
            />
            <ToDoList list={toDoList} />
        </View>
    );
}
  

  