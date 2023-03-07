

import { useEffect, useState } from "react"

export default function Test(){  
const[showAllJoke, setAllJoke] = useState([])

let categoryUrl = "https://api.jokes.digitalrenter.com/api/jokes"
let displayCategory;
 function PullCategory(){
  fetch(categoryUrl)
  .then(response => response.json())
   .then(responseData  => {
    displayCategory = responseData.map((response) => {
      return (
       <p key={response.id}>{response.punchline}</p>
      )
    })
    console.log(displayCategory)
    setAllJoke(displayCategory)
   })
}

useEffect(() =>{
  PullCategory()
},[])
        
    return (
        <div>
            <p>Hello this is the page where i will lay my Json</p>
            <div>
                {showAllJoke}
            </div>
        </div>
    )
}

// option 1

// const[showPunchline, setShowPunchline] = useState('')

// let apiUrl = 'https://api.jokes.digitalrenter.com/api/jokes'
// let displayData;
//     function PullJson(){
//         fetch(apiUrl)
//         .then(response => response.json())
//         .then(responseData => {
//             displayData = responseData.map(function(joke) {
//                 return(
//                     <p>{joke.punchline}</p>
//                 )
//             })
//             console.log(responseData);
//             setShowPunchline(displayData)
//         })
//         //This data is not renderes unles with a state because it is using a promise that receives the data only when the data is available it 
      
//     }


//     useEffect(() => {
//         PullJson()

//     })