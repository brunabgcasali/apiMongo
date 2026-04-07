import React, { useState } from "react";
import { View, Text, Image, Pressable, Animated } from "react-native";
import styles from "../styles/teoriaStyles";

export default function Teoria({ navigation }: any) {
  const totalPaginas = 10;
  const [paginaAtual, setPaginaAtual] = useState(1);
  const animacao = useState(new Animated.Value(0))[0];
  const [pressEsq, setPressEsq] = useState(false);
  const [pressDir, setPressDir] = useState(false);

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      animarTroca("dir");
      setTimeout(() => {
        setPaginaAtual(paginaAtual + 1);
      }, 200);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      animarTroca("esq");
      setTimeout(() => {
        setPaginaAtual(paginaAtual - 1);
      }, 200);
    }
  };

  const animarTroca = (direcao: "esq" | "dir") => {
    const valorSaida = direcao === "dir" ? -300 : 300;
    const valorEntrada = direcao === "dir" ? 300 : -300;

    Animated.sequence([
      Animated.timing(animacao, {
        toValue: valorSaida,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animacao, {
        toValue: valorEntrada,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(animacao, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View>
        <View style={styles.header}>
          <Text style={styles.titulo}>Tópico 1 - Título</Text>

          <View style={styles.headerDireita}>
            <Text style={styles.paginacao}>
              {paginaAtual}/{totalPaginas}
            </Text>

            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.fechar}>✕</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.divisor} />
      </View>

      {/* CONTEÚDO */}
      <Animated.View
        style={[
          styles.card,
          { transform: [{ translateX: animacao }] }
        ]}
      >
        <Text style={styles.texto}>
          Conteúdo da página {paginaAtual}
        </Text>
      </Animated.View>

      {/* FOOTER */}
      <View style={styles.footer}>

        {/* ESQUERDA */}
        {paginaAtual > 1 ? (
          <View style={styles.containerBotao}>

            <View
              style={[
                styles.sombra,
                pressEsq && styles.sombraPressionada
              ]}
            />

            <Pressable
              onPress={paginaAnterior}
              onPressIn={() => setPressEsq(true)}
              onPressOut={() => setPressEsq(false)}
              style={[
                styles.botaoSeta,
                pressEsq && styles.botaoPressionado
              ]}
            >
              <Image
                source={require("../../assets/seta.png")}
                style={[styles.seta, { transform: [{ rotate: "90deg" }] }]}
              />
            </Pressable>

          </View>
        ) : (
          <View style={styles.espaco} />
        )}

        {/* MASCOTE */}
        <Image
          source={require("../../assets/Gatinho.png")}
          style={styles.mascote}
        />

        {/* DIREITA */}
        {paginaAtual < totalPaginas ? (
          <View style={styles.containerBotao}>

            <View
              style={[
                styles.sombra,
                pressDir && styles.sombraPressionada
              ]}
            />

            <Pressable
              onPress={proximaPagina}
              onPressIn={() => setPressDir(true)}
              onPressOut={() => setPressDir(false)}
              style={[
                styles.botaoSeta,
                pressDir && styles.botaoPressionado
              ]}
            >
              <Image
                source={require("../../assets/seta.png")}
                style={[styles.seta, { transform: [{ rotate: "270deg" }] }]}
              />
            </Pressable>

          </View>
        ) : (
          <View style={styles.espaco} />
        )}

      </View>

    </View>
  );
}