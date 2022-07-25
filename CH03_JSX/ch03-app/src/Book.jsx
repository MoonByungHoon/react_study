import React from "react";

function Book (props){
  let info = {
    color : 'white',
    backgroundColor : 'crimson',
    display : 'flex'
  };

  let img = {
    width : '150px',
    borderRadius : '100px',
    
  }
  let urlImg = 'https://bimage.interpark.com/partner/goods_image/7/4/0/9/249927409g.jpg'
  return(
    <div style = {info}>
      <img src={urlImg} style = {img}/>
      <div>
        <h2>{`이 책의 이름은 ${props.name} 입니다.`}</h2>
        <h3>{`이 책은 총 ${props.page} 페이지 입니다.`}</h3>
      </div>
    </div>
  );
};

export default Book;