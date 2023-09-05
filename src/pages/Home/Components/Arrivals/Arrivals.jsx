const Arrivals = (props) => {
    return ( 
        <div className="arrivals__card">
              <img className="arrivals__img" src={props.img} alt="" />
               <p className="arrivals__card-title">{props.title}</p>
        </div>
     );
}
 
export default Arrivals;