import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },

  /* HEADER */
  header: {
    height: 100,
    backgroundColor: "#E9E9E9",
    justifyContent: "center",
  },

  iconePerfil: {
    width: 80,
    height: 80,
    position: "absolute",
    left: 35,
    top: 35,
    resizeMode: "contain",
  },

  headerRight: {
    position: "absolute",
    right: 20,
    flexDirection: "row",
    gap: 25,
    bottom: 25
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconeHeader: {
    width: 30,
    height: 30,
    marginRight: 5,
    resizeMode: "contain"
  },

  infoTexto: {
    fontFamily: "Poppins_700Bold",
    color: "#584083",
  },

  /* CONTEÚDO */
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },

  titulo: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#333",
    
  },

  /* BOTÃO SAIR */
  botaoSair: {
  position: "absolute",
  bottom: 140, // fica acima da navbar
  left: 20,
  right: 20,

  backgroundColor: "#A461BA",
  padding: 15,
  borderRadius: 15,
  alignItems: "center",
},

  textoSair: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  /* NAVBAR */
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#E9E9E9",
    paddingBottom: 20,
    alignItems: "center",
  },

  divisorLongo: {
    width: "90%",
    height: 50,
    resizeMode: "contain",
  },

  navIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  navIcon: {
    width: 50,
    height: 50,
    bottom: 10,
    resizeMode: "contain"
  },
});