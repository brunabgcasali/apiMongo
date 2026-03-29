import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Pressable } from "react-native";


import styles from "../styles/loginStyles";

export default function LoginScreen({ navigation }) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.content}>

        <Image
          source={require("../../assets/gatinhoLogin.png")}
          style={styles.gatinho}
        />

        <View style={styles.formBox}>

          <Image
            source={require("../../assets/patinhasLogin.png")}
            style={styles.patinhas}
          />

          <Text style={styles.title}>LOGIN/SIGN</Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Digite seu e-mail"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            cursorColor="#FFFFFF"
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={!senhaVisivel}
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#FFFFFF"
              cursorColor="#FFFFFF"
            />

            <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
              <Image
                source={require("../../assets/iconeOlho.png")}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.esqueci}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <View style={styles.botaoWrapper}>
            <Pressable style={styles.containerBotao}>
              {({ pressed }) => (
                <View style={{ width: "100%" }}>

                  <View
                    style={[
                      styles.sombra,
                      pressed && styles.sombraPressionada
                    ]}
                  />

                  <View
                    style={[
                      styles.botao,
                      pressed && styles.botaoPressionado
                    ]}
                  >
                    <Text style={styles.botaoTexto}>Entrar</Text>
                  </View>

                </View>
              )}
            </Pressable>
          </View>

          <View style={styles.botaoWrapper}>
<Pressable onPress={() => navigation.navigate("Cadastro")}>
  {({ pressed }) => (
    <>
      <View
        style={[
          styles.sombra,
          pressed && styles.sombraPressionada
        ]}
      />

      <View
        style={[
          styles.botao,
          pressed && styles.botaoPressionado
        ]}
      >
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </View>
    </>
  )}
</Pressable>
          </View>

        </View>
      </View>

    </View>
  );
}