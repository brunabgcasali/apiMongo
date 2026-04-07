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

import styles from "../styles/alterarDadosStyles";

export default function AlterarDados() {
  const navigation = useNavigation();
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        {/* 🔙 SETA */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/voltar.png")}
            style={styles.voltar}
          />
        </TouchableOpacity>

      </View>

      {/* 👤 ÍCONE PERFIL */}
      <View style={styles.perfilContainer}>
        <Image
          source={require("../../assets/iconePerfil.png")}
          style={styles.iconePerfil}
        />
      </View>

      {/* FORM */}
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
            placeholder="Nova senha..."
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
            placeholder="Digite novamente..."
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

        <Text style={styles.helper}>
          A senha deve ter no mínimo 8 caracteres
        </Text>

        {/* BOTÃO */}
        <View style={styles.botaoWrapper}>
          <Pressable
            style={styles.containerBotao}
            onPress={() => navigation.goBack()}
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
                  <Text style={styles.botaoTexto}>SALVAR</Text>
                </View>

              </View>
            )}
          </Pressable>
        </View>

      </View>
    </View>
  );
}