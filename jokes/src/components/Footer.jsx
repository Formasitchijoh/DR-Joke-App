
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/insta.jpeg'
import '../styles/footer.css'
export default function  Footer(){

    return(
        <footer className='foot'>
         <div className="social-media">
           <img
           src={facebook}
           alt=''
           className='facebk'
           />
            <img
           src={twitter}
           alt=''
           className='twitter'
           />
            <img
           src={instagram}
           alt=''
           className='insta'
           />
         </div>

         <ul className='home-pricing'>
            <li>Home</li>
            <li>Feature</li>
            <li>Pricing</li>

         </ul>

        </footer>
    )
}