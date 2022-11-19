import {
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
  View,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Constants from "expo-constants";
import React from "react";
const logo = require("../../../../../assets/logo-vertical-white.png");
const image = require("../../../../../assets/image-background.jpg");
const ScreenHeight = Dimensions.get("window").height;

export default function Register({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
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
                  Registrate
                </Text>

                <View>
                  <TextInput
                    style={styles.inputGroup}
                    textColor="#063C2D"
                    activeUnderlineColor="#063C2D"
                    label="Nombres"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                  />
                  <TextInput
                    style={styles.inputGroup}
                    textColor="#063C2D"
                    activeUnderlineColor="#063C2D"
                    label="Apellidos"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                  />
                  <TextInput
                    style={styles.inputGroup}
                    textColor="#063C2D"
                    activeUnderlineColor="#063C2D"
                    label="Correo electronico"
                    value={email}
                    keyboardType={"email-address"}
                    onChangeText={(email) => setEmail(email)}
                  />
                  <View style={styles.inputGroupTwo}>
                    <TextInput
                      style={styles.input50}
                      textColor="#063C2D"
                      activeUnderlineColor="#063C2D"
                      label="Telefono"
                      value={email}
                      keyboardType={"numeric"}
                      onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                      style={styles.input50}
                      textColor="#063C2D"
                      activeUnderlineColor="#063C2D"
                      label="Tipo Identificacion"
                      value={email}
                      onChangeText={(email) => setEmail(email)}
                    />
                  </View>

                  <View style={styles.inputGroupTwo}>
                    <TextInput
                      style={styles.input50}
                      textColor="#063C2D"
                      activeUnderlineColor="#063C2D"
                      label="# identificacion"
                      value={email}
                      keyboardType={"numeric"}
                      onChangeText={(email) => setEmail(email)}
                    />
                    <View style={styles.inputDate}>
                      <Text>{date.toDateString()}</Text>
                      <Button
                        textColor="#063C2D"
                        icon={"calendar"}
                        onPress={showDatepicker}
                      ></Button>
                    </View>
                  </View>
                  <TextInput
                    style={styles.inputGroup}
                    textColor="#063C2D"
                    activeUnderlineColor="#063C2D"
                    label="Contraseña"
                    value={password}
                    secureTextEntry={true}
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
                    <Text style={styles.text}>Continuar</Text>
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
                    Ya tengo cuenta.
                  </Text>
                  <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text
                      style={{
                        color: "#063C2D",
                      }}
                      variant="bodyLarge"
                    >
                      Iniciar sesion
                    </Text>
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
  },
  formTitle: {
    color: "#063C2D",
    alignSelf: "center",
    fontWeight: "700",
  },
  inputDate: {
    marginTop: 15,
    flexDirection: "row",
    backgroundColor: "#F7F5F8",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingStart: 15,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    width: "49%",
  },
  inputGroup: {
    marginTop: 15,
    backgroundColor: "#F7F5F8",
  },
  input50: {
    marginTop: 15,
    backgroundColor: "#F7F5F8",
    width: "49%",
  },
  inputGroupTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
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
