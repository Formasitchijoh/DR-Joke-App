import React from "react"
import styles from './Modal1.module.css';
import { RiCloseLine } from "react-icons/ri";
import { Component } from "react";
import axios from "axios";
// import '../styles/form.css'

export default class Form extends Component { 

    constructor(props){
        super(props)
        this.state = {
          punchline:'',
          setup:'',
          author_name:'',
          author_email:'',
          category_id:1
        }
      }
      //the change handler for holding the change value
       ChangeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
        
      }
      submitHandler = (e) => {
        e.preventDefault()
        // alert(this.state.punchline)
        console.log(this.state);
        this.setState({
          punchline:this.state.punchline,
          setup:this.state.setup,
          author_name:this.state.author_name,
          author_email:this.state.author_email,
          category_id:this.state.category_id
        });
        axios.post(`https://api.jokes.digitalrenter.com/api/jokes`, this.state)
        .then(response => {
            console.log(response);
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
        // alert(this.state.punchline)
        this.setState({
          punchline:'',
          setup:'',
          author_name:'',
          author_email:'',
          category_id:0
        })
    }
    

    render(){
        const{ punchline,setup, author_name, author_email, category_id} = this.state

        return(
            <>
            
            <div className={styles.darkBG} onClick={() => this.props.setIsOpen(false)} />
          <div className={styles.centered}>
            
            <form className={styles.modal}  onSubmit={this.submitHandler}>
            <div className={styles.modalHeader}>
                <h5 className={styles.heading}>DJoker</h5>
              </div> 
              <button type="button" className={styles.closeBtn} onClick={() => this.props.setIsOpen(false)}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button> 
              <div className={styles.modalContent}>
            Add a Joke to you most Treasured site
          </div>
             <div className={styles.modalActions}>
                <div className={styles.actionContainer}>
                <label className="author-label">Authors Name</label>
                <input
                type="text"
                id="new-joke"
                name="author_name"
                className="author-name-input"
                value={author_name}
                onChange={this.ChangeHandler}
                />
                </div>
                <div className={styles.actionContainer}>
                <label className="comment-label">Author Email</label>
                <input
                type="text"
                id="new-joke"
                name="author_email"
                className="comment-input"
                value={author_email}
                onChange={this.ChangeHandler}
                />
                </div>
                <div className={styles.actionContainer}>
                <label className="joke-label">New Joke</label>
                <textarea
                type="text"
                id="new-joke"
                name="punchline"
                className={styles.actionTextarea}
                value={punchline}
                onChange={this.ChangeHandler}
                />
                </div>
                <div className={styles.actionContainer}>
                 <label className="joke-label">Set Up</label>
                <textarea
                type="text"
                id="new-joke"
                name="setup"
                className={styles.actionTextarea}
                value={setup}
                onChange={this.ChangeHandler}
                />
                </div>

                <div className={styles.actionContainer}>
                <label className="comment-label">Category Id</label>
                <select
                  name="category_id"
                  className={styles.actionSelect}
                   value={category_id}
                   onChange={this.ChangeHandler}
            //  onChange={props.handleSelectedCategory}
             >
                <option value={1}>Family</option>
                <option value={2}>Relationship</option>
                <option value={3}>Africa</option>
                <option value={4}>Political</option>
                <option value={5}>Emotional</option>
             </select>
                </div>
                <div className={styles.actionButtonContainer}>
             {/* <button type="submit" className={styles.deleteBtn} onClick={() => this.props.setIsOpen(false)} >Back</button> */}
             <button type="button"  className={styles.cancelBtn} onClick={() => {
              
                this.props.setIsOpen(false)
                alert(category_id)
              
             }}>Submit</button>
             </div>
             </div>
             
            </form>        
            </div>

          </>
        )

    }
   
};



// import React from "react"
// import styles from './Modal.module.css';
// import { RiCloseLine } from "react-icons/ri";


// const Modal = ({setIsOpen}) => {
//     return(
//         <>
        
//         <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
//       <div className={styles.centered}>
//         <div className={styles.modal}> 
//           <div className={styles.modalHeader}>
//             <h5 className={styles.heading}>Dialog</h5>
//           </div>
//           <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
//             <RiCloseLine style={{ marginBottom: "-3px" }} />
//           </button>
//           <div className={styles.modalContent}>
//             Are you sure you want to delete the item?
//           </div>

//           <div className={styles.modalActions}>
//             <div className={styles.actionsContainer}>
//               <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
//                 Delete
//               </button>
//               <button
//                 className={styles.cancelBtn}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//     )
// };

// export default Modal;


// import React from "react"
// import styles from './Modal.module copy.css';
// import { RiCloseLine } from "react-icons/ri";
// import { Component } from "react";
// import axios from "axios";
// // import '../styles/form.css'

// export default class Form extends Component { 

//     constructor(props){
//         super(props)
//         this.state = {
//           punchline:'',
//           setup:'',
//           author_name:'',
//           author_email:'',
//           category_id:1
//         }
//       }
//       //the change handler for holding the change value
//        ChangeHandler = (e) => {
//         this.setState({[e.target.name] : e.target.value})
        
//       }
//       submitHandler = (e) => {
//         e.preventDefault()
//         console.log(this.state);
       
//         this.setState({
//           punchline:this.state.punchline,
//           setup:this.state.set,
//           author_name:this.state.author_name,
//           author_email:this.state.author_email,
//           category_id:this.state.category_id
//         });
//         axios.post(`https://api.jokes.digitalrenter.com/api/jokes`, this.state)
//         .then(response => {
//             console.log(response);
//             console.log(response.data)
//         })
//         .catch(error => {
//             console.log(error);
//         })
  
//         this.setState({
//           punchline:'',
//           setup:'',
//           author_name:'',
//           author_email:'',
//           category_id:0
//         })
//     }
    

//     render(){
//         const{ punchline,setup, author_name, author_email, category_id} = this.state

//         return(
//             <>
            
//             <div className={styles.darkBG} onClick={() => this.props.setIsOpen(false)} />
//           <div className={styles.centered}>
//             <div className={styles.modal}> 
//               <div className={styles.modalHeader}>
//                 <h5 className={styles.heading}>DJoker</h5>
//               </div>
//               <button className={styles.closeBtn} onClick={() => this.props.setIsOpen(false)}>
//                 <RiCloseLine style={{ marginBottom: "-3px" }} />
//               </button>
//               <div className={styles.modalContent}>
//                 Add a Joke to you most Treasured site
//               </div>
            
//             <>
//             <form className="form-container" onSubmit={this.submitHandler}>
//              <div className="input-container">
//              <h2 className="add-joke-heading">
//                     Add a Joke to your most Cherised Joke Site
//              </h2>
            
//                 <label className="author-label">Authors Name</label>
//                 <input
//                 type="text"
//                 id="new-joke"
//                 name="author_name"
//                 className="author-name-input"
//                 value={author_name}
//                 onChange={this.ChangeHandler}
//                 />
    
//                 <label className="comment-label">Author Email</label>
//                 <input
//                 type="text"
//                 id="new-joke"
//                 name="author_email"
//                 className="comment-input"
//                 value={author_email}
//                 onChange={this.ChangeHandler}
//                 />
    
//                 <label className="joke-label">New Joke</label>
//                 <textarea
//                 type="text"
//                 id="new-joke"
//                 name="punchline"
//                 className="joke-input"
//                 value={punchline}
//                 onChange={this.ChangeHandler}
//                 />
    
//                  <label className="joke-label">Set Up</label>
//                 <textarea
//                 type="text"
//                 id="new-joke"
//                 name="setup"
//                 className="joke-input"
//                 value={setup}
//                 onChange={this.ChangeHandler}
//                 />
    
//                 <label className="comment-label">Category Id</label>
//                 <input
//                 type="text"
//                 id="new-joke"
//                 name="category_id"
//                 className="comment-input"
//                 value={category_id}
//                 onChange={this.ChangeHandler}
//                 />
                
//              </div>
//              <div className="joke-buttons">
//              <button type="submit" className={styles.deleteBtn} onClick={() => this.props.setIsOpen(false)} >Back</button>
//              <button type="submit"  className={styles.cancelBtn} onClick={() => this.props.setIsOpen(false)}>Submit</button>
//              </div>
//             </form>
        
//             </>
           
//             </div>
//           </div>
//           </>
//         )

//     }
   
// };



// import React from "react"
// import styles from './Modal.module.css';
// import { RiCloseLine } from "react-icons/ri";


// const Modal = ({setIsOpen}) => {
//     return(
//         <>
        
//         <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
//       <div className={styles.centered}>
//         <div className={styles.modal}> 
//           <div className={styles.modalHeader}>
//             <h5 className={styles.heading}>Dialog</h5>
//           </div>
//           <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
//             <RiCloseLine style={{ marginBottom: "-3px" }} />
//           </button>
//           <div className={styles.modalContent}>
//             Are you sure you want to delete the item?
//           </div>

//           <div className={styles.modalActions}>
//             <div className={styles.actionsContainer}>
//               <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
//                 Delete
//               </button>
//               <button
//                 className={styles.cancelBtn}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//     )
// };

// export default Modal;