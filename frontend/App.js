import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro";
import HomeScreen from "./src/screens/HomeScreen";
import Perfil from "./src/screens/Perfil";
import Estatisticas from "./src/screens/Estatisticas";
import Configuracoes from "./src/screens/Configuracoes";
import Tarefa from "./src/screens/Tarefa";
import Finalizacao from "./src/screens/Finalizacao";
import AlterarDados from "./src/screens/AlterarDados";
import Teoria from "./src/screens/Teoria";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Estatisticas" component={Estatisticas} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
        <Stack.Screen name="Tarefa" component={Tarefa} />
        <Stack.Screen name="AlterarDados" component={AlterarDados} />
        <Stack.Screen name="Teoria" component={Teoria} />

        <Stack.Screen
          name="Finalizacao"
          component={Finalizacao}
          options={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
            animation: "slide_from_left",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}