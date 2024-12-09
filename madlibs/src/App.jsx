import React, { useState } from "react";
import Questions from "./Questions";
import Story from "./Story";

const App = () => {
  const [prompts] = useState(["place", "noun", "verb", "adjective", "plural_noun"]);
  const [answers, setAnswers] = useState({});
  const [story, setStory] = useState(null);

  const generateStory = (answers) => {
    const template = `
      Once upon a time in a ${answers.place}, there lived a ${answers.noun} who loved to ${answers.verb} ${answers.adjective} ${answers.plural_noun}.
    `;
    return template;
  };

  const handleFormSubmit = (submittedAnswers) => {
    setAnswers(submittedAnswers);
    setStory(generateStory(submittedAnswers));
  };

  const handleRestart = () => {
    setAnswers({});
    setStory(null);
  };

  return (
    <div>
      <h1>Madlibs!</h1>
      {!story ? (
        <Questions prompts={prompts} onSubmit={handleFormSubmit} />
      ) : (
        <Story story={story} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
