import React from 'react'

export default ({
    children, label, id, colsSize
}) => {
    return (
        <div className={`col-md-${colsSize || 12}`}>
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                {children}
            </div>
        </div>
    )
}