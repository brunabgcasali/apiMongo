import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/estatisticaStyles";

/* 🔹 CARD COM TOOLTIP ANIMADO */
function CardEstatistica({ titulo, valor, descricao }: any) {
  const [mostrar, setMostrar] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;
  const timeoutRef = useRef<any>(null);

  const abrirTooltip = () => {
    setMostrar(true);

    // reset animação
    fadeAnim.setValue(0);
    translateY.setValue(10);

    // anima entrada
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    // limpa timer anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // saída após 3s
    timeoutRef.current = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setMostrar(false);
      });
    }, 3000);
  };

  return (
    <View style={styles.card}>

      {/* 🔹 BOTÃO ? */}
      <TouchableOpacity
        style={styles.infoIcon}
        activeOpacity={1}
        onPress={abrirTooltip}
      >
        <Text style={styles.infoIconTexto}>?</Text>
      </TouchableOpacity>

      {/* 🔥 TOOLTIP ANIMADO */}
      {mostrar && (
        <Animated.View
          style={[
            styles.tooltip,
            {
              opacity: fadeAnim,
              transform: [{ translateY }],
            },
          ]}
        >
          <Text style={styles.tooltipTexto}>{descricao}</Text>
        </Animated.View>
      )}

      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardValor}>{valor}</Text>

    </View>
  );
}

export default function Estatistica() {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

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
        }}
      >

        <View style={styles.grid}>

          {/* ESQUERDA */}
          <View style={styles.coluna}>
            <CardEstatistica
              titulo="Média de Acertos"
              valor="80%"
              descricao="Porcentagem média de acertos nas tarefas."
            />
            <CardEstatistica
              titulo="Tempo Médio"
              valor="30s"
              descricao="Tempo médio gasto por tarefa."
            />
            <CardEstatistica
              titulo="Concluídas"
              valor="12"
              descricao="Total de tarefas concluídas."
            />
          </View>

          {/* DIREITA */}
          <View style={styles.coluna}>
            <CardEstatistica
              titulo="Abandonos"
              valor="3"
              descricao="Tarefas iniciadas mas não finalizadas."
            />
            <CardEstatistica
              titulo="Total de Acertos"
              valor="45"
              descricao="Quantidade total de respostas corretas."
            />
            <CardEstatistica
              titulo="Erros"
              valor="10"
              descricao="Quantidade total de respostas incorretas."
            />
          </View>

        </View>

      </Animated.View>

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

          <Image
            source={require("../../assets/iconeEstatisticaAtivo.png")}
            style={styles.navIcon}
          />

          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Configuracoes")}>
            <Image source={require("../../assets/iconeConfiguracao.png")} style={styles.navIcon} />
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}