import { Pressable, SafeAreaView } from "react-native";

export default function Login(){
    return <SafeAreaView style={{flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => console.log('Ingrese')}>
            <Text>Ingresar</Text>
        </Pressable>
    </SafeAreaView>
} 