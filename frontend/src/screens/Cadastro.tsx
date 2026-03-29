import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/cadastroStyles";

export default function Cadastro() {
  const navigation = useNavigation();
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            source={require("../../assets/voltar.png")}
            style={styles.voltar}
          />
        </TouchableOpacity>

        <Text style={styles.tituloHeader}>CADASTRO</Text>
      </View>

      <Image
        source={require("../../assets/iconeGatinho.png")}
        style={styles.gatinho}
      />

      <View style={styles.formBox}>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Digite seu nome..."
          placeholderTextColor="#FFFFFF"
          cursorColor="#FFFFFF"
          style={styles.input}
        />

        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          placeholder="Digite seu sobrenome..."
          placeholderTextColor="#FFFFFF"
          cursorColor="#FFFFFF"
          style={styles.input}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail..."
          placeholderTextColor="#FFFFFF"
          cursorColor="#FFFFFF"
          style={styles.input}
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Crie uma senha segura..."
            placeholderTextColor="#FFFFFF"
            cursorColor="#FFFFFF"
            secureTextEntry={!senhaVisivel}
            style={styles.inputSenha}
          />
          <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
            <Image
              source={require("../../assets/iconeOlho.png")}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirmar senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite novamente sua senha..."
            placeholderTextColor="#FFFFFF"
            cursorColor="#FFFFFF" secureTextEntry={!senhaVisivel}
            style={styles.inputSenha}
          />
          <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
            <Image
              source={require("../../assets/iconeOlho.png")}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.helper}>
          A senha deve ter no mínimo 8 caracteres (símbolos, letras e números)
        </Text>

        <View style={styles.botaoWrapper}>
          <Pressable
            style={styles.containerBotao}
            onPress={() => console.log("Cadastrar pressionado")}
          >
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
                  <Text style={styles.botaoTexto}>CADASTRAR</Text>
                </View>

              </View>
            )}
          </Pressable>
        </View>

      </View>
    </View>
  );
}