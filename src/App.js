import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😘": "Face Blowing a Kiss",
  "😒": "Unamused Face",
  "🤔": "Thinking Face",
  "✌️": "Victory Hand",
  "😔": "Pensive Face",
  "😩": "Weary Face",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face"
};

var knownEmoji = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Emoji not in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Check Emoji's meaning here</h1>
        <input onChange={emojInputHandler} />
        <br />
        <br />
        <h2>{meaning}</h2>

        <h3>Known Emojis</h3>
        {knownEmoji.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
