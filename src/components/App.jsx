import { useState } from "react";
import "../styles/App.css";
import Contact from "./Contact.jsx";
import Education from "./Education.jsx";
import Practical from "./Practical.jsx";

function App() {
  const [submitted, setSubmitted] = useState(false);

  let buttonText = "Submit";

  if (submitted) {
    buttonText = "Edit";
  }

  const handleClick = () => {
    setSubmitted(!submitted);
  }
  // TODO: contact info
  // TODO: education info
  // TODO: practical info
  return (
    <>
      <Contact submitted={submitted} />
      <Education submitted={submitted} />
      <Practical submitted={submitted} />
      <button type="button" onClick={handleClick}>{buttonText}</button>
    </>
  );
}

export default App;
