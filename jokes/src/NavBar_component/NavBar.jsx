
import {  useEffect,useState } from 'react';
import '../styles/navbar.css'
import Nav from '../components/Nav';
import Form from '../components/Modal/FormModal';
import styles from '../components/Modal/App.module.css';

export default function Navbar()  { 
  const [isNavExpanded, setIsNavExpanded] = useState(false)
   const[isAdd, setIsAdd] = useState(false) 

   function handleSetAdd(){
   setIsAdd((prev) => !prev)
  }

    const NavBar = (
      <nav className="navigation">
      <a href="/" className="brand-name">
        Djoker
      </a>
      <button
       className="hamburger"
      onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">Joke</a>
          </li>
          <li>
            <a href="/contact">Videos</a>
          </li>
          <li>
            <a href="/home">Comedians</a>
          </li>

          <button onClick={handleSetAdd}>Add Joke</button>
          {/* <div>
          <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>Add Joke</button>
          {isOpen && <Form  isOpen={isOpen}/>}
          </div> */}
           
        </ul>
      </div>
      
    </nav>
    );

    return (
      <div> 
      <div style={{display:isAdd === true?"block":"none"}}><Nav/></div>
      <div style={{display:isAdd === true?"none":"block"}}>{NavBar}</div>
      {/* {isAdd?<Nav/>:NavBar} */}
      </div>
    )
  }
  












// import Brand from './logo';
// import { Hamburger} from './logo';
// import { NavLink } from 'react-router-dom'
// import './NavBar.css'
// import { useState } from 'react';

// //Remember we uses states for anything that will change states in the process of rendering the DOM

// const Navbar = () => {
//     const [showNav, setShowNav] = useState(false)
//     const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }

// const toggleNavItems = () => {
//   setShowNav(!showNav)
// }
//     return(
//         <nav className='navbar'>
//             <div className='container'>
//             <div className='logo'>
//                 <Brand/>
//             </div>

//             <div className='menu-icon' onClick={handleShowNavbar}>
//                 <Hamburger/>
//             </div>

//             <div className={`nav-elements ${showNav && 'active'}`}>
//                 <ul>
//                     <li>
//                         <NavLink to="/">Home</NavLink>
//                         </li>
//                     <li>
//                         <NavLink to="/blog">Blog</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/Projects">Projects</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about">About</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/contact">Contact</NavLink>
//                     </li>
//                 </ul>
//             </div>
//             </div>
//         </nav>
//     )
// }
// export default Navbar


// import {  useEffect,useState } from 'react';
// import '../styles/navbar.css'
// import AddJoke from '../components/AddJokeForm';
// import { JokesItems } from '../components/Jokes';
// import axios from 'axios';

// export default function Navbar(props) { 
//   const {Category, Jokes} = JokesItems[props.index];
//   let newJokeLength = Jokes.length;
//     const [isNavExpanded, setIsNavExpanded] = useState(false)
//     const[isAdd, setIsAdd] = useState(false) 
//     let i = 0;
//     //states for handling Posting form data into the Json file

//     const[JsonData, setJsonData] = useState({
//       id:0,
//       punchline:'',
//       setup:'',
//       author_name:'',
//       author_email:'',
//       author_id:'',
//       category_id:0
//     })
      
//     const ChangeHandler = (e) => {
//       setJsonData({[e.target.name] : e.target.value})
      
//     }
    
//     function handleSubmit(e){
//          e.preventDefault();
//          console.log(JsonData.author_name)
//          axios.post("https://api.jokes.digitalrenter.com/api/jokes", JsonData)
//          .then(response => {
//           console.log(response);
//          })
//          .catch(error => {
//           console.log(error);
//          })
//       //   setJsonData({
//       //     id:0,
//       // puchline:'',
//       // setup:'',
//       // author_name:'',
//       // authors_email:'',
//       // authors_id:'',
//       // category_id:0
//       //   })

//     }
//   function handleSetAdd(){
// setIsAdd((prev) => !prev)
// }

// // function handleNewJokeAdded(){ 
// //   const Joke = [...Jokes, {id:newJokeLength + 1, author:authorName,comments:NewJokeComment, joke:newJoke}];
// //   setNewJokeList(Joke);
// // }


//     const RenderNewJoke =(
//       <AddJoke
//         id={JsonData.id}
//         punchline={JsonData.punchline}
//         setup={JsonData.setup}
//         author_id={JsonData.author_id}
//         author_name={JsonData.author_name}
//         author_email={JsonData.author_email}
//         category_id={JsonData.category_id}
//         handleSubmit={handleSubmit}
//         ChangeHandler={ChangeHandler}
//         JsonData={JsonData}
        
       
//       />
//     );

//     const NavBar = (
//       <nav className="navigation">
//       <a href="/" className="brand-name">
//         Djoker
//       </a>
//       <button
//        className="hamburger"
//       onClick={() => {
//           setIsNavExpanded(!isNavExpanded);
//         }}>
//         {/* icon from heroicons.com */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="white"
//         >
//           <path
//             fillRule="evenodd"
//             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       <div
//         className={
//           isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
//         <ul>
//           <li>
//             <a href="/home">Home</a>
//           </li>
//           <li>
//             <a href="/about">Joke</a>
//           </li>
//           <li>
//             <a href="/contact">Videos</a>
//           </li>
//           <li>
//             <a href="/home">Comedians</a>
//           </li>
//             <button onClick={handleSetAdd}>Add Joke</button>
//         </ul>
//       </div>
      
//     </nav>
//     );

//     return (
//       <div> 
//       {/* <div style={{display:isAdd === true?"block":"none"}}>{RenderNewJoke}</div>
//       <div style={{display:isAdd === true?"none":"block"}}>{NavBar}</div> */}
//       {isAdd?RenderNewJoke:NavBar}
//       </div>
//     )
//   }
  












// import Brand from './logo';
// import { Hamburger} from './logo';
// import { NavLink } from 'react-router-dom'
// import './NavBar.css'
// import { useState } from 'react';

// //Remember we uses states for anything that will change states in the process of rendering the DOM

// const Navbar = () => {
//     const [showNav, setShowNav] = useState(false)
//     const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }

// const toggleNavItems = () => {
//   setShowNav(!showNav)
// }
//     return(
//         <nav className='navbar'>
//             <div className='container'>
//             <div className='logo'>
//                 <Brand/>
//             </div>

//             <div className='menu-icon' onClick={handleShowNavbar}>
//                 <Hamburger/>
//             </div>

//             <div className={`nav-elements ${showNav && 'active'}`}>
//                 <ul>
//                     <li>
//                         <NavLink to="/">Home</NavLink>
//                         </li>
//                     <li>
//                         <NavLink to="/blog">Blog</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/Projects">Projects</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about">About</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/contact">Contact</NavLink>
//                     </li>
//                 </ul>
//             </div>
//             </div>
//         </nav>
//     )
// }
// export default Navbar
