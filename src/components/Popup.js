import React from 'react'
import '../App.css'
//pass through boolean if popup is true it will show the popup
//if false shows "" or nothing
function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div classNmae="popup-inner"></div>
        <button className="close-btn">Close</button>
        {props.children}
    </div>
  ) : "";
}

export default Popup