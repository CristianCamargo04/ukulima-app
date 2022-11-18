import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text} from "react-native";
import { Button, Snackbar } from "react-native-paper";

export default function ListFarmer({navigation}){
    const [visible, setVisible] = useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);
    
    return <SafeAreaView style={[styles.container,{flex: 1 , justifyContent: 'center', alignItems: 'center'}]} >
        <Pressable onPress={() => navigation.goBack()}>
            <Text>Atras</Text>
        </Pressable>
        <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
            label: 'Undo',
            onPress: () => {
                // Do something
            },
            }} >
            Hola soy un mensaje
        </Snackbar>
    </SafeAreaView>
} 

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'space-between',
    },
});