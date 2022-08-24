import React from 'react'

function Header({ title, subtitle }) {
    return (
        <>
            <div className="text1">{title}</div>
            <div className="text2">{subtitle}</div>
        </>
    )
}

export default Header