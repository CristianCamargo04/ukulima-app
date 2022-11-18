import { Pressable, SafeAreaView, Text } from "react-native";

export default function Register({ navigation }){
    return <SafeAreaView style={{flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => navigation.navigate('Login')}>
            <Text>Continuar</Text>
        </Pressable>
    </SafeAreaView>
} 