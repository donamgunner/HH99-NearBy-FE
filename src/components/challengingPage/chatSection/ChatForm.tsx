import React, { useState } from "react";
import styled from "styled-components";

function ChatForm({
  stompClient,
  challengeId,
}: {
  stompClient: React.MutableRefObject<any>;
  challengeId: number;
}) {
  const [body, setBody] = useState<string>("");
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value);
  };

  //   {type:'TALK', roomId:this.roomId, sender:this.sender, message:this.message}
  // {type:'ENTER', roomId:vm.$data.roomId, sender:vm.$data.sender, sessionId :sessionid}

  const handleSubmitChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    stompClient.current.send(
      `/pub/chat/message`,
      JSON.stringify({
        type: "TALK",
        roomId: challengeId,
        sender: sessionStorage.getItem("userName"),
        message: body,
      }),
      {
        Authorization: sessionStorage.getItem("accessToken"),
      }
    );
    setBody("");
  };
  return (
    <StChatFormContainer onSubmit={handleSubmitChat}>
      <input
        type="text"
        id="chat_input"
        value={body}
        onChange={handleUserInput}
      />
      <button>전송</button>
    </StChatFormContainer>
  );
}

const StChatFormContainer = styled.form`
  width: 100%;
  height: 4rem;
  background-color: red;
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 3px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  #chat_input {
    padding-left: 1rem;
    width: calc(100%-10rem);
    font-size: 1.7rem;
    height: 100%;
    flex-grow: 1;
    border-radius: 0;
    border: none;
    :focus {
      outline: none;
    }
  }

  button {
    width: 10rem;
    height: 4rem;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    background-color: var(--purple-color);
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export default ChatForm;
