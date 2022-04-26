import React from "react";

import Meme from "./components/Meme";
import NavBar from "./components/NavBar";

const App = () => (
  <React.Fragment>
    <NavBar />
    <Meme />
  </React.Fragment>
);
export default App;
//////////////////////////////////////////////////////////////
// const greating = (n) => {
//   const hours = new Date().getHours();
//   //   const hours = 23;
//   let time;
//   if (hours >= 20 || hours < 4) time = `night`;
//   if (hours >= 4 && hours < 12) time = `morning`;
//   if (hours >= 12 && hours < 17) time = `afternoon`;
//   if (hours >= 17 && hours < 20) time = `evening`;
//   console.log(`Good ${time}, ${n}!`);
// };
// greating(`idan`);
//////////////////////////////////////////////////////////////
// const App = () => {
//   const [things, setThings] = React.useState(["Thing 1"]);
//   const toTings = things.map((ting, i) => <div key={i}>{ting}</div>);

//   const addTing = () =>
//     setThings((state) => [...state, `Thing ${state.length + 1}`]);

//   return (
//     <div>
//       <button onClick={addTing}>Add Item</button>
//       {toTings}
//     </div>
//   );
// };
// export default App;
//////////////////////////////////////////////////////////////

// const App = () => {
//   const [isImportant, setIsImportant] = React.useState(`yes`);
//   const twist = () =>
//     isImportant === `yes` ? setIsImportant(`no`) : setIsImportant(`yes`);

//   return (
//     <div className="state">
//       <h1 className="state--title">Is state important to know?</h1>
//       <div className="state--value">
//         <h1>{isImportant}</h1>
//         <button onClick={twist}>caing</button>
//       </div>
//     </div>
//   );
// };
// export default App;
//////////////////////////////////////////////////////////////
// const Count = (props) => {
//   return (
//     <div className="counter--count">
//       <h1>{props.number}</h1>
//     </div>
//   );
// };

// const App = () => {
//   const [number, setCunt] = React.useState(0);
//   const add = () => setCunt((number) => number + 1);

//   const remove = () => setCunt((number) => number - 1);

//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={remove}>
//         –
//       </button>

//       <Count number={number} />

//       <button className="counter--plus" onClick={add}>
//         +
//       </button>
//     </div>
//   );
// };
// export default App;
//////////////////////////////////////////////////////////////

// const App = () => {
//   const [goingOut, setGoingOut] = React.useState(true);
//   const click = () => setGoingOut((state) => !state);
//   return (
//     <div className="state">
//       <h1 className="state--title">Do I feel like going out tonight?</h1>
//       <div onClick={click} className="state--value">
//         <h1>{goingOut ? `yes` : `no`}</h1>
//       </div>
//     </div>
//   );
// };
// export default App;
//////////////////////////////////////////////////////////////

// import user from "./images/user.png";
// import star_empty from "./images/star-empty.png";
// import star_filled from "./images/star-filled.png";

// const Star = (props) => {
//   return (
//     <img
//       src={props.isFavorite ? star_filled : star_empty}
//       className="card--favorite"
//       onClick={props.handleClick}
//     />
//   );
// };

// const App = () => {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   });

//   const toggleFavorite = () =>
//     setContact((state) => {
//       return {
//         ...state,
//         isFavorite: !state.isFavorite,
//       };
//     });

//   return (
//     <main>
//       <article className="card">
//         <img src={user} className="card--image" />
//         <div className="card--info">
//           <Star isFavorite={contact.isFavorite} handleClick={toggleFavorite} />
//           <h2 className="card--name">{`${contact.firstName} ${contact.lastName}`}</h2>
//           <p className="card--contact">{contact.phone}</p>
//           <p className="card--contact">{contact.email}</p>
//         </div>
//       </article>
//     </main>
//   );
// };
// export default App;
//////////////////////////////////////////////////////////////
// const Header = (props) => {
//   /**
//    * Challenge:
//    * Raise state up a level and pass it down to both the
//    * Header and Body components through props.
//    */

//   return (
//     <header>
//       <p>Current user: {props.user}</p>
//     </header>
//   );
// };

// const Body = (props) => {
//   return (
//     <section>
//       <h1>Welcome back, {props.user}!</h1>
//     </section>
//   );
// };

// const App = () => {
//   const [user, setUser] = React.useState("Joe");
//   return (
//     <main>
//       <Header user={user} />
//       <Body user={user} />
//     </main>
//   );
// };
// export default App;
//////////////////////////////////////////////////////////////

// import boxes from "./boxes";

// const GeneratBox = (props) => {
//   const styles = {
//     ...props.css,
//     backgroundColor: props.data.on ? "#222222" : "transparent",
//   };

//   return (
//     <div style={styles} onClick={props.handleClick}>
//       box number{props.data.id}
//     </div>
//   );
// };

// export default function App() {
//   const [boxesState, setBoxesState] = React.useState(boxes);

//   const toggle = (index) =>
//     setBoxesState((statePrev) => {
//       const state = [...statePrev];
//       state[index].on = !state[index].on;
//       return state;
//     });

//   const style = {
//     backgroundColor: `#cccccc`,
//     borderColor: " black",
//     borderStyle: "double",
//     height: "30px",
//     width: "100px",
//   };
//   const Generat = () =>
//     boxesState.map((box, i) => (
//       <GeneratBox
//         key={box.id}
//         index={i}
//         data={box}
//         css={style}
//         handleClick={() => toggle(i)}
//       />
//     ));

//   return (
//     <main>
//       <Generat />
//     </main>
//   );
// }
//////////////////////////////////////////////////////////////

// import jokesData from "./jokesData";

// function Joke(props) {
//   const [{ isShown }] = props.isShownState.filter((x) => x.id === props.id);

//   return (
//     <div>
//       {props.setup && <h3>{props.setup}</h3>}
//       {isShown && <p>{props.punchline}</p>}
//       <button onClick={props.handelClick}>
//         {isShown ? `Hide` : `Show `} Punchline
//       </button>
//       <hr />
//     </div>
//   );
// }

// export default function App() {
//   const [isShownState, SetIsShownState] = React.useState(
//     jokesData.map((joke) => {
//       return { id: joke.id, isShown: false };
//     })
//   );
//   const toggle = (id) =>
//     SetIsShownState((prevState) =>
//       prevState.map((statePart) => {
//         if (statePart.id !== id) return statePart;
//         return { id: statePart.id, isShown: !statePart.isShown };
//       })
//     );

//   const JokeElements = () =>
//     jokesData.map((joke) => {
//       return (
//         <Joke
//           key={joke.id}
//           id={joke.id}
//           setup={joke.setup}
//           punchline={joke.punchline}
//           isShownState={isShownState}
//           handelClick={() => toggle(joke.id)}
//         />
//       );
//     });
//   return (
//     <div>
//       <JokeElements />
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////

// export default function App() {
//   const [messages, setMessages] = React.useState([]);

//   const Text = () => {
//     if (messages.length === 0) return <h1>You're all caught up!</h1>;
//     if (messages.length === 1) return <h1>there's exactly 1 unread message</h1>;
//     return <h1>You have {messages.length} unread messages</h1>;
//   };
//   return (
//     <div>
//       <Text />
//     </div>
//   );
// }
//////////////////////////////////////////////////////////////

// export default function Form() {
//   const [formData, setFormData] = React.useState({
//     firstName: ``,
//     lastName: ``,
//     email: ``,
//     comments: ``,
//     isFriendly: true,
//     employment: ``,
//     favColor: ``,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => {
//       return { ...prevState, [name]: type === `checkbox` ? checked : value };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={handleChange}
//         name="firstName"
//         value={formData.firstName}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="last Name"
//         onChange={handleChange}
//         name="lastName"
//         value={formData.lastName}
//       />
//       <br />
//       <input
//         type="email"
//         placeholder="email"
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//       />
//       <br />
//       <textarea
//         value={formData.comments}
//         onChange={handleChange}
//         name="comments"
//       />
//       <br />
//       <input
//         type="checkbox"
//         id="isFriendly"
//         name="isFriendly"
//         checked={formData.isFriendly}
//         onChange={handleChange}
//       />
//       <label htmlFor="isFriendly">Are you friendly?</label>
//       <br />
//       <br />

//       <fieldset name="employment">
//         <legend>Current employment status</legend>

//         <input
//           type="radio"
//           value="unemployed"
//           id="unemployed"
//           name="employment"
//           onChange={handleChange}
//           checked={formData.employment === `unemployed`}
//         />
//         <label htmlFor="unemployed">Unemployed</label>
//         <br />

//         <input
//           type="radio"
//           value="part-time"
//           id="part-time"
//           name="employment"
//           onChange={handleChange}
//           checked={formData.employment === `part-time`}
//         />
//         <label htmlFor="part-time">Part-time</label>
//         <br />

//         <input
//           type="radio"
//           value="full-time"
//           id="full-time"
//           name="employment"
//           onChange={handleChange}
//           checked={formData.employment === `full-time`}
//         />
//         <label htmlFor="full-time">Full-time</label>
//         <br />
//       </fieldset>
//       <br />

//       <label htmlFor="favColor">What is your favorite color?</label>
//       <br />

//       <select id="favColor" name="favColor" onChange={handleChange}>
//         <option value="">-- Choose --</option>
//         <option value="red">Red</option>
//         <option value="orange">Orange</option>
//         <option value="yellow">Yellow</option>
//         <option value="green">Green</option>
//         <option value="blue">Blue</option>
//         <option value="indigo">Indigo</option>
//         <option value="violet">Violet</option>
//       </select>
//       <br />
//       <br />
//       <button>Submit</button>
//     </form>
//   );
// }
//////////////////////////////////////////////////////////////
// export default function App() {
//   /**
//    * Challenge: Connect the form to local state
//    *
//    * 1. Create a state object to store the 4 values we need to save.
//    * 2. Create a single handleChange function that can
//    *    manage the state of all the inputs and set it up
//    *    correctly
//    * 3. When the user clicks "Sign up", check if the
//    *    password & confirmation match each other. If
//    *    so, log "Successfully signed up" to the console.
//    *    If not, log "passwords to not match" to the console.
//    * 4. Also when submitting the form, if the person checked
//    *    the "newsletter" checkbox, log "Thanks for signing
//    *    up for our newsletter!" to the console.
//    */

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!formData.password || !formData.email) return console.log(`no inpot`);
//     if (formData.password !== formData.confirmPassword)
//       return console.log(`passwords do not match`);
//     console.log(`Successfully signed up`);
//     formData.okayToEmail &&
//       console.log(`Thanks for signing up for our newsletter!`);
//   };
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === `checkbox` ? checked : value,
//     }));
//   };

//   const [formData, setFormData] = React.useState({
//     email: ``,
//     password: ``,
//     confirmPassword: ``,
//     okayToEmail: false,
//   });

//   return (
//     <div className="form-container">
//       <form className="form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email address"
//           className="form--input"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="form--input"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm password"
//           className="form--input"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />

//         <div className="form--marketing">
//           <input
//             id="okayToEmail"
//             name="okayToEmail"
//             type="checkbox"
//             checked={formData.newsletter}
//             onChange={handleChange}
//           />
//           <label htmlFor="okayToEmail">I want to join the newsletter</label>
//         </div>
//         <button className="form--submit">Sign up</button>
//       </form>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////
// export default function App() {
//   const [starWarsData, setStarWarsData] = React.useState({});
//   const [count, setCount] = React.useState(1);

//   React.useEffect(
//     function () {
//       console.log("Effect ran");
//       fetch(`https://swapi.dev/api/people/${count}`)
//         .then((res) => res.json())
//         .then((data) => setStarWarsData(data));
//     },
//     [count]
//   );

//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Get Next Character
//       </button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// }
//////////////////////////////////////////////////////////////

// const WindowTracker = () => {
//   const [windowWidthState, setWindowWidthState] = React.useState(
//     window.innerWidth
//   );
//   const listener = () => {
//     console.log(`lol`);
//     setWindowWidthState(window.innerWidth);
//   };

//   React.useEffect(() => {
//     window.addEventListener("resize", listener);
//     return () => window.removeEventListener("resize", listener);
//   }, []);

//   return <h1>Window width: {windowWidthState}</h1>;
// };

// export default function App() {
//   const [showState, setShowState] = React.useState(true);

//   return (
//     <div className="container">
//       <button onClick={() => setShowState(!showState)}>
//         Toggle WindowTracker
//       </button>
//       {showState && <WindowTracker />}
//     </div>
//   );
// }
