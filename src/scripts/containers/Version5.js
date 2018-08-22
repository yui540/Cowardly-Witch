import { connect } from 'react-redux'
import { changeChapter } from '../actions/opening'
import Version5 from '../components/Version5'
import config from '../config/opening.json'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    const chapter = 'Version_6'
    const description = config[chapter]
    dispatch(changeChapter(chapter, description))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Version5)
