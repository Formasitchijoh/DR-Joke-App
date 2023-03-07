
import '../styles/comment.css'
export default function Comment(props){
    return (
        <div className="comment-container">
            <label className="comment-label">Enter Comment</label>
           <div className="comment">
            <input value={props.comment} onChange={props.handleComment} className="comment-input"></input>
             <img
             src='https://png.pngtree.com/element_our/sm/20180620/sm_5b29c1e7b8dd3.jpg'
             alt=''
             onClick={props.handleCommentSend}
             />
           </div>
           <ul className='comment-list'>
        {props.commentList.map(commentItem => (
          <li key={commentItem.id}>{commentItem.comment}</li>
        ))}
      </ul>
           
        </div>
    )
}
// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);
//   const[Comment, setComment] = useState('')
//   const[CommentList, setCommentList] = useState([])
//   function handleComment(e){
//     setComment(e.target.value);
//   }
//   function handleCommentSend(){
//     setComment('');
   
//     setCommentList([...CommentList,{id:nextId++, Comment:Comment}])
//   }

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setName('');
//         artists.push({
//           id: nextId++,
//           name: name,
//         });
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setName('');
//         artists.push({
//           id: nextId++,
//           name: name,
//         });
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
