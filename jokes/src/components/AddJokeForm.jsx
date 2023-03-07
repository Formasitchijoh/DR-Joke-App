import { useState } from "react"
import '../styles/form.css'
export default function AddJoke(props){  
   
    //The only thing i need is the selected index of the category so i can out andd the joke into the array of jokes at that inde
    //so i will receive a the index of the joke
    return (
        <form className="form-container" onSubmit={props.handleSubmit}>
         <div className="input-container">
         <h2 className="add-joke-heading">
                Add a Joke to your most Cherised Joke Site
         </h2>
            <label className="author-label">Authors Name</label>
            <input
            type="text"
            id="new-joke"
            name="author_name"
            className="author-name-input"
            value={props.author_name}
            onChange={props.ChangeHandler}
            />

            <label className="comment-label">Author Email</label>
            <input
            type="text"
            id="new-joke"
            name="author_email"
            className="comment-input"
            value={props.author_email}
            onChange={props.ChangeHandler}
            />

            <label className="comment-label">Author Id</label>
            <input
            type="text"
            id="new-joke"
            name="author_id"
            className="comment-input"
            value={props.author_id}
            onChange={props.ChangeHandler}
            />

            <label className="joke-label">New Joke</label>
            <textarea
            type="text"
            id="new-joke"
            name="punchline"
            className="joke-input"
            value={props.punchline}
            onChange={props.ChangeHandler}
            />

             <label className="joke-label">Set Up</label>
            <textarea
            type="text"
            id="new-joke"
            name="setup"
            className="joke-input"
            value={props.setup}
            onChange={props.ChangeHandler}
            />

            <label className="comment-label">Category Id</label>
            <input
            type="text"
            id="new-joke"
            name="category_id"
            className="comment-input"
            value={props.category_id}
            onChange={props.ChangeHandler}
            />
            
         </div>
         <div className="joke-buttons">
         <button type="submit"  className="submit-button2">Submit</button>
         </div>
        </form>
    )
}