import { connect } from "react-redux"
import Overview from "./overview"

const mSTP = state => ({
  currentUserId: state.session.id,
});

export default connect(mSTP)(Overview);