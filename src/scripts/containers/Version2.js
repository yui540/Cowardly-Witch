import { connect } from 'react-redux'
import { changeChapter } from '../actions/opening'
import Version1 from '../components/Version1'
import config from '../config/opening'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    const chapter = 'Version2'
    const description = config[chapter]
    dispatch(changeChapter(
      chapter,
      description
    ))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Version1)