import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/homeScreenStyles";

function BotaoComSombra({
  imagem,
  sombra,
  style,
  tamanho = 60,
  onPress,
}: {
  imagem: any;
  sombra: any;
  style?: any;
  tamanho?: number;
  onPress?: () => void;
}) {
  const [pressionado, setPressionado] = useState(false);

  return (
    <TouchableOpacity
      style={style}
      activeOpacity={1}
      onPressIn={() => setPressionado(true)}
      onPressOut={() => setPressionado(false)}
      onPress={onPress}
    >
      {/* Sombra */}
      {!pressionado && (
        <Image
          source={sombra}
          style={{
            position: "absolute",
            width: tamanho,
            height: tamanho,
            resizeMode: "contain",
            top: 6,
          }}
        />
      )}

      {/* Imagem */}
      <Image
        source={imagem}
        style={{
          width: tamanho,
          height: tamanho,
          resizeMode: "contain",
          transform: pressionado ? [{ translateY: 6 }] : [],
        }}
      />
    </TouchableOpacity>
  );
}

/* 🔹 Componente da Patinha */
function PatinhaItem({ esquerda }: { esquerda: boolean }) {
  const [pressionado, setPressionado] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.patinhaContainer,
        { alignSelf: esquerda ? "flex-start" : "flex-end" },
      ]}
      activeOpacity={1}
      onPressIn={() => setPressionado(true)}
      onPressOut={() => setPressionado(false)}
    >
      {!pressionado && (
        <Image
          source={require("../../assets/sombraPatinha.png")}
          style={styles.sombraPatinha}
        />
      )}

      <Image
        source={require("../../assets/iconePatinhaSemSombra.png")}
        style={[
          styles.patinha,
          pressionado && styles.patinhaPressionada,
        ]}
      />
    </TouchableOpacity>
  );
}

export default function HomeScreen() {

  const patinhas = [1, 2, 3, 4, 5, 6];
  const navigation = useNavigation();
  const scrollRef = useRef<ScrollView>(null);
  const indiceAlvo = 1;

  const scrollParaPatinha = () => {
    const alturaItem = 100; // ajuste conforme seu layout
    const posicao = indiceAlvo * alturaItem;

    scrollRef.current?.scrollTo({
      y: posicao,
      animated: true,
    });
  };

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

      {/* 🔹 CONTEÚDO */}
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scroll}>

        <View style={styles.divisorContainer}>
          <Image
            source={require("../../assets/barraDivisaoCurta.png")}
            style={styles.barra}
          />
          <Text style={styles.tituloTopico}>1. Introdução</Text>
          <Image
            source={require("../../assets/barraDivisaoCurta.png")}
            style={styles.barra}
          />
        </View>

        {/* 🔹 LIVRO COM SOMBRA */}
        <BotaoComSombra
          imagem={require("../../assets/iconeLivro.png")}
          sombra={require("../../assets/sombraLivro.png")}
          style={{ alignSelf: "center", marginVertical: 20 }}
          tamanho={100}
        />

        {/* 🔹 PATINHAS */}
        <View style={styles.tarefasContainer}>
          {patinhas.map((item, index) => {
            const esquerda = index % 2 === 0;

            return (
              <PatinhaItem key={index} esquerda={esquerda} />
            );
          })}
        </View>

      </ScrollView>

      {/* 🔹 SETA COM SOMBRA */}
      <BotaoComSombra
        imagem={require("../../assets/seta.png")}
        sombra={require("../../assets/sombraSeta.png")}
        style={styles.botaoFlutuante}
        onPress={scrollParaPatinha}

      />

      {/* 🔹 NAVBAR */}
      <View style={styles.navbar}>

        <Image
          source={require("../../assets/barraDivisaoLonga.png")}
          style={styles.divisorLongo}
        />

        <View style={styles.navIcons}>
          <View style={styles.navIcons}>

            <Image source={require("../../assets/iconeHomeAtivo.png")} style={styles.navIcon} />

            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <Image source={require("../../assets/iconeGatinho.png")} style={styles.navIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Estatisticas")}>
              <Image source={require("../../assets/iconeEstatistica.png")} style={styles.navIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Configuracoes")}>
              <Image source={require("../../assets/iconeConfiguracao.png")} style={styles.navIcon} />
            </TouchableOpacity>

          </View>
        </View>

      </View>

    </View>
  );
}