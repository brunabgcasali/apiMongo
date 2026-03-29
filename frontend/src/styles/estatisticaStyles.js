import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },

  /* 🔹 HEADER */
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
    alignItems: "center",
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
    resizeMode: "contain",
    marginRight: 4,
  },

  infoTexto: {
    fontFamily: "Poppins_700Bold",
    color: "#584083",
  },

  /* 🔹 GRID */
  grid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    paddingHorizontal: 20,
  },

  coluna: {
    gap: 20,
  },

  /* 🔹 CARD */
  card: {
    width: 170,
    height: 170,
    backgroundColor: "#A461BA",
    borderRadius: 30,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  cardTitulo: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "Poppins_600SemiBold",
  },

  cardValor: {
    color: "#fff",
    fontSize: 40,
        fontWeight: "bold",

    fontFamily: "Poppins_900ExtraBold",
  },

  infoIcon: {
    position: "absolute",
    margin: 10,
    top: 5,
    right: 8,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#7A4A8A",
    justifyContent: "center",
    alignItems: "center",
  },

  infoIconTexto: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#F0DBF7",
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

  infoIcon: {
  position: "absolute",
  top: 5,
  right: 5,
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2, // 🔥 garante que fica clicável
  margin: 10
},

infoIconTexto: {
  fontSize: 12,
  fontWeight: "bold",
  color: "#A461BA",
},

tooltip: {
  position: "absolute",
  top: -60, // 🔥 posiciona acima do card
  width: 130,
  backgroundColor: "#fff",
  padding: 6,
  borderRadius: 10,
  elevation: 5, // 🔥 sombra (Android)
  zIndex: 3, // 🔥 fica acima de tudo
},

tooltipTexto: {
  fontSize: 11,
  textAlign: "center",
  color: "#333",
},
});