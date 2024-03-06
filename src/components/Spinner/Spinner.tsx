import React from 'react'
import "./Spinner.css";
function Spinner() {
  return (
    <div>
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="bgBox">
                <div className="oval1"/>
                <div className="oval2"/>
            </div>
        </div>
    </div>
  )
}

export default Spinner