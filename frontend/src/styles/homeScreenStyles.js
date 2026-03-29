import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#D9D9D9"
  },

  header: {
    height: 100,
    backgroundColor: "#E9E9E9",
    justifyContent: "center"
  },

  iconePerfil: {
    width: 80,
    height: 80,
    position: "absolute",
    left: 35,
    top: 35,
    resizeMode: "contain"
  },

  headerRight: {
    position: "absolute",
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 25
  },

  infoItem: {
    flexDirection: "row",
    top: 10,
    alignItems: "center"
  },

  iconeHeader: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 4
  },

  infoTexto: {
    fontFamily: "Poppins_700Bold",
    color: "#584083"
  },

  scroll: {
    paddingBottom: 250
  },

  divisorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
  },

  barra: {
    width: "25%",
    height: 10,
    resizeMode: "contain"
  },

  tituloTopico: {
    fontFamily: "Poppins_700Bold",
    color: "#ffff",
    fontWeight: "bold",
    margin: 15,
    fontSize: 20
  },

  iconeLivro: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 20,
    resizeMode: "contain"
  },

  tarefasContainer: {
    top: 50,
    width: "100%",
    paddingHorizontal: 120,
    gap: 45
  },

  patinhaContainer: {
    width: 70,
    height: 70,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  patinha: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    zIndex: 2,
  },

  sombraPatinha: {
    position: "absolute",
    width: 80,
    height: 80,
    resizeMode: "contain",
    top: 1,
    left: -5,
    zIndex: 1,
  },

  patinhaPressionada: {
    transform: [{ translateY: 6 }],
  },

  botaoFlutuante: {
    position: "absolute",
    bottom: 150,
    right: 30,
    padding: 0,
  },

  iconeSeta: {
    width: 50,
    height: 50,
    resizeMode: "contain"
  },

  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#E9E9E9",
    paddingBottom: 20,
    alignItems: "center"
  },

  divisorLongo: {
    width: "90%",
    height: 50,
    resizeMode: "contain"
  },

  navIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 5
  },

  navIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    bottom: 10
  },

  sombraPadrao: {
    position: "absolute",
    width: 60,
    height: 60,
    resizeMode: "contain",
    top: 6,
    left: 0,
    zIndex: 1,
  },

  imagemPadrao: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    zIndex: 2,
  },

  pressionadoPadrao: {
    transform: [{ translateY: 6 }],
  },

});

export default styles;