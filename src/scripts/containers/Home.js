import { connect } from 'react-redux'
import Home from '../components/Home'

const mapPropsToState = state => ({
  chapter: state.opening.chapter,
  description: state.opening.description
})

export default connect(mapPropsToState)(Home)
