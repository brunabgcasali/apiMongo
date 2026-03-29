import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center"
    },

    content: {
        width: "100%",
        alignItems: "center"
    },

    gatinho: {
        top: 107,
        width: 210,
        height: 210,
        resizeMode: "contain",
        marginBottom: 0,
        zIndex: 0
    },

    formBox: {
        width: "80%",
        backgroundColor: "#EBEBEB",
        borderRadius: 20,
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: "stretch",
        zIndex: 1
    },

    patinhas: {
        position: "absolute",
        top: -20,
        alignSelf: "center",
        width: 200,
        height: 60,
        resizeMode: "contain",
        zIndex: 2,
    },

    title: {
        color: "#5722E9",
        fontSize: 22,
        marginBottom: 20,
        marginTop: 20,
        textAlign: "center"
    },

    label: {
        alignSelf: "flex-start",
        color: "#A47FE5",
        marginTop: 10
    },

    input: {
        width: "100%",
        backgroundColor: "#B5B5B5",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 5,
        color: "#FFFFFF"
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#B5B5B5",
        borderRadius: 10,
        width: "100%",
        marginTop: 5,
        paddingHorizontal: 10
    },

    inputSenha: {
        flex: 1,
        padding: 10,
        color: "#FFFFFF"
    },

    eyeIcon: {
        width: 22,
        height: 22,
        resizeMode: "contain"
    },

    esqueci: {
        color: "#875AD8",
        marginTop: 10,
        alignSelf: "flex-start"
    },

    botaoWrapper: {
        width: "100%",
        marginTop: 15
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
        paddingHorizontal: 10,
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
        color: "#fff",
        fontSize: 16,
        textTransform: "uppercase",
        textAlign: "center"
    }
});

export default styles;