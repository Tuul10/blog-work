import { useEffect, useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");
  const [phrase, setPhrase] = useState("");

  const makePhrase = () => {};

  useEffect(() => {
    console.log("game started");
  }, []);

  useEffect(() => {
    console.log("value: ", value);
  }, [value]);

  useEffect(() => {
    console.log("phrase: ", phrase);
  }, [phrase]);

  return (
    <div>
      <input
        className="bg-blue-200"
        type="text"
        placeholder="value"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />

      <input
        className="bg-blue-200"
        placeholder="phrase"
        type="text"
        value={phrase}
        onChange={(event) => setPhrase(event.target.value)}
      />

      <button onClick={makePhrase}>go</button>
    </div>
  );
};

export default Test;
