import React from "react";

const Form = ({input, setInput, tasks, setTasks, setFilter}) => {

   const handleInput = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value);
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, {
        text: input,
        done: false,
        id: Math.floor(Math.random() * 1000)
    }]);
    setInput("");
   }

   const handleFilter = (e) => {
        console.log(e.target.value);
        setFilter(e.target.value);
   }

    return (
        <form>
            <input value={input} onChange={handleInput} type="text" className="form-input" />
            <button onClick={handleSubmit} type="submit">+</button>
            <div className="select">
                <select onChange={handleFilter} name="todos" className="filter-task">
                    <option value="all">All</option>
                    <option value="completed">completed</option>
                    <option value="not completed">not completed</option>
                </select>
            </div>
        </form>
    );
}

export default Form;