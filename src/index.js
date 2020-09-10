import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

const comment = {
  date: new Date(),
  text: "Пробую себя в роли React разработчика",
  author: {
    name: "Алан Богов",
    avatarUrl:
      "https://sun7-8.userapi.com/c637230/v637230312/d112/tazrMS_j_eM.jpg",
  },
};

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div>{formatDate(props.date)}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <h1 className="UserInfo-name">{props.user.name}</h1>
    </div>
  );
}

function ActionLink() {
  function handleClick(event) {
    event.preventDefault();
    console.log("По ссылке кликнули");
  }

  return (
    <a href="#" onClick={handleClick}>
      Нажми на меня!
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "Включено" : "Выключено"}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log("Значение this: ", this);
  };

  render() {
    return <button onClick={this.handleClick}>Нажми на меня!!!!!</button>;
  }
}

function UserGreeting(props) {
  return <h1>Привет, {props.name}!</h1>;
}

function GuestGreeting() {
  return <h1>Войдите, пожалуйста</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting name={props.user}></UserGreeting>;
  }
  return <GuestGreeting></GuestGreeting>;
}

function App() {
  return (
    <div>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Clock></Clock>

      <ActionLink></ActionLink>
      <br></br>
      <Toggle></Toggle>
      <br></br>
      <LoggingButton></LoggingButton>
      <br></br>
      <Greeting isLoggedIn={true} user="Алан"></Greeting>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

// https://ru.reactjs.org/docs/conditional-rendering.html
// Рассмотрим ещё два компонента, представляющих кнопки Войти (Login) и Выйти (Logout).
