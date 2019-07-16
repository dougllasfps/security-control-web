import React from 'react'

export default function DashBoardBox({
    count, title, severity, icon
}){
    return (
        <div className={`small-box bg-${severity || 'info'}`}>
              <div className="inner">
                <h3>{count}</h3>

                <p>{title}</p>
              </div>
              <div className="icon">
                <i className={`fa fa-${icon}`}></i>
              </div>
              <a href="#" class="small-box-footer">More info <i className="fa fa-arrow-right"></i></a>
        </div>
    )
}

