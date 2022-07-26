import React from 'react'

const styles = {
  avartar: {
    width : 100,
    height : 100,
  }
};

function Avatar(props) {
  return (
    <>
      <img src={props.url} alt='avarta-img' style={styles.avartar} />
    </>
  )
}

export default Avatar