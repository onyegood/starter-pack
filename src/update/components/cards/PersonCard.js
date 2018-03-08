import React from "react";
import propTypes from "prop-types";

const PersonCard = ({ users }) => (
  <div className="container" style={{height: "100vh"}}>
     <div className="row align-items-center">
      { users.map( user => (
      			<div className="col-md-3" key={user.id}>
      				<div className="card">
                <div className="user-avatar">
                  <img src={user.image} className="img-circle" alt={user.title}
                  style={{height: "150px", margin: "auto", padding: "20px", width: "150px", borderRadius: "50%"}} />
                </div>
      					<div className="card-header">
                 <h4>{user.title}</h4>
                </div>
      					<div className="card-body">
      						 <p>{user.topic_detail}</p>
      					</div>
      				</div>
      	   </div>

      )) }
   </div>
 </div>
);

PersonCard.propTypes = {
    users: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      topic_detail: propTypes.string.isRequired,
      image: propTypes.string.isRequired
    })).isRequired
};

export default PersonCard;
