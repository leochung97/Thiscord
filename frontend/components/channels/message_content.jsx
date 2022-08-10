import React, { useEffect, useState } from "react";

function Messagecontent(props) {
  const [content, setcontent] = useState(props.message.content);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (edit) {
      const messageContainer = document.querySelector(
        `#message-${props.message.id}`
      );
      messageContainer.classList.add("editing");

      const close = (e) => {
        if (e.keyCode === 27) {
          setEdit(!edit);
          setcontent(props.message.content);
        }
      };

      window.addEventListener("keydown", close);
      return () => {
        messageContainer.classList.remove("editing");
        window.removeEventListener("keydown", close);
      };
    }
  }, [edit]);

  const messageOptions = () => {
    if (props.currentUser.id === props.message.user.id) {
      return (
        <div className="message-button-container">
          <div onClick={() => setEdit(!edit)}>
            <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div onClick={() => props.deleteMessage(props.message.id)}>
            <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"
              ></path>
              <path
                fill="currentColor"
                d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"
              ></path>
            </svg>
          </div>
        </div>
      );
    }
  };

  const messagecontent = () => {
    return (
      <div>
        {content}
        {messageOptions()}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let message = props.message;
    message.content = content;
    props.updateMessage(message);
    setEdit(!edit);
  };

  const messageEdit = () => {
    return (
      <div className="channel-message-edit">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="channel-message-edit-form"
        >
          <input
            type="text"
            value={content}
            onChange={(e) => setcontent(e.currentTarget.value)}
          />
          <div className="message-edit-footer">
            escape to{" "}
            <span
              onClick={() => {
                setcontent(props.message.content);
                setEdit(!edit);
              }}
            >
              cancel
            </span>{" "}
            • enter to <span onClick={(e) => handleSubmit(e)}>save</span>
          </div>
        </form>
      </div>
    );
  };

  const contentContent = () => {
    if (!edit) {
      return messagecontent();
    } else {
      return messageEdit();
    }
  };

  return <div className="message-body">{contentContent()}</div>;
}

export default Messagecontent;
