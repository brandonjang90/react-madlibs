import React, { useState } from "react";

const Questions = ({ prompts, onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {prompts.map((prompt) => (
        <div key={prompt}>
          <label>
            {prompt}:
            <input
              name={prompt}
              value={formValues[prompt] || ""}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      ))}
      <button type="submit">Get Story</button>
    </form>
  );
}

export default Questions;
