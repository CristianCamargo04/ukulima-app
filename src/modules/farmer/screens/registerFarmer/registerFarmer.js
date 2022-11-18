import { Pressable, SafeAreaView, Text } from "react-native";

export default function RegisterFarmer({navigation}){
    return <SafeAreaView style={{flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => navigation.navigate('ListFarmer')}>
            <Text>Guardar</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('AuthStack')}>
            <Text>Atras</Text>
        </Pressable>
    </SafeAreaView>
} 