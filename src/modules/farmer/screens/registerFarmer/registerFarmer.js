import { Pressable, SafeAreaView } from "react-native";

export default function RegisterFarmer(){
    return <SafeAreaView style={{flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => console.log('Registrar')}>
            <Text>Guardar</Text>
        </Pressable>
    </SafeAreaView>
} 