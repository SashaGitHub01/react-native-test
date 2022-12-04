import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Data from "./src/screens/Data";
import { Tab } from "./src/screens";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Data") {
                iconName = focused
                  ? "information-circle"
                  : "information-circle-outline";
              }

              // You can return any component that you like here!
              return (
                <Ionicons name={iconName as string} size={25} color={"color"} />
              );
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Tab.Screen
            name="Data"
            component={Data}
            options={{ title: "Page", headerShown: false, tabBarBadge: 3 }}
            initialParams={{ userId: "55" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  );
}
