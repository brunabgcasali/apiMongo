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
    paddingRight: 25,
    paddingLeft: 25,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",

  },

  divisor: {
    width: "80%",
    height: 30,
    resizeMode: "contain",
  },

  questaoContainer: {
        paddingRight: 25,
    paddingLeft: 25,
    marginTop: 20,
  },

  questaoBox: {
    
    backgroundColor: "#A461BA",
    width: "95%",
    height: 250,
    borderRadius: 20,
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
        paddingRight: 25,
    paddingLeft: 25,
    marginTop: 40,
    gap: 15,
  },

  alternativa: {
    backgroundColor: "#EDEDED",
    padding: 15,
    borderRadius: 20,
    color: "#BCBCBC"
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

  botaoConfirmar: {
    marginTop: "auto",
    alignItems: "center",
    
  },

  sombraConfirmar: {
    position: "absolute",
    backgroundColor: "#049656",
    width: "100%",
    height: 50,
    borderRadius: 15,
    top: 6,
  },

  textoConfirmar: {
    backgroundColor: "#00C871",
    color: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 15,
    fontWeight: "bold",
  },

  alternativaWrapper: {
    position: "relative",
  },

  sombraAlternativa: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#BDBDBD",
    borderRadius: 15,
    top: 6,
  },

  alternativa: {
    backgroundColor: "#EDEDED",
    padding: 15,
    borderRadius: 15,
    zIndex: 2,
  },

  pressionado: {
    transform: [{ translateY: 6 }],
  },

  confirmarWrapper: {
    marginTop: "auto",
    position: "relative",
  },

  botaoConfirmar: {
    
    backgroundColor: "#00C871",
    paddingVertical: 15,
    borderRadius: 15,
    bottom: 20,
    alignItems: "center",
    zIndex: 2,
  },

  sombraConfirmar: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#049656",
    borderRadius: 15,
    top: -10,
  },

  textoConfirmar: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",

  },

  pressionado: {
    transform: [{ translateY: 6 }],
  },

  alternativaTextoSelecionada: {
    color: "#A461BA",
  },

  sombraAlternativaSelecionada: {
    backgroundColor: "#A461BA",
  },

});