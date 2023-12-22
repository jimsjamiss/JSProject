const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IPhone1415Pro5 from "./screens/IPhone1415Pro5";
import Image1 from "./components/Image1";
import IPhone1415Pro3 from "./screens/IPhone1415Pro3";
import IPhone1415Pro4 from "./screens/IPhone1415Pro4";
import IPhone1415Pro2 from "./screens/IPhone1415Pro2";
import IPhone1415Pro1 from "./screens/IPhone1415Pro1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone1415Pro5"
              component={IPhone1415Pro5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415Pro3"
              component={IPhone1415Pro3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415Pro4"
              component={IPhone1415Pro4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415Pro2"
              component={IPhone1415Pro2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1415Pro1"
              component={IPhone1415Pro1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
