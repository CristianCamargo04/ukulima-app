import { View, SafeAreaView, FlatList, Image} from "react-native";
import { Avatar, Button, Card, Paragraph, Snackbar, Title } from "react-native-paper";
import Constants from "expo-constants";

export default function ListFarmer({navigation}){
    const DATA = [
        {
          id: '1',
          nombre: 'Brayan Ismael Penaranda',
          email: 'brayanpm@ufps.edu.co',
          uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg',
        },
        {
          id: '2',
          nombre: 'Cristian Fernando Camargo',
          email: 'cristiancc@ufps.edu.co',
          uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg',
        },
        {
          id: '3',
          nombre: 'Frank Jean Pierre',
          email: 'jampi@ufps.edu.co',
          uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg',
        },
        {
          id: '4',
          nombre: 'Yilber Esau Patino',
          email: 'yilber@ufps.edu.co',
          uri: 'https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg',
        },
        {
          id: '5',
          nombre: 'Yefferon Carrillo',
          email: 'yeferson@ufps.edu.co',
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
                                <Title>{farmer.nombre}</Title>
                                <Paragraph>{farmer.email}</Paragraph>
                            </View>
                            <Button 
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

