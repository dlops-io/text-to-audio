
const styles = theme => ({
    root: {
        flexGrow: 1,
        minHeight: "100vh"
    },
    grow: {
        flexGrow: 1,
    },
    main: {

    },
    container: {
        backgroundColor: "#ffffff",
        paddingTop: "30px",
        paddingBottom: "20px",
    },
    recordingContainer: {
        backgroundColor: "#333333",
        padding: "10px",
    },
    audioContainer: {
        textAlign: "center",
        padding: "10px",
    },
    buttonsContainer: {
        textAlign: "center",
        paddingTop: "10px",
    },
    startRecording: {
        color: "#ffffff",
        fontSize: "3.0rem",
        cursor: "pointer",
    },
    stopRecording: {
        color: "#ff0000",
        fontSize: "3.0rem",
        cursor: "pointer",
    },
    uploadRecording: {
        marginLeft: "20px",
        color: "#ffffff",
        fontSize: "3.0rem",
        cursor: "pointer",
    }
});

export default styles;