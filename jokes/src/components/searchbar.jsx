import "../styles/search.css"
import search from '../assets/search.jpg'

export default function Search(props){ 
    function handleCategoryIndex(e){
        props.setCategoryIndex(e.target.value)
    }
    return(
        <div className="search-container" >
           
             <select
             className="select-box"
             value={props.CategoryIndex}
             onChange={handleCategoryIndex}
             >
                <option value={1}>Family</option>
                <option value={2}>Relationship</option>
                <option value={3}>Africa</option>
                <option value={4}>Political</option>
                <option value={5}>Emotional</option>
             </select>

            <button 
            // type="submit"
            onClick={()=> alert(props.CategoryIndex)}
            className="search-button"
             >
            <img 
            src={search}
            alt=''
           className="search-icon"
            />
            </button>
        </div>
    )
}

