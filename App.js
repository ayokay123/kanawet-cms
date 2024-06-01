import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login/Login";
import Dashboard from "./screens/Dashboard/Dashboard";
import Tabs from "./screens/Tabs/Tabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          contentStyle: styles.screen,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="MyTabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#121A21",
    color: "#FFFFFF",
  },
  screen: {
    backgroundColor: "#121A21",
    color: "#FFFFFF",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
