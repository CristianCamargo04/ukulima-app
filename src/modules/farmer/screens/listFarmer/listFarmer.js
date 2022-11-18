import { Pressable, SafeAreaView } from "react-native";

export default function ListFarmer(){
    return <SafeAreaView style={{flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => console.log('Ingrese')}>
            <Text>Listar</Text>
        </Pressable>
    </SafeAreaView>
} 