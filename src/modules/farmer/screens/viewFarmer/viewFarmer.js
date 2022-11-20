import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Button, Title, Text, Divider } from "react-native-paper";
import Constants from "expo-constants";

export default function ViewFarmer({ navigation, route }) {
  const farm = route.params.valor;
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
      <ScrollView
        style={{
          paddingBottom: 20,
        }}
      >
        <View style={styles.grayContainer}>
          <View style={styles.whiteContainer}>
            <View style={styles.detail}>
              <Title style={styles.title}>Detalle Agricultor</Title>
              <View>
                <Text style={styles.label}>Nombres</Text>
                <Text style={styles.dataText}>{farm.nombres}</Text>
              </View>
              <View>
                <Text style={styles.label}>Apellidos</Text>
                <Text style={styles.dataText}>{farm.apellidos}</Text>
              </View>
              <View>
                <Text style={styles.label}>Fecha de nacimiento</Text>
                <Text style={styles.dataText}>{farm.fechaNacimiento}</Text>
              </View>
              <View>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.dataText}>{farm.email}</Text>
              </View>
              <View>
                <Text style={styles.label}>Telefono</Text>
                <Text style={styles.dataText}>{farm.telefono}</Text>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.label}>Indentificacion</Text>
                <Text style={styles.dataText}>{farm.id}</Text>
              </View>
            </View>
            <Divider bold={true} />
            <Button style={styles.btn} mode="contained">
              Cerrar
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  grayContainer: {
    borderRadius: 39,
    backgroundColor: "#F7F5F8",
    margin: 20,
    padding: 20,
  },
  whiteContainer: {
    backgroundColor: "white",
    borderRadius: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  detail: {
    padding: 20,
  },
  title: {
    color: "#063C2D",
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 36,
  },
  dataText: {
    color: "#063C2D",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 27,
    fontFamily: "Inter",
  },
  label: {
    fontSize: 16,
    color: "#272727",
    fontWeight: "400",
    lineHeight: 19,
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#D63D0C",
    borderRadius: 14,
    marginVertical: 20,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
});
