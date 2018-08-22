import { connect } from 'react-redux'
import LastChapter from '../components/LastChapter'
import { openMenu, closeMenu } from '../actions/menu'

const mapStateToProps = state => ({
  menu: state.menu.state
})

const mapDispatchToProps = dispatch => ({
  openMenu() {
    dispatch(openMenu())
  },
  closeMenu() {
    dispatch(closeMenu())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LastChapter)
