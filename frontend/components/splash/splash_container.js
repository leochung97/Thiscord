import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout } from '../../actions/session_actions';
import Splash from './splash';

const mSTP = state => ({
  loggedIn: Boolean(state.session.id),
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default withRouter(connect(mSTP, mDTP)(Splash));