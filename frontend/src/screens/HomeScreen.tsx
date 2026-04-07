import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/homeScreenStyles";

/* 🔹 BOTÃO COM SOMBRA */
function BotaoComSombra({
  imagem,
  sombra,
  style,
  tamanho = 60,
  onPress,
}: any) {
  const [pressionado, setPressionado] = useState(false);

  return (
    <TouchableOpacity
      style={style}
      activeOpacity={1}
      onPressIn={() => setPressionado(true)}
      onPressOut={() => setPressionado(false)}
      onPress={onPress}
    >
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

/* 🔹 MODAL BLOQUEIO */
function ModalBloqueio({ visivel, fechar }: any) {
  if (!visivel) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.modalTitulo}>Conteúdo bloqueado</Text>

        <Text style={styles.modalTexto}>
          Complete as tarefas anteriores para desbloquear.
        </Text>

        <TouchableOpacity style={styles.modalBotao} onPress={fechar}>
          <Text style={styles.modalBotaoTexto}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function PatinhaItem({
  esquerda,
  bloqueada,
  tarefa,
  navigation,
  mostrarBloqueio,
}: any) {
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
      onPress={() => {
        if (bloqueada) {
          mostrarBloqueio();
        } else {
          navigation.navigate("Teoria", {
            tarefaId: tarefa.tarefaId,
            titulo: tarefa.titulo,
          });
        }
      }}
    >
      {/* 🔹 SOMBRA */}
      {!pressionado && (
        <Image
          source={require("../../assets/sombraPatinha.png")}
          style={[
            styles.sombraPatinha,

            // ✅ sombra cinza suave
            bloqueada && {
              tintColor: "#222222",
              opacity: 0.4,
            },
          ]}
        />
      )}

      {/* 🔹 PATINHA */}
      <Image
        source={require("../../assets/iconePatinhaSemSombra.png")}
        style={[
          styles.patinha,

          // ✅ animação de clique
          pressionado && styles.patinhaPressionada,

          // ✅ patinha cinza mais forte
          bloqueada && {
            tintColor: "#bababa",
            opacity: 1,
          },
        ]}
      />
    </TouchableOpacity>
  );
}

/* 🔹 TELA PRINCIPAL */
export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const scrollRef = useRef<ScrollView>(null);

  const [tarefas, setTarefas] = useState<any[]>([]);
  const [modalVisivel, setModalVisivel] = useState(false);

  useEffect(() => {
    buscarTarefas();
  }, []);

  const buscarTarefas = async () => {
    try {
      const response = await fetch(
        "http://192.168.56.1:3333/jornada/progresso",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTdmOGE0ZWU1N2Y1YWFhMzdjYmFjZCIsImlhdCI6MTc3NTA1MDc1NiwiZXhwIjoxNzc1MTM3MTU2fQ.swijjCeJ67N3gDZdWZZnmtltaV0TapPYhTwSv--0ug8",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setTarefas(data.tarefas);
    } catch (error) {
      console.log("Erro ao buscar tarefas:", error);
    }
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
            <Image
              source={require("../../assets/iconeGato.png")}
              style={styles.iconeHeader}
            />
            <Text style={styles.infoTexto}>10</Text>
          </View>

          <View style={styles.infoItem}>
            <Image
              source={require("../../assets/iconePatinha.png")}
              style={styles.iconeHeader}
            />
            <Text style={styles.infoTexto}>5</Text>
          </View>

          <View style={styles.infoItem}>
            <Image
              source={require("../../assets/iconeXp.png")}
              style={styles.iconeHeader}
            />
            <Text style={styles.infoTexto}>120</Text>
          </View>
        </View>
      </View>

      {/* 🔹 CONTEÚDO */}
      <ScrollView ref={scrollRef} contentContainerStyle={styles.scroll}>
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

        {/* 🔹 BOTÃO LIVRO */}
        <BotaoComSombra
          imagem={require("../../assets/iconeLivro.png")}
          sombra={require("../../assets/sombraLivro.png")}
          style={{ alignSelf: "center", marginVertical: 20 }}
          tamanho={100}
          onPress={() => navigation.navigate("Teoria")}
        />

        {/* 🔹 PATINHAS */}
        <View style={styles.tarefasContainer}>
          {tarefas.map((tarefa, index) => {
            const bloqueada = tarefa.status === "bloqueado";

            return (
              <PatinhaItem
                key={tarefa.tarefaId}
                esquerda={index % 2 === 0}
                bloqueada={bloqueada}
                tarefa={tarefa}
                navigation={navigation}
                mostrarBloqueio={() => setModalVisivel(true)}
              />
            );
          })}
        </View>
      </ScrollView>

      {/* 🔹 MODAL */}
      <ModalBloqueio
        visivel={modalVisivel}
        fechar={() => setModalVisivel(false)}
      />

      {/* 🔹 NAVBAR */}
      <View style={styles.navbar}>
        <Image
          source={require("../../assets/barraDivisaoLonga.png")}
          style={styles.divisorLongo}
        />

        <View style={styles.navIcons}>
          <Image
            source={require("../../assets/iconeHomeAtivo.png")}
            style={styles.navIcon}
          />

          <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
            <Image
              source={require("../../assets/iconeGatinho.png")}
              style={styles.navIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Estatisticas")}
          >
            <Image
              source={require("../../assets/iconeEstatistica.png")}
              style={styles.navIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Configuracoes")}
          >
            <Image
              source={require("../../assets/iconeConfiguracao.png")}
              style={styles.navIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}