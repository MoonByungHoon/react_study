import React from 'react'
import Avatar from './Avatar'
import Dtime from './Dtime'

function Comment(props) {
  return (
    <>
      <div className="comment">
        <div className="user-info container">
          {/* <img src="KakaoTalk_20220713_193816695.png" alt="avar" /> */}
          <Avatar url={props.avartaUrl} />
          <div className="user-info-name container">
            {props.name}
          </div>
        </div>
        <div className="comment-txt container">
          <p>
            {props.comment}
          </p>
          <div className='comment-date'>
            <Dtime />
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment