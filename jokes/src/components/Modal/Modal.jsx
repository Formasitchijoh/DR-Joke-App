import React, { useEffect } from "react"
import styles from './Modal.module.css';
import { RiCloseLine } from "react-icons/ri";
import {useState} from 'react'
import axios from "axios";
const Modal = ({setIsOpen,onNewComment,jokeId, commentList}) => { 
  // let commentData;
 const[comment, setComment] = useState('') 
 console.log(commentList)


function handleCommentChange(e){
  setComment(e.target.value)
}


function submitComment(e){
  e.preventDefault()
  setIsOpen(false)
  // alert(comment)
  const post = {
 comment:comment,
 joke_id:jokeId
  }
  
  axios.post(`https://api.jokes.digitalrenter.com/api/comments`, post)
  .then(response => response.json())
  .then(responseJson => {
    onNewComment(responseJson)
    setComment('')
  })
  .catch(error => { 
    console.log(error)
  }) 
 
  


}

//After loading the comment i have to retrieve the comment as Mr Martin said

    return(
        <>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}> 
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>DJoker</h5>
          </div>
          <button type="button" className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Add a Joke to you most Treasured site
          </div>
           <form onSubmit={submitComment} className="comment">
            <input value={comment} onChange={handleCommentChange} className="comment-input"></input>
           <button type="button"  style={{width:'2em', height:'2em', marginTop:"1em" }}>
           <img
             src='https://png.pngtree.com/element_our/sm/20180620/sm_5b29c1e7b8dd3.jpg'
             alt=''
             className={styles.deleteBtn}
             />
           </button>
           </form>
           <div className={styles.commentDiv}>
            <ul className={styles.commentlist}>
              {commentList.map((comt) => {

                return(
                  <li key={comt.joke_id} className={styles.comment}>{comt.comment}</li>
                )
              })}
            </ul>
           </div>
        </div>
      </div>
      </>
    )
};

export default Modal;



// import React, { useEffect } from "react"
// import styles from './Modal.module.css';
// import { RiCloseLine } from "react-icons/ri";
// import {useState} from 'react'
// import axios from "axios";
// const Modal = ({setIsOpen}) => { 
  
//  const[comment, setComment] = useState('') 

// function handleCommentChange(e){
//   setComment(e.target.value)
// }

// let displayComment;
// function submitComment(e){
//   e.preventDefault()
//   setIsOpen(false)
//   alert(comment)
//   const post = {
//  comment:comment,
//  joke_id: Math.floor(Math.random() * 10)
//   }
  
//   axios.post(`https://api.jokes.digitalrenter.com/api/comments`, post)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error)
//   })
//   setComment('')

//   fetch(`https://api.jokes.digitalrenter.com/api/comments?joke_id=32`)
//   .then(response => response.json())
//   .then((responseData) => {
//    displayComment = responseData.map((response) => {
//     return(
//       response
//     )
    
//    })
  
//   })


// }

// //After loading the comment i have to retrieve the comment as Mr Martin said

//     return(
//         <>
//         <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
//       <div className={styles.centered}>
//         <div className={styles.modal}> 
//           <div className={styles.modalHeader}>
//             <h5 className={styles.heading}>DJoker</h5>
//           </div>
//           <button type="button" className={styles.closeBtn} onClick={() => setIsOpen(false)}>
//             <RiCloseLine style={{ marginBottom: "-3px" }} />
//           </button>
//           <div className={styles.modalContent}>
//             Add a Joke to you most Treasured site
//           </div>
//            <form onSubmit={submitComment} className="comment">
//             <input value={comment} onChange={handleCommentChange} className="comment-input"></input>
//            <button type="button"  style={{width:'2em', height:'2em', marginTop:"1em" }}>
//            <img
//              src='https://png.pngtree.com/element_our/sm/20180620/sm_5b29c1e7b8dd3.jpg'
//              alt=''
//              className={styles.deleteBtn}
//              />
//            </button>
//            </form>
//         </div>
//       </div>
//       </>
//     )
// };

// export default Modal;

