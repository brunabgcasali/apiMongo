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
        alignItems: "center",
        paddingHorizontal: 20,
        position: "relative",
        zIndex: 1,
    },

    voltar: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        position: "absolute",
        left: -180,
        top: "50%", // 👈 centraliza verticalmente
        marginTop: -15,
    },

    botaoEditar: {
        backgroundColor: "#A461BA",
        top: -40,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
    },

    textoEditar: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },

    /* PERFIL */
    perfilContainer: {
        alignItems: "center",
        marginTop: -70,
        width: "100%",
    },

    iconePerfil: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        alignSelf: "center",
        zIndex: 1,
    },

    /* FORM */
    formBox: {
        width: "85%",
        alignSelf: "center",
        marginTop: 10,
        flex: 1,
    },

    label: {
        color: "#B16DCA",
        marginTop: 25,
        marginBottom: 5,
        fontWeight: "600",
    },

    input: {
        width: "100%",
        backgroundColor: "#CACACA",
        borderRadius: 10,
        padding: 12,
        color: "#FFFFFF",
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#CACACA",
        borderRadius: 10,
        paddingHorizontal: 12,
    },

    inputSenha: {
        flex: 1,
        paddingVertical: 12,
        color: "#FFFFFF",
    },

    eyeIcon: {
        width: 22,
        height: 22,
        resizeMode: "contain",
    },

    helper: {
        fontSize: 12,
        color: "#B16DCA",
        marginTop: 10,
    },

    /* BOTÃO */
    botaoWrapper: {
        width: "100%",
        marginTop: "auto",
        marginBottom: 50,
    },

    containerBotao: {
        width: "100%",
        paddingBottom: 6,
    },

    sombra: {
        position: "absolute",
        bottom: -6,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: "#0D1243",
        borderRadius: 20,
    },

    sombraPressionada: {
        height: 0,
    },

    botao: {
        width: "100%",
        height: 55,
        backgroundColor: "#584083",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    botaoPressionado: {
        transform: [
            { translateY: 5 },
            { scale: 0.98 },
        ],
    },

    botaoTexto: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
    },

});