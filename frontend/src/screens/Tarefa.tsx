import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/tarefaStyles";

export default function Tarefa() {

  const [respostas, setRespostas] = useState<(null | "certo" | "errado")[]>([
    null, null, null, null, null
  ]);

  const [selecionado, setSelecionado] = useState<number | null>(null);
  const [pressionado, setPressionado] = useState(false);
  const [altPressionada, setAltPressionada] = useState<number | null>(null);

  const alternativas = [
    "Alternativa A",
    "Alternativa B",
    "Alternativa C",
    "Alternativa D"
  ];

  const confirmar = () => {
    if (selecionado === null) return;

    const nova = [...respostas];
    nova[0] = selecionado === 1 ? "certo" : "errado"; // exemplo
    setRespostas(nova);
  };

  return (
    <View style={styles.container}>

      {/* 🔹 TOPO */}
      <View style={styles.topo}>

        {/* 🔹 BOLINHAS */}
        <View style={styles.bolinhasContainer}>
          {respostas.map((item, index) => (
            <View
              key={index}
              style={[
                styles.bolinha,
                item === "certo" && styles.bolinhaCerta,
                item === "errado" && styles.bolinhaErrada,
              ]}
            />
          ))}
        </View>

        {/* 🔹 BOTÃO SAIR */}
        <TouchableOpacity>
          <Text style={styles.botaoSair}>✕</Text>
        </TouchableOpacity>

      </View>

      {/* 🔹 TEXTO */}
      <Text style={styles.titulo}>Selecione a opção correta:</Text>

      <Image
        source={require("../../assets/barraDivisaoLonga.png")}
        style={styles.divisor}
      />

      {/* 🔹 QUESTÃO */}
      <View style={styles.questaoContainer}>

        <View style={styles.questaoBox}>
          <Text style={styles.questaoTexto}>
            Qual o valor de uma variável?
          </Text>
        </View>

        <Image
          source={require("../../assets/Gatinho.png")}
          style={styles.gatinho}
        />

      </View>

      {/* 🔹 ALTERNATIVAS */}
      <View style={styles.alternativasContainer}>
        {alternativas.map((alt, index) => (
          <TouchableOpacity
            key={index}
            style={styles.alternativaWrapper}
            activeOpacity={1}
            onPressIn={() => setAltPressionada(index)}
            onPressOut={() => setAltPressionada(null)}
            onPress={() => setSelecionado(index)}
          >
            {altPressionada !== index && (
              <View
                style={[
                  styles.sombraAlternativa,
                  selecionado === index && styles.sombraAlternativaSelecionada
                ]}
              />
            )}
            
            <View
              style={[
                styles.alternativa,
                selecionado === index && styles.alternativaSelecionada,
                altPressionada === index && styles.pressionado,
              ]}
            >
              <Text
                style={[
                  styles.alternativaTexto,
                  selecionado === index && styles.alternativaTextoSelecionada
                ]}
              >
                {alt}
              </Text>            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.confirmarWrapper}
        activeOpacity={1}
        onPressIn={() => setPressionado(true)}
        onPressOut={() => setPressionado(false)}
        onPress={confirmar}
      >
        {/* sombra */}
        {!pressionado && <View style={styles.sombraConfirmar} />}

        {/* botão */}
        <View
          style={[
            styles.botaoConfirmar,
            pressionado && styles.pressionado,
          ]}
        >
          <Text style={styles.textoConfirmar}>Confirmar</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}