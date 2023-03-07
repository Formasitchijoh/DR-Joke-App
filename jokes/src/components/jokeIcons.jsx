import like from '../assets/like2.png'
import laugh from '../assets/laugh.jpeg'
import comment from '../assets/comment.png'
import '../index.css'
import { useState } from 'react'
import Modal from './Modal/Modal'
import styles from '../components/Modal/App.module.css'

export default function JokeIcon(props){ 
    const[likes, setlikes] = useState(0)
    const[laughs, setLaughs] = useState(0)
    const[isOpen, setIsOpen] = useState(false) //used to hold the state of the comment modal
     function handleLikeClick(){
        setlikes(likes + 1)
     }
     function handleLaughsClick(){
        setLaughs(laughs + 1)
     }
     
    return (

        <div className='joke-container'>
            <div className='joke-element'>{props.punchline}</div>
         <div className='joke-icons'>
            <div className='like-container'>
            <img
           src={like}
           alt=""
           className="like-image"
           onClick={handleLikeClick}
            />
            <span>{likes}</span>
            </div>
            
            <div className='laugh-container'>
            <img
           src={laugh}
           alt=""
           className="laugh-image"
           onClick={handleLaughsClick}
            />
             <span>{laughs}</span>
            </div>
            
            <div>
               
               <img
           src={comment}
           alt=""
           className={styles.primaryBtn} 
           onClick={() =>setIsOpen(true)}
            /> 
            {isOpen && <Modal setIsOpen={setIsOpen} onNewComment={ props.onNewComment} commentList={props.comments} jokeId={props.id} />}

            </div>
            
         </div>
           
          </div>
        
    )
}

// import like from '../assets/like2.png'
// import laugh from '../assets/laugh.jpeg'
// import comment from '../assets/comment.png'
// import '../index.css'
// import { useState } from 'react'
// import Modal from './Modal/Modal'
// import styles from '../components/Modal/App.module.css'

// export default function JokeIcon(props){ 
//     const[likes, setlikes] = useState(0)
//     const[laughs, setLaughs] = useState(0)
    
//     const[isOpen, setIsOpen] = useState(false) //used to hold the state of the comment modal
//      function handleLikeClick(){
//         setlikes(likes + 1)
//      }
//      function handleLaughsClick(){
//         setLaughs(laughs + 1)
//      }

     
//     return (

//         <div className='joke-container'>
//             <div className='joke-element'>{props.joke}</div>
//          <div className='joke-icons'>
//             <div className='like-container'>
//             <img
//            src={like}
//            alt=""
//            className="like-image"
//            onClick={handleLikeClick}
//             />
//             <span>{likes}</span>
//             </div>
            
//             <div className='laugh-container'>
//             <img
//            src={laugh}
//            alt=""
//            className="laugh-image"
//            onClick={handleLaughsClick}
//             />
//              <span>{laughs}</span>
//             </div>
            
//             <div>
               
//                <img
//            src={comment}
//            alt=""
//            className={styles.primaryBtn} 
//            onClick={() =>setIsOpen(true)}
//             /> 
//             {isOpen && <Modal setIsOpen={setIsOpen} />}

//             </div>
            
//          </div>
           
//           </div>
        
//     )
// }