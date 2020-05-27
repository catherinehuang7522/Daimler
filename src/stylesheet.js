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
  profileComponentWrapper: {
    display: "flex",
    flexDirection: 'row',
    marginLeft: 150,
    marginRight: 150,
  },
  avatarSection: {
    display: "flex",
    flex: 3,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  addPlayerSection: {
    display: "flex",
    flexDirection: 'column',
    flex: 1,
    alignItems: "center",
    marginTop: '5vh',
    color: 'white'
  },
  inputSection: {
    display: "flex",
    flexDirection: 'column',
    flex: 2,
    marginTop: '10vh',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'space-between'
  },
  addPlayerButton: {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 20,
    fontFamily: 'Kontakt',
    backgroundColor: "#205B82",
    color: "white",
    fontSize: 24,
  },
  categoryButtonsContainer: {
    paddingLeft: 150,
    paddingRight: 150,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
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
    fontFamily: 'Kontakt',
    marginTop: 10,
    marginRight: 5,
  },
  nextButton: {
    color: "white",
    position: "fixed",
    top: 420,
    left: 920,
    fontFamily: 'Kontakt'
  },
  previousButton: {
    color: "white",
    position: "fixed",
    top: 10,
    left: 10,
    fontFamily: 'Kontakt'
  },
  title: {
    color: "white",
    fontSize: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
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
    fontSize: 24,
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center'
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
    marginTop: 10,
    marginRight: 5,
  },
  answerButton: {
    backgroundColor: "#205B82",
    color: "white",
    fontSize: 22,
    borderRadius: 20,
    width: 332,
    height: 120,
    fontFamily: "Kontakt",
    marginTop: 10,
    marginRight: 5,
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
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    fontFamily: 'Kontakt',
    backgroundColor: "#205B82",
    color: "white",
    margin: 5
  },
  selectedCharacterButton: {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    fontFamily: 'Kontakt',
    backgroundColor: "white",
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    border: '5px solid #4DFAFA',
    margin: 5
  },
  unselectedAvatarButton: {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    fontFamily: 'Kontakt',
    backgroundColor: "#205B82",
    color: "white",
    margin: 5
  },
  selectedAvatarButton: {
    display: 'flex',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 20,
    fontFamily: 'Kontakt',
    backgroundColor: "white",
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    border: '5px solid #4DFAFA',
    margin: 5
  },
  newPlayerButton: {
    backgroundColor: 'white',
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    borderRadius: 20,
    border: '5px solid #4DFAFA',
    width: 200,
    height: 78,
    fontFamily: 'Kontakt'
  },
  characterButtonContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  characterButtonImage: {
    width: 50,
    height: 50
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white'
  },
  characterButtonText: {
    fontSize: 10,
    marginTop: 10
  },
  leaderBoardText: {
    color: "white",
    fontSize: 36,
  },
  circularProgress: {
    width: '7%',
    marginTop: 10,
  },
  questionsBottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  currentPlayerSection: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  currentPlayerText: {
    color: "white",
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  },
  answersWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  },
  unselectedCategoryButton: {
    backgroundColor: "#205B82",
    color: "white",
    borderRadius: 20,
    width: 160,
    height: 78,
    fontFamily: "Kontakt",
    margin: 10
  },
  selectedCategoryButton: {
    backgroundColor: "white",
    color: '#07142B',
    boxShadow: '0px 0px 4px #ffffff',
    border: '5px solid #4DFAFA',
    borderRadius: 20,
    width: 160,
    height: 78,
    fontFamily: "Kontakt",
    margin: 10
  },
};

export { styles };
