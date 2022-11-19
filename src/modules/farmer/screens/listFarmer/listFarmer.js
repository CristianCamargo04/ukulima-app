import { View, SafeAreaView, FlatList, Image} from "react-native";
import { Avatar, Button, Card, Paragraph, Snackbar, Title } from "react-native-paper";
import Constants from "expo-constants";

export default function ListFarmer({navigation}){
    const DATA = [
        {
          id: '10904999657',
          nombres: 'Brayan Ismael',
          apellidos: 'Penaranda',
          email: 'brayanpm@ufps.edu.co',
          fechaNacimiento: '08/09/1996',
          telefono: '315743707',
          uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg',
        },
        {
          id: '1092390403',
          nombres: 'Cristian Fernando',
          apellidos: 'Camargo',
          email: 'cristiancc@ufps.edu.co',
          fechaNacimiento: '16/04/1999',
          telefono: '3123658831',
          uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg',
        },
        {
          id: '1021390404',
          nombres: 'Frank Jean',
          apellidos: 'Gomez',
          email: 'jampi@ufps.edu.co',
          fechaNacimiento: '08/09/1996',
          telefono: '315743707',
          uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg',
        },
        {
          id: '1042390405',
          nombres: 'Yilber Esau',
          apellidos: 'Patino',
          email: 'yilber@ufps.edu.co',
          fechaNacimiento: '08/09/1996',
          telefono: '315743707',
          uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg',
        },
        {
          id: '1002390406',
          nombres: 'Yefferon',
          apellidos: 'Carrillo',
          email: 'yeferson@ufps.edu.co',
          fechaNacimiento: '08/09/1996',
          telefono: '315743707',
          uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg',
        },
    ];

    return <SafeAreaView style={{flex:1, marginTop: Constants.statusBarHeight,}}>
        <Card style={{alignItems: 'center'}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-around"}}>
                <Image
                resizeMode="center"
                style={{height:150, width:150, marginRight: 20}}
                source={require('../../../../../assets/ukulima-logo.png')} />
                <Button
                    onPress={() => navigation.navigate('AuthStack')}
                    icon="arrow-left"
                    textColor="black"
                >
                </Button>
            </View>
            <Card.Actions>
                <Button buttonColor="#15A249" textColor="white" mode="contained">Agregar</Button>
                <Button buttonColor="white" textColor="#15A249" mode="contained">Buscar</Button>
            </Card.Actions>
        </Card>

        <FlatList
            data={DATA}
            renderItem={({ item: farmer}) => (
                <View key={farmer.id} style={{padding: 10}}>
                    <Card style={{flex: 1}}>
                        <Card.Content style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <Avatar.Image size={64} style={{marginRight: 20}} source={{uri:farmer.uri}} />
                            <View style={{flex:1}}>
                                <Title>{farmer.nombres} {farmer.apellidos}</Title>
                                <Paragraph>{farmer.email}</Paragraph>
                            </View>
                            <Button 
                                onPress={() => navigation.navigate("ViewFarmer",{valor: farmer})}
                                textColor="#15A249" 
                                icon="eye"
                            >
                            </Button>
                        </Card.Content>
                    </Card>
                </View>
            )}
        />
    </SafeAreaView>
} 

