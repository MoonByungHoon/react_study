import React from "react";

const styles = {
  card: {
    width: "18rem",
    marginRight: 1,
  },
};

function Card(props) {
  // const title = props.title;
  // const content = props.content;
  // const img = props.img;

  return (
    <>
      <div className="card" style={styles.card}>
        <img src={`${props.img}`} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <a href="#" className="btn btn-primary">
            Go detail
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
