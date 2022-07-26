import React from 'react'

function Dtime() {
  let dd = new Date().toLocaleString();

  return (
    <div>
      {dd}
    </div>
  )
}

export default Dtime