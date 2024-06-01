import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressLogin = () => {
    console.log("pressed login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to your account</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={"#94ADC7"}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor={"#94ADC7"}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MyTabs")}>
        <Text style={styles.linkText}>Are a new user? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    alignItems: "center",
    gap: 10,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#243647",
    color: "#FFF",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    height: 56,
    width: "90%",
  },
  button: {
    backgroundColor: "#146BC2", // Light blue background color for the button
    padding: 10,
    margin: 10,
    borderRadius: 10,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonText: {
    color: "#FFFFFF", // White text color for the button text
    fontSize: 16,
    fontWeight: "bold",
  },

  linkText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
};

export default Login;
