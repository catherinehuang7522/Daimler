const styles = ({
  root: {
    flexGrow: 1,
    backgroundColor: '#07142B',
    width: 1062,
    height: 484,
    fontFamily: 'Kontakt',
    zIndex: 1,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    color: 'white',
    fontSize: 48,
    display: 'flex',
    justifyContent: 'center'
  },
  feedbackWrapper: {
    zIndex: 10,
    width: 1062,
    height: 484,
  },
  feedbackContent: {
    display: 'flex',
    textAlign: 'center'
  },
  questionText: {
    color: 'white'
  },
  feedbackHeaderTextCorrect: {
    color: '#379634',
    fontSize: 60,
  },
  feedbackHeaderTextIncorrect: {
    color: '#F06449',
    fontSize: 60,
  },
  feedbackBodyText: {
    color: 'white'
  },
  unselectedButton: {
    backgroundColor: '#205B82',
    color: 'white',
    borderRadius: 20,
    width: 332,
    height: 78,
    fontFamily: 'Kontakt'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  columnGrid: {
    display: 'grid',
    direction: 'column'
  },
  rowGrid: {
    display: 'grid',
    direction: 'row'
  },
})

export { styles }
