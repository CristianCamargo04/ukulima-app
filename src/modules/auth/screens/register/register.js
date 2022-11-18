import { Pressable, SafeAreaView } from "react-native";

export default function Register(){
    return <SafeAreaView style={{flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => console.log('Registrar')}>
            <Text>Continuar</Text>
        </Pressable>
    </SafeAreaView>
} 