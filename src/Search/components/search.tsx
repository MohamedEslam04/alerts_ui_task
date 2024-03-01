import React from 'react'
import '../styles/search.css'

export const Search = (): JSX.Element => {
    return (
        <>
            <header className="header">
                <div className="title">ALERTS</div>
                <div className="search-box">
                    <input type="text" placeholder="Search..."/>
                    <button>Search</button>
                </div>
                <div className="notification-icon">
                    <i className="fas fa-bell"></i>
                </div>
            </header>
        </>
    )
}
