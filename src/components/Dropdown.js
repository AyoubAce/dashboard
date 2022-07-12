import React, { useRef } from 'react'

const Dropdown = ({icon,badge, user, renderItems, contentData}) => {
  const buttonRef= useRef(null)
  const contentRef= useRef(null)
 
  document.addEventListener("click", (e)=>{
            // click toggle
        if(buttonRef.current && buttonRef.current.contains(e.target)){
            contentRef.current.classList.toggle("active")
        }
        else if(contentRef.current && !contentRef.current.contains(e.target)){
                contentRef.current.classList.remove("active")
            
        }
    })


  return (
    <div className='dropdown'>
    <button ref={buttonRef} className='dropdown-btn'>
        {icon && icon}
        {badge && <span>{badge}</span>}
        {user && user()}
    </button>
    <div className='dropdown-content' ref={contentRef}>
    {
        contentData && renderItems && contentData.map((item,index)=>{
          return renderItems(item, index)
        }) 
    }
    </div>
    </div>
  )
}

export default Dropdown