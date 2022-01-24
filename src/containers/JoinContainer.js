import Join from '../views/Join'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  nickName: state.user.nickName,
  id: state.user.id,
  pw: state.user.pw,
})

const mapDispatchToProps = dispatch => ({
  saveAll: val => {
    window.console.log(val)
    dispatch({ type: 'ACTION_SAVE_ALL', value: val })
  },
})

const JoinContainer = connect(mapStateToProps, mapDispatchToProps)(Join)

export default JoinContainer
