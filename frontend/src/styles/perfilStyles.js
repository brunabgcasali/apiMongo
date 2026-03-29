import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },

  header: {
    height: 200,
    backgroundColor: "#E9E9E9",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    zIndex: 0,
  },

  botaoEditar: {
    backgroundColor: "#A461BA",
    top: -40,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },

  textoEditar: {
    color: "#fff",
    fontWeight: "bold",
  },

  perfilContainer: {
    alignItems: "center",
    marginTop: -70,
  },

  iconePerfil: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
    zIndex: 1,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },

  info: {
    fontSize: 14,
    color: "#555",
    alignSelf: "flex-start",
    marginLeft: 40,
  },

  cardXp: {
    backgroundColor: "#A461BA",
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  circuloWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  iconeTrofeu: {
    position: "absolute",
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  nivelSobreposto: {
    position: "absolute",
    right: -10,
    top: "60%",
    backgroundColor: "#58186d00",
    paddingHorizontal: 10,
    paddingVertical: 0,
  },

  nivelTexto: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "900",
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 2,
  },

  infoXp: {
    marginLeft: 20,
  },

  tituloXp: {
    color: "#fff",
    fontSize: 20,
  },

  valorXp: {
    color: "#fff",
    marginTop: 5,
    fontSize: 25
  },

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
    marginTop: 5,
  },

  navIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    bottom: 10,
  },

  label: {
    fontSize: 14,
    alignSelf: "flex-start",
    marginLeft: 40,
    color: "#B16DCA",
    marginTop: 30,
    marginBottom: 5,
    fontFamily: "Poppins_600SemiBold",
  },
});