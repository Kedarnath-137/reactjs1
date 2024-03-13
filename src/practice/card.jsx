
import Style23 from './practice.module.css'
import profilepic from './jai sree ram.avif'
function Card12() {
  return (
    <div className={Style23.card} >
      <img
        className={Style23.cardimg1}
        alt="img" 
        src={profilepic}
       
      ></img>
      <h2 className={Style23.cardtitle}>Kedarnath</h2>
      <p className={Style23.card_desc}>
        i have done B-tech in B V Raju Institute of Technology
      </p>
    </div>
  );
}

export default Card12;
