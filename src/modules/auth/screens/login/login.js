import {
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
  View,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Constants from "expo-constants";
import React from "react";
const logo = require("../../../../../assets/logo-vertical-white.png");
const image = require("../../../../../assets/image-background.jpg");
const ScreenHeight = Dimensions.get("window").height;
export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={image}
        resizeMode={"cover"}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle} variant="headlineMedium">
            Iniciar sesion
          </Text>

          <View>
            <TextInput
              style={styles.inputGroup}
              textColor="#063C2D"
              activeUnderlineColor="#063C2D"
              label="Email"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              style={styles.inputGroup}
              textColor="#063C2D"
              activeUnderlineColor="#063C2D"
              label="Password"
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <View>
            <Button
              style={styles.formButton}
              buttonColor="#15A249"
              mode="contained"
              onPress={() => navigation.replace("FarmerStack")}
            >
              <Text style={styles.text}>Ingresar</Text>
            </Button>
          </View>
          <View style={styles.formTextGroup}>
            <Text
              style={{
                color: "#115F49",
                marginRight: 5,
              }}
              variant="bodyLarge"
            >
              ¿No tienes cuenta?
            </Text>
            <Text
              style={{
                color: "#063C2D",
              }}
              variant="bodyLarge"
            >
              Registrate
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  imageBackground: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: ScreenHeight,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    resizeMode: "center",
    width: 100,
    height: 200,
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 31,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  formTitle: {
    color: "#063C2D",
    alignSelf: "center",
    fontWeight: "700",
  },
  inputGroup: {
    marginTop: 15,
    backgroundColor: "#F7F5F8",
  },
  formButton: {
    marginVertical: 20,
    paddingVertical: 10,
  },
  formTextGroup: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
