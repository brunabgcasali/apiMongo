import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
  },

  card: {
    top: 100,
    width: "85%",
    height: 600,
    backgroundColor: "#E3E3E3",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  divisorTopo: {
    width: "80%",
    height: 20,
    resizeMode: "contain",
    marginBottom: 30,
  },

  parabens: {
    color: "#00C871",
    fontWeight: "bold",
    fontSize: 48,
  },

  titulo: {
    color: "#584083",
    fontSize: 32,
    marginTop: -5,
  },

  voceRecebeu: {
    fontSize: 24,
    marginTop: 35,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  divisorBranco: {
    width: "70%",
    height: 4,
    backgroundColor: "#FFFFFF",
    marginVertical: 15,
    borderRadius: 2,
  },

  metricas: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 10,
  },

  item: {
    alignItems: "center",
    flex: 1,
    top: 5,
  },

  label: {
    color: "#9456A9",
    fontWeight: "bold",
    fontSize: 16,
  },

  valor: {
    color: "#9456A9",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 16,
    top: 20,
  },

  icone: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginTop: 10,
    top: 10,

  },

  gatinho: {
    width: 170,
    height: 170,
    resizeMode: "contain",
    position: "absolute",
    bottom: 150,
  },

  botaoWrapper: {
    position: "absolute",
    bottom: 30,
    width: "85%",
  },

  sombraBotao: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#0D1243",
    borderRadius: 15,
    top: -6,
  },

  botao: {
    bottom: 15,
    backgroundColor: "#584083",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
  },

  botaoPressionado: {
    transform: [{ translateY: 9 }],
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

});