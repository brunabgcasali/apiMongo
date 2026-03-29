import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/configuracoesStyles";

export default function Configuracoes() {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>

      {/* 🔹 HEADER */}
      <View style={styles.header}>

        <Image
          source={require("../../assets/iconePerfil.png")}
          style={styles.iconePerfil}
        />

        <View style={styles.headerRight}>

          <View style={styles.infoItem}>
            <Image source={require("../../assets/iconeGato.png")} style={styles.iconeHeader} />
            <Text style={styles.infoTexto}>10</Text>
          </View>

          <View style={styles.infoItem}>
            <Image source={require("../../assets/iconePatinha.png")} style={styles.iconeHeader} />
            <Text style={styles.infoTexto}>5</Text>
          </View>

          <View style={styles.infoItem}>
            <Image source={require("../../assets/iconeXp.png")} style={styles.iconeHeader} />
            <Text style={styles.infoTexto}>120</Text>
          </View>

        </View>

      </View>

      {/* 🔥 CONTEÚDO */}
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          transform: [{ translateY }],
          padding: 20,
        }}
      >

        {/* 🔹 TEMA ESCURO */}
        <TouchableOpacity
          style={styles.item}
          activeOpacity={0.8}
          onPress={() => setTemaEscuro(!temaEscuro)}
        >
          <Text style={styles.titulo}>Tema Escuro</Text>
          <Text style={styles.valor}>
          </Text>
        </TouchableOpacity>

        {/* 🔹 SOBRE NÓS */}
        <TouchableOpacity
          style={styles.item}
          activeOpacity={0.8}
          onPress={() => console.log("Abrir Sobre Nós")}
        >
          <Text style={styles.titulo}>Sobre nós</Text>
        </TouchableOpacity>

      </Animated.View>

      {/* 🔹 BOTÃO SAIR FIXO */}
      <TouchableOpacity style={styles.botaoSair}>
        <Text style={styles.textoSair}>Sair</Text>
      </TouchableOpacity>

      {/* 🔹 NAVBAR */}
      <View style={styles.navbar}>

        <Image
          source={require("../../assets/barraDivisaoLonga.png")}
          style={styles.divisorLongo}
        />

        <View style={styles.navIcons}>

          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("HomeScreen")}>
            <Image source={require("../../assets/iconeHome.png")} style={styles.navIcon} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Perfil")}>
            <Image source={require("../../assets/iconeGatinho.png")} style={styles.navIcon} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Estatisticas")}>
            <Image source={require("../../assets/iconeEstatistica.png")} style={styles.navIcon} />
          </TouchableOpacity>

          <Image
            source={require("../../assets/iconeConfiguracoesAtivo.png")}
            style={styles.navIcon}
          />

        </View>

      </View>

    </View>
  );
}