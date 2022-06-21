import { connect } from "react-redux";
import { register, clearSessionErrors } from "../../actions/session_actions";
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: "signup",
})

const mDTP = dispatch => ({
  processForm: formUser => dispatch(register(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);