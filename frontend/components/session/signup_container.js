import { connect } from "react-redux";
import { createNewUser, clearSessionErrors } from "../../actions/session";
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'register'
})

const mDTP = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);