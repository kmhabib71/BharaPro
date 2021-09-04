import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  uploadImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 180,
    width: 180,
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#293241",
    margin: 20,
  },
  nextButton: {
    // position: "absolute",
    // bottom: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "#293241",
    width: "90%",
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 30,
    marginTop: 100,
    marginBottom: 20,
  },
  category: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    paddingVertical: 10,
  },
  title: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    marginTop: 50,
  },
  description: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    marginTop: 50,
  },
  nextText: {
    color: "white",
    fontSize: 17,
    marginBottom: 5,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
  },
  itemImage: {
    marginLeft: 10,
    padding: 10,
  },

  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default styles;
