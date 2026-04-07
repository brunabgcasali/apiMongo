import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    padding: 20,
    justifyContent: "space-between",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  headerDireita: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  paginacao: {
    color: "#000",
  },

  fechar: {
    color: "#C50F09",
    fontSize: 20,
    fontWeight: "bold",
  },

  divisor: {
    height: 4,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 30,
  },

  card: {
    backgroundColor: "#A461BA",
    borderRadius: 20,
    padding: 20,
    minHeight: 600,
    justifyContent: "center",
  },

  texto: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  /* BOTÃO ESTILO DUOLINGO (CORRIGIDO) */
  containerBotao: {
    width: 60,
    height: 66, // 🔥 60 + 6 da sombra = encaixe perfeito
  },

  sombra: {
    position: "absolute",
    bottom: 0, // 🔥 agora fica dentro do container
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#541768",
    borderRadius: 30,
  },

  sombraPressionada: {
    height: 0,
  },

  botaoSeta: {
    width: "100%",
    height: 60, // 🔥 mesma altura da sombra
    backgroundColor: "#A461BA",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoPressionado: {
    transform: [{ translateY: 6 }], // 🔥 desce exatamente até a sombra
  },

  seta: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  mascote: {
    width: 125,
    height: 125,
    resizeMode: "contain",
    bottom: 80,
  },

  espaco: {
    width: 60,
  },
});