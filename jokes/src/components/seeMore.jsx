import '../styles/seeMore.css'
export default function SeeMore(props){
    return (
        <button
         className="seemore-container"
         onClick={props.handleShowMore}
         >SeeMore</button>
    )
}