import { Pressable, SafeAreaView  } from "react-native";
import { Text } from "react-native-paper";

export default function Login({navigation}){
    return <SafeAreaView style={{flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => navigation.replace('FarmerStack')}>
            <Text variant="displaySmall"> Ingresar</Text>
        </Pressable>
    </SafeAreaView>
} 