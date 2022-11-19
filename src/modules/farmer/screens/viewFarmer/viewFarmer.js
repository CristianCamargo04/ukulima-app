import { View, SafeAreaView, FlatList, Image} from "react-native";
import { Avatar, Button, Card, Paragraph, Snackbar, Title, Text } from "react-native-paper";
import Constants from "expo-constants";

export default function ViewFarmer({navigation, route}){
    const farm = route.params.valor;
    return <SafeAreaView style={{flex:1, marginTop: Constants.statusBarHeight,}}>
        <Card style={{alignItems: 'center'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-around"}}>
                <Image
                resizeMode="center"
                style={{height:150, width:150, marginRight: 20}}
                source={require('../../../../../assets/ukulima-logo.png')} />
                <Button
                    icon="arrow-left"
                    textColor="black"
                    onPress={() => navigation.goBack()}
                >
                </Button>
            </View>
            <Card.Actions>
                <Button buttonColor="#15A249" textColor="white" mode="contained">Agregar</Button>
                <Button buttonColor="white" textColor="#15A249" mode="contained">Buscar</Button>
            </Card.Actions>
        </Card>
        <View>
            <Title style={{color:"#15A249"}} >Agricultor</Title>
            <View>
                <Text>Nombres</Text>
                <Text style={{color:"#15A249"}}>{farm.nombres}</Text>
            </View>
            <View>
                <Text>Apellidos</Text>
                <Text style={{color:"#15A249"}}>{farm.apellidos}</Text>
            </View>
            <View>
                <Text>Fecha de nacimiento</Text>
                <Text style={{color:"#15A249"}}>{farm.fechaNacimiento}</Text>
            </View>
            <View>
                <Text>Email</Text>
                <Text style={{color:"#15A249"}}>{farm.email}</Text>
            </View>
            <View>
                <Text>Telefono</Text>
                <Text style={{color:"#15A249"}}>{farm.telefono}</Text>
            </View>
            <View>
                <Text>Indentificacion</Text>
                <Text style={{color:"#15A249"}}>{farm.id}</Text>
            </View>
        </View>
    </SafeAreaView>
} 

