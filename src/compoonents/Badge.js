import React from "react"

const Badge = (props) => {
    return (
      <span className={`badge badge-${props.type}`}>{props.status}</span>
    )
  }
  
  export default Badge