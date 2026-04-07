import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/finalizacaoStyles";

export default function Finalizacao() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={require("../../assets/barraDivisaoLonga.png")}
          style={styles.divisorTopo}
        />

        <Text style={styles.parabens}>PARABÉNS</Text>

        <Text style={styles.titulo}>Tarefa Concluída</Text>

        <Text style={styles.voceRecebeu}>Você recebeu</Text>

        <View style={styles.divisorBranco} />

        <View style={styles.metricas}>

          <View style={styles.item}>
            <Text style={styles.label}>XP</Text>
            <Image
              source={require("../../assets/iconeXPFinalizacao.png")}
              style={styles.icone}
            />
            <Text style={styles.valor}>+50</Text>

          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Tempo</Text>
            <Image
              source={require("../../assets/iconeTempo.png")}
              style={styles.icone}
            />
            <Text style={styles.valor}>1m 20s</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Acertos</Text>
            <Image
              source={require("../../assets/iconeAcertos.png")}
              style={styles.icone}
            />
            <Text style={styles.valor}>4/5</Text>

          </View>

        </View>

      </View>

      <Image
        source={require("../../assets/Gatinho.png")}
        style={styles.gatinho}
      />

      <View style={styles.botaoWrapper}>

        <View style={styles.sombraBotao} />

        <Pressable
          onPress={() => navigation.navigate("HomeScreen")}
          style={({ pressed }) => [
            styles.botao,
            pressed && styles.botaoPressionado
          ]}
        >
          <Text style={styles.textoBotao}>VOLTAR</Text>
        </Pressable>

      </View>

    </View>
  );
}