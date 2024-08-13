import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function emojiCreated(emojipedia) {
  return (
    <Entry
      id={emojipedia.id}
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Hub of Emojis</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiCreated)}</dl>
    </div>
  );
}

export default App;
