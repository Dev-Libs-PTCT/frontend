import React, { useContext } from "react";

import { WordsContext } from "../hooks/WordsContext";
import Dropdown from "./Dropdown";


const DevLibForm = props => {
  const { words, setWords } = useContext(WordsContext);
  const handleChange = e => {
    e.preventDefault();
    setWords({
      ...words,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push("/create");
    
  };

  return (
    //please make a better form. Multi step would be great
    <div className="form-container">
      <h2 className="form-header">Choose your words carefully!</h2>
      <form className="input-form" id='input-form' onSubmit={handleSubmit}>
        <Dropdown />
        <label>
          Give me a noun (person, place, thing etc.)
          <input
            name="noun1"
            type="text"
            value={words.noun1}
            onChange={handleChange}
          />
        </label>
        <label>
          Give me a verb. Tell me what (person, place, thing etc.) did.
          <input
            name="verb1"
            type="text"
            value={words.verb1}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter an adjective. A descriptive word. 
          <input
            name="adjective"
            type="text"
            value={words.adjective}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter an adverb.
          <input
            name="adverb"
            type="text"
            value={words.adverb}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter a noun.
          <input
            name="noun2"
            type="text"
            value={words.noun2}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter a noun.
          <input
            name="noun3"
            type="text"
            value={words.noun3}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter a noun.
          <input
            name="noun4"
            type="text"
            value={words.noun4}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter a noun.
          <input
            name="noun5"
            type="text"
            value={words.noun5}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter a verb.
          <input
            name="verb2"
            type="text"
            value={words.verb2}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter a pronoun.
          <input
            name="proNoun1"
            type="text"
            value={words.pNoun1}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter a pronoun.
          <input
            name="proNoun2"
            type="text"
            value={words.pNoun2}
            onChange={handleChange}
          />
        </label>

        <button onSubmit={handleSubmit} className='btn bg-primary'> Submit </button>
      </form>
    </div>
  );
};

export default DevLibForm;
