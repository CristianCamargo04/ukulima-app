import { View, SafeAreaView, FlatList, Image } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import Constants from "expo-constants";

export default function ListFarmer({ navigation }) {
  const DATA = [
    {
      id: "10904999657",
      nombres: "Brayan Ismael",
      apellidos: "Penaranda",
      email: "brayanpm@ufps.edu.co",
      fechaNacimiento: "08/09/1996",
      telefono: "315743707",
      uri: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg",
    },
    {
      id: "1092390403",
      nombres: "Cristian Fernando",
      apellidos: "Camargo Castellanos",
      email: "cristiancc@ufps.edu.co",
      fechaNacimiento: "16/04/1999",
      telefono: "3123658831",
      uri: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg",
    },
    {
      id: "1021390404",
      nombres: "Frank Jean",
      apellidos: "Gomez",
      email: "jampi@ufps.edu.co",
      fechaNacimiento: "08/09/1996",
      telefono: "315743707",
      uri: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg",
    },
    {
      id: "1042390405",
      nombres: "Yilber Esau",
      apellidos: "Patino",
      email: "yilber@ufps.edu.co",
      fechaNacimiento: "08/09/1996",
      telefono: "315743707",
      uri: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg",
    },
    {
      id: "1002390406",
      nombres: "Yefferon",
      apellidos: "Carrillo",
      email: "yeferson@ufps.edu.co",
      fechaNacimiento: "08/09/1996",
      telefono: "315743707",
      uri: "https://ath2.unileverservices.com/wp-content/uploads/sites/5/2018/02/acondicionador-de-cabello-para-hombre-e1517521713969.jpg",
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Image
          resizeMode="center"
          style={{ height: 80, width: 150 }}
          source={require("../../../../../assets/ukulima-logo.png")}
        />
        <Button
          icon="arrow-left"
          textColor="black"
          onPress={() => navigation.goBack()}
        ></Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "#F7F5F8",
          marginHorizontal: 10,
          borderRadius: 40,
          padding: 10,
        }}
      >
        <Button
          buttonColor="#FFD749"
          textColor="#17431F"
          mode="contained"
          style={{ paddingHorizontal: 15 }}
        >
          Agregar
        </Button>
        <Button
          buttonColor="white"
          textColor="#063C2D"
          mode="contained"
          style={{ paddingHorizontal: 15 }}
        >
          Buscar
        </Button>
      </View>

      <Text
        style={{
          color: "#0E4A3A",
          fontSize: 20,
          fontWeight: "700",
          lineHeight: 24,
          marginLeft: 10,
          marginVertical: 10,
          fontFamily: "Inter",
        }}
      >
        Lista de Agricultores
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item: farmer }) => (
          <View key={farmer.id} style={{ padding: 10 }}>
            <Card style={{ flex: 1 }}>
              <Card.Content
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={{
                    marginRight: 20,
                    height: 50,
                    width: 50,
                    borderRadius: 14,
                  }}
                  resizeMode={"cover"}
                  source={{ uri: farmer.uri }}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: "#0E4A3A",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    {farmer.nombres} {farmer.apellidos}
                  </Text>
                  <Text
                    style={{
                      color: "#0E4A3A",
                      fontSize: 16,
                      fontWeight: "400",
                    }}
                  >
                    {farmer.email}
                  </Text>
                </View>
                <Button
                  onPress={() =>
                    navigation.navigate("ViewFarmer", { valor: farmer })
                  }
                  textColor="#15A249"
                  icon="eye"
                ></Button>
              </Card.Content>
            </Card>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
