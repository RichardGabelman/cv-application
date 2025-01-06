import { useState } from "react";

function Practical({ submitted }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  if (submitted) {
    return (
      <div id="practicalSection">
        <h2>{name}</h2>
        <p>{position}</p>
        <p>{responsibilities}</p>
        <p>{start}</p>
        <p>{end}</p>
      </div>
    );
  }
  return (
    <div id="practicalSection">
      <form>
        <legend>Practical Experience</legend>

        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="position">Position: </label>
        <input
          type="text"
          id="position"
          name="position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />

        <label htmlFor="responsibilities">Responsibilities: </label>
        <input
          type="textarea"
          id="responsibilities"
          name="responsibilities"
          value={responsibilities}
          onChange={(event) => setResponsibilities(event.target.value)}
        />

        <label htmlFor="start">Start Date: </label>
        <input
          type="text"
          id="start"
          name="start"
          value={start}
          onChange={(event) => setStart(event.target.value)}
        />

        <label htmlFor="end">End Date: </label>
        <input
          type="text"
          id="end"
          name="end"
          value={end}
          onChange={(event) => setEnd(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Practical;
