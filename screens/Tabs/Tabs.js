import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Products/Products";
import Orders from "../Orders/Orders";
import Sales from "../Sales/Sales";
import Account from "../Account/Account";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = "home";
          } else if (route.name === "Products") {
            iconName = "search1";
          } else if (route.name === "Orders") {
            iconName = "shoppingcart";
          } else if (route.name === "Sales") {
            iconName = "linechart";
          } else if (route.name === "Account") {
            iconName = "user";
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#94ADC7",
        tabBarStyle: {
          backgroundColor: "#1A2633",
        },
        headerStyle: {
          backgroundColor: "#121A21",
        },
        headerTintColor: "#fff",
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Sales" component={Sales} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default Tabs;
