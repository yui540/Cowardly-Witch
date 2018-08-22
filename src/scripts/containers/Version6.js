import { connect } from 'react-redux'
import { changeChapter } from '../actions/opening'
import Version6 from '../components/Version6'
import config from '../config/opening.json'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    const chapter = 'LastChapter'
    const description = config[chapter]
    dispatch(changeChapter(chapter, description))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Version6)
