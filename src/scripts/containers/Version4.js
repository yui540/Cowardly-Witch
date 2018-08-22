import { connect } from 'react-redux'
import { changeChapter } from '../actions/opening'
import Version4 from '../components/Version4'
import config from '../config/opening.json'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    const chapter = 'Version_5'
    const description = config[chapter]
    dispatch(changeChapter(chapter, description))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Version4)
