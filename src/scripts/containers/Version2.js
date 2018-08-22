import { connect } from 'react-redux'
import { changeChapter } from '../actions/opening'
import Version2 from '../components/Version2'
import config from '../config/opening.json'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    const chapter = 'Version_3'
    const description = config[chapter]
    dispatch(changeChapter(chapter, description))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Version2)
