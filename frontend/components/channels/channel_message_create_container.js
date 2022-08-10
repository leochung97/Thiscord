import { connect } from "react-redux";
import { createMessage } from "../../actions/message_actions";
import ChannelMessageCreate from "./channel_message_create";

const mSTP = (state) => {
  return {
    message: {
      content: "",
    },
    channels: state.entities.channels,
  };
};

const mDTP = (dispatch) => {
  return {
    createMessage: (serverId, channelId, message) =>
      dispatch(createMessage(serverId, channelId, message)),
  };
};

export default connect(mSTP, mDTP)(ChannelMessageCreate);
