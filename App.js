import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupList from "./components/GroupList";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Button,
} from "react-native";
import GroupHome from "./components/GroupHome";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GroupList" component={GroupList} />
        <Stack.Screen name="GroupHome" component={GroupHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
