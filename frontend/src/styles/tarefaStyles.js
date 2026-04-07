import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    padding: 20,
  },

  topo: {
    top: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  bolinhasContainer: {
    top: 25,
    flexDirection: "row",
    gap: 17,
    justifyContent: "center",
    flex: 1,
  },

  bolinha: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
  },

  bolinhaCerta: {
    backgroundColor: "#00C871",
  },

  bolinhaErrada: {
    backgroundColor: "#FF4C4C",
  },

  botaoSair: {
    top: 5,
    position: "absolute",
    right: 0,
    color: "#FF4C4C",
    fontSize: 28,
    fontWeight: "bold",
  },

  titulo: {
    marginTop: 60,
    paddingHorizontal: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  divisor: {
    alignSelf: "center",
    width: "85%",
    height: 30,
    resizeMode: "contain",
  },

  questaoContainer: {
    paddingHorizontal: 25,
    marginTop: 20,
  },

  questaoBox: {
    backgroundColor: "#A461BA",
    width: "95%",
    height: 250,
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  questaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },

  gatinho: {
    width: 100,
    height: 100,
    position: "absolute",
    right: -10,
    bottom: -20,
    resizeMode: "contain",
  },

  alternativasContainer: {
    paddingHorizontal: 25,
    marginTop: 40,
    gap: 15,
  },

  alternativaWrapper: {
    position: "relative",
  },

  sombraAlternativa: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#BDBDBD",
    borderRadius: 25,
    top: 6,
  },

  sombraAlternativaSelecionada: {
    backgroundColor: "#A461BA",
  },

  alternativa: {
    backgroundColor: "#EDEDED",
    padding: 15,
    borderRadius: 20,
    zIndex: 2,
  },

  alternativaSelecionada: {
    borderWidth: 2,
    borderColor: "#A461BA",
  },

  alternativaTexto: {
    color: "#787878",
    textAlign: "center",
    fontSize: 17,
  },

  alternativaTextoSelecionada: {
    color: "#A461BA",
  },

  confirmarWrapper: {
    marginTop: "auto",
    paddingHorizontal: 25,
    marginBottom: 20,
    position: "relative",
  },

  sombraConfirmar: {
    position: "absolute",
    width: "100%",
    height: "100%",
    right: 25,
    backgroundColor: "#049656",
    borderRadius: 15,
    top: 6,
  },

  botaoConfirmar: {
    backgroundColor: "#00C871",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    width: "100%",
    zIndex: 2,
  },

  textoConfirmar: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

botaoPressionado: {
  transform: [{ translateY: 6 }],
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
  backgroundColor: "#049656",
  borderRadius: 15,
  top: 6, // profundidade da sombra
},

botao: {
  backgroundColor: "#00C871",
  paddingVertical: 15,
  borderRadius: 15,
  alignItems: "center",
},

botaoPressionado: {
  transform: [{ translateY: 6 }], // desce exatamente até a sombra
},

});