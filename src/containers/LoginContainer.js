import { connect } from 'react-redux'
import Login from '../views/Login'

const mapStateToProps = state => ({
  user: state.user,
})

const LoginContainer = connect(mapStateToProps, null)(Login)

export default LoginContainer
