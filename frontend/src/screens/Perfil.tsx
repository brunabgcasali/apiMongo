import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle } from "react-native-svg";

import styles from "../styles/perfilStyles";

function ProgressoCircular({ progresso }: { progresso: number }) {
  const size = 90;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - circumference * progresso;

  return (
    <Svg width={size} height={size}>
      <Circle
        stroke="#58186D"
        fill="transparent"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />

      <Circle
        stroke="#D9D9D9"
        fill="transparent"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        rotation="-90"
        origin={`${size / 2}, ${size / 2}`}
      />
    </Svg>
  );
}

export default function Perfil() {
  const navigation = useNavigation();

  const usuario = {
    nome: "Bruna",
    sobrenome: "Guimarães",
    email: "bruna@email.com",
    dataInicio: "01/01/2025",
    nivel: 5,
    xpAtual: 120,
    xpNecessario: 200,
  };

  const progresso = usuario.xpAtual / usuario.xpNecessario;

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.botaoEditar}>
          <Text style={styles.textoEditar}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perfilContainer}>

        <Image
          source={require("../../assets/iconePerfil.png")}
          style={styles.iconePerfil}
        />

        <Text style={styles.nome}>
          {usuario.nome} {usuario.sobrenome}
        </Text>

        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.info}>
          {usuario.email}</Text>

        <Text style={styles.label}>Data de Início</Text>
        <Text style={styles.info}>
          Início: {usuario.dataInicio}
        </Text>

      </View>

      <View style={styles.cardXp}>

        <View style={styles.circuloWrapper}>

          <ProgressoCircular progresso={progresso} />

          <Image
            source={require("../../assets/iconeTrofeu.png")}
            style={styles.iconeTrofeu}
          />

          <View style={styles.nivelSobreposto}>
            <Text style={styles.nivelTexto}>
              {usuario.nivel}
            </Text>
          </View>

        </View>

        <View style={styles.infoXp}>
          <Text style={styles.tituloXp}>Nível de XP</Text>
          <Text style={styles.valorXp}>
            {usuario.xpAtual}/{usuario.xpNecessario}
          </Text>
        </View>

      </View>

      <View style={styles.navbar}>

        <Image
          source={require("../../assets/barraDivisaoLonga.png")}
          style={styles.divisorLongo}
        />

        <View style={styles.navIcons}>

          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Image
              source={require("../../assets/iconeHome.png")}
              style={styles.navIcon}
            />
          </TouchableOpacity>

          <Image
            source={require("../../assets/iconePerfilAtivo.png")}
            style={styles.navIcon}
          />

          <TouchableOpacity onPress={() => navigation.navigate("Estatisticas")}>
            <Image
              source={require("../../assets/iconeEstatistica.png")}
              style={styles.navIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Configuracoes")}>
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