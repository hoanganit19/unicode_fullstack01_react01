import React, { Component, createRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chat.scss";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      messages: [],
    };
    this.messagesRef = createRef();
  }

  getToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const h = today.getHours();
    const i = today.getMinutes();
    const s = today.getSeconds();

    today = `${yyyy}-${mm}-${dd} ${h}:${i}:${s}`;

    return today;
  };

  getMessages = async () => {
    const res = await fetch("http://localhost:3004/chat");
    const data = await res.json();
    if (res.ok) {
      this.setState({
        messages: data,
      });
    }
  };

  sendMessage = async (data) => {
    const res = await fetch("http://localhost:3004/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const chatItem = await res.json();
      this.setState({
        messages: this.state.messages.concat(chatItem),
        message: "",
      });
    }
  };

  componentDidMount = () => {
    //console.log(this.messagesRef.current)

    this.getMessages();

    
  };

  componentDidUpdate = () => {
    setTimeout(() => {
      this.getMessages();
      this.messagesRef.current.scrollIntoView(true);
    }, 1000);
  };

  handleSendMessage = (e) => {
    e.preventDefault();
    const { name, message } = this.state;

    if (name !== "" && message !== "") {
      const chatItem = {
        name: name,
        message: message,
        created_at: this.getToday(),
      };

      this.sendMessage(chatItem);
    }
  };

  handleChangeValue = (e) => {
    const data = { ...this.state };

    data[e.target.name] = e.target.value;

    this.setState(data);
  };

  render() {
    const { messages, message } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="message">
              {messages.map(({ id, message, name }) => {
                return (
                  <div key={id} className="message-item">
                    <p>{message}</p>
                    <p>{name}</p>
                  </div>
                );
              })}
              <div ref={this.messagesRef}></div>
            </div>
            <div className="send">
              <form onSubmit={this.handleSendMessage}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập tên..."
                    name="name"
                    onChange={this.handleChangeValue}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập tin nhắn..."
                    name="message"
                    value={message}
                    onChange={this.handleChangeValue}
                  />
                  <button type="submit" className="btn btn-primary">
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
