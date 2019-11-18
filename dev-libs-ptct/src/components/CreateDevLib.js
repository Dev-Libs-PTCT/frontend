import React, { useEffect, useState, useContext } from "react";
import { DevLibContext } from "../hooks/DevLibContext";
import { WordsContext } from "../hooks/WordsContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import { CategoriesContext } from "../hooks/CategoriesContext";
import StoryCard from "./StoryCard";

const CreateDevLib = props => {
  const { words, setWords } = useContext(WordsContext);
  const { categories } = useContext(CategoriesContext);
  const data = {
    1: {
      lib: `Since I’d been coding in my ${words.proNoun2} for a couple of years, I was pretty sure those years counted as ${words.noun5}. So when I was asked about how much experience I had writing ${words.proNoun2}, I confidently answered, “${words.adjective} ”.`,
      user_id: Number(localStorage.getItem("user_id")),
      category_id: 1
    },
    2: {
      lib: `I was 19 years old when I applied for my first ${words.proNoun2} job. The position I was applying for was called “${words.noun1}”. Which is a pretty awesome job ${words.proNoun2}, because you could be considered both a “${words.proNoun2}” and a “${words.proNoun1}” at the same time.`,
      user_id: Number(localStorage.getItem("user_id")),
      category_id: 2
    },

    3: {
      lib: `In reflecting on this first decade of getting regularly paid money to type weird ${words.proNoun2} into my ${words.noun5}, I wanted to take some time to ${words.noun1} some of the ways my thinking shifted over the years as a ${words.proNoun2}.`,
      user_id: Number(localStorage.getItem("user_id")),
      category_id: 3
    }
  };

  const { devLibs, setDevlibs } = useContext(DevLibContext);
  const [addDevLib, setAddDevlib] = useState([]);

  useEffect(() => {
    setAddDevlib(data[categories]);

    axiosWithAuth()
      .get("/api/devLib")
      .then(res => {
        console.log(res.data);
        setDevlibs(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  const handleSubmit = e => {
    console.log("from handle submit", e);
    console.log(addDevLib);
    axiosWithAuth()
      .post("/api/devLib", addDevLib)
      .then(res => {
        console.log(res.data);
        props.history.push("/devlibs");
        setWords('')
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="create-container">
      <h3 className="create-header"> </h3>

      <StoryCard lib={addDevLib} />

      <button className='btn bg-primary' onClick={handleSubmit}>
        {" "}
        Add{" "}
      </button>
    </div>
  );
};

export default CreateDevLib;
