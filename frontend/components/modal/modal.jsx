import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import ServerIndex from "../servers/server_index/server_index";
import ServerForm from "../servers/server_form/server_form";
import ServerPublicForm from "../servers/server_form/server_public_form";
import ServerCreateForm from "../servers/server_form/server_create_form";
import ServerEditForm from "../servers/server_form/server_edit";
import UserOptions from "../user/user_options";
import CreateChannel from "../channels/create_channel";
import EditChannel from "../channels/edit_channel";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { is_public: false };
    this.make_public = this.make_public.bind(this);
    this.make_private = this.make_private.bind(this);
  }

  make_public() {
    this.setState({ is_public: true });
  }

  make_private() {
    this.setState({ is_public: false });
  }

  render() {
    let component;

    switch (this.props.modal) {
      case "formServer":
        component = <ServerForm />;
        break;
      case "formMakeServerPublic":
        component = (
          <ServerPublicForm
            serverPublic={this.state.is_public}
            make_public={this.make_public}
            make_private={this.make_private}
          />
        );
        break;
      case "editServer":
        component = <ServerEditForm history={this.props.history} />;
        break;
      case "createServer":
        component = <ServerCreateForm is_public={this.state.is_public} />;
        break;
      case "indexServer":
        component = <ServerIndex />;
        break;
      case "userOptions":
        component = <UserOptions />;
        break;
      case "createChannel":
        component = <CreateChannel />;
        break;
      case "editChannel":
        component = <EditChannel history={this.props.history} />;
        break;
      default:
        return null;
    }
    if (!this.props.modal) {
      return null;
    }

    return (
      <div className="modal-underlay" onClick={this.props.closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(withRouter(Modal));
