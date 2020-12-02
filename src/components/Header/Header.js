import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="Header bg-gradient-to-r from-primary-darker to-primary-dark pb-2">
                <h1 className="font-heading text-primary text-5xl p-10 bg-primary-darker">
                    Spotify List - Find New Music!
                </h1>
            </header>
        );
    }
}

export default Header;
