import { connect } from 'react-redux'
import Prologue from '../components/Prologue'
import { changeChapter } from '../actions/opening'

const mapPropsToState = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    dispatch(changeChapter('Version_1', 'それは、優しい幻想。そして、悲しい現実。'))
  }
})

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Prologue)
