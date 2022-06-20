import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session";
import SessionForm from "./session_form";

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'login'
});

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(SessionForm)