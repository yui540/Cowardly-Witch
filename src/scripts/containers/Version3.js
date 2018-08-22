import { connect } from 'react-redux'
import { changeChapter } from '../actions/opening'
import Version3 from '../components/Version3'
import config from '../config/opening.json'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    const chapter = 'Version_4'
    const description = config[chapter]
    dispatch(changeChapter(chapter, description))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Version3)
