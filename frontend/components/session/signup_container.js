import { connect } from "react-redux";
import { createNewUser, clearSessionErrors } from "../../actions/session";
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: "signup",
})

const mDTP = dispatch => ({
  action: formUser => dispatch(createNewUser(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);