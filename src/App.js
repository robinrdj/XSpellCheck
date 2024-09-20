import React,{useState} from "react";
function App() {
  // Define a custom dictionary of words and their corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};
const [inputText, setInputText] = useState("");
const [suggestedText, setSuggestedText] = useState("");
function handleInputChange(e){
  setInputText(e.target.value);
  const text = e.target.value;
  // Implement a basic spelling check and correctione
  const words = text.split(" ");
  const correctedWords = words.map((word) => {
    const correctedWord = customDictionary[word.toLowerCase()];
    return correctedWord || word;
  });
  const firstCorrection = correctedWords.find(
    (word, index) => word !== words[index]
  );
  setSuggestedText(firstCorrection || "")
}

  return (
    <div>
    <h1>Spell Check and Auto-Correction</h1>
    <textarea
      value={inputText}
      onChange={handleInputChange}
      placeholder="Enter text..."
      rows={5}
      cols={40}
    />
    {suggestedText && (
      <p>
        Did you mean: <strong>{suggestedText}</strong>?
      </p>
    )}
  </div>
  )
}

export default App