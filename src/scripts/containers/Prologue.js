import { connect } from 'react-redux'
import Prologue from '../components/Prologue'
import { changeChapter } from '../actions/opening'
import config from '../config/opening.json'

const mapPropsToState = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    const chapter = 'Version_1'
    const description = config[chapter]
    dispatch(changeChapter(chapter, description))
  },
  skipChapter() {
    const chapter = 'LastChapter'
    const description = config[chapter]
    dispatch(changeChapter(chapter, description))
  }
})

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Prologue)
