import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9"
    },

    header: {
        height: 100,
        backgroundColor: "#E9E9E9",
        justifyContent: "center",
    },

    voltar: {
        width: 30,
        height: 30,
        position: "absolute",
        left: 20,
        resizeMode: "contain"
    },

    tituloHeader: {
        position: "absolute",
        right: 20,
        color: "#B08ABD",
        fontSize: 35,
        fontFamily: "Poppins_700Bold",
        marginTop: 25,
        fontWeight: "bold"
    },

    gatinho: {
        width: 80,
        height: 80,
        marginLeft: 80,
        marginTop: -30,
        resizeMode: "contain"
    },

    formBox: {
        width: "85%",
        alignSelf: "center",
        marginTop: 10,
        flex: 1
    },

    titulo: {
        color: "#B16DCA",
        fontSize: 22,
        marginBottom: 15,
        fontFamily: "Poppins_700Bold"
    },

    input: {
        width: "100%",
        backgroundColor: "#CACACA",
        borderRadius: 10,
        padding: 12,
        fontFamily: "Poppins_400Regular",
        color: "#FFFFFF"

    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#CACACA",
        borderRadius: 10,
        paddingHorizontal: 12
    },

    inputSenha: {
        flex: 1,
        paddingVertical: 12,
        fontFamily: "Poppins_400Regular",
        color: "#FFFFFF"

    },

    eyeIcon: {
        width: 22,
        height: 22,
        resizeMode: "contain"
    },

    helper: {
        fontSize: 12,
        color: "#B16DCA",
        marginTop: 10,
        fontFamily: "Poppins_400Regular"
    },


    botaoWrapper: {
        width: "100%",
        marginTop: "auto",
        marginBottom: 50
    },

    containerBotao: {
        width: "100%",
        paddingBottom: 6
    },

    sombra: {
        position: "absolute",
        bottom: -6,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: "#0D1243",
        borderRadius: 20
    },

    sombraPressionada: {
        height: 0
    },

    botao: {
        width: "100%",
        height: 55,
        backgroundColor: "#584083",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    botaoPressionado: {
        transform: [
            { translateY: 5 },
            { scale: 0.98 }
        ]
    },

    botaoTexto: {
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: "Poppins_700Bold",
        textTransform: "uppercase",
        textAlign: "center"
    },

    label: {
        color: "#B16DCA",
        marginTop: 30,
        marginBottom: 5,
        fontFamily: "Poppins_600SemiBold"
    }

});

export default styles;