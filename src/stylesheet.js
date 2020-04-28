const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "#07142B",
    width: 1062,
    height: 484,
    fontFamily: "Kontakt",
    overflow: "scroll",
    zIndex: 1,
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  categoryButtonsContainer: {
    paddingLeft: 166,
    paddingRight: 166,
  },
  categoryRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  column: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
  },
  selectedButton: {
    backgroundColor: 'white',
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    borderRadius: 20,
    border: '5px solid #4DFAFA',
    width: 332,
    height: 78,
    fontFamily: 'Kontakt'
  },
  nextButton: {
    color: "white",
    position: "fixed",
    top: 420,
    left: 980,
  },
  title: {
    color: "white",
    fontSize: 48,
    display: "flex",
    justifyContent: "center",
    marginTop: 50
  },
  feedbackWrapper: {
    zIndex: 10,
    width: 1062,
    height: 484,
  },
  feedbackContent: {
    display: "flex",
    textAlign: "center",
  },
  questionText: {
    color: "white",
  },
  feedbackHeaderTextCorrect: {
    color: "#379634",
    fontSize: 60,
  },
  feedbackHeaderTextIncorrect: {
    color: "#F06449",
    fontSize: 60,
  },
  feedbackBodyText: {
    color: "white",
  },
  unselectedButton: {
    backgroundColor: "#205B82",
    color: "white",
    borderRadius: 20,
    width: 332,
    height: 78,
    fontFamily: "Kontakt",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  columnGrid: {
    display: "grid",
    direction: "column",
  },
  rowGrid: {
    display: "grid",
    direction: "row",
  },
  unselectedCharacterButton: {
    display: 'flex',
    width: 200,
    height: 200,
    borderRadius: 20,
    fontFamily: 'Kontakt',
    backgroundColor: "#205B82",
    color: "white",
  },
  selectedCharacterButton: {
    display: 'flex',
    width: 200,
    height: 200,
    borderRadius: 20,
    fontFamily: 'Kontakt',
    backgroundColor: "white",
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    border: '5px solid #4DFAFA',
  },
  characterButtonContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  characterButtonImage: {
    width: 75,
    height: 75
  },
  characterButtonText: {
    fontSize: 16,
    marginTop: 20
  }
};

export { styles };
