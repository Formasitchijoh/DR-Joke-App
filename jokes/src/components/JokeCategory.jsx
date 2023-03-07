import { JokesItems } from "./Jokes"
import '../styles/category.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Carousel/style.css'
export default function Categorys(){ 

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
       
      };

    return (
        <>
      {/* <div className="category"> */}
        <Slider {...settings}>
          {JokesItems.map((JokesItem, index) => (
        <li className="category-item">
           <img 
           src={JokesItem.Category.imageUrl}
           alt={JokesItem.Category.Description}
           />
           <p>{JokesItem.Category.name}</p>
        </li>
    ))}
        </Slider>
      {/* </div> */}
          </>
        
    )
}
