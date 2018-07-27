import { connect } from 'react-redux'
import { changeChapter } from '../actions/opening'
import Version1 from '../components/Version1'

const mapStateToProps = () => ({})

const mapDispatchProps = dispatch => ({
  changeChapter() {
    dispatch(changeChapter('Version_2', 'いつか---必ず私を殺しにきてね。'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Version1)
