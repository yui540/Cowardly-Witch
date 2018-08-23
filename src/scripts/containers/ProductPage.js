import { connect } from 'react-redux'
import ProductPage from '../components/ProductPage'
import { changeChapter } from '../actions/opening'
import { closeMenu } from '../actions/menu'
import config from '../config/opening'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  changeChapter() {
    const chapter = 'LastChapter'
    const description = config[chapter]
    dispatch(changeChapter(
      chapter,
      description
    ))
  },
  closeMenu() {
    dispatch(closeMenu())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage)
