import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="Header bg-gradient-to-l from-primary-darker via-primary-darker to-primary-dark pb-2">
                <h1 className="font-heading text-5xl p-10 bg-black   ">
                    <span className="text-gradient bg-gradient-to-r from-red-400 via-acc-pink to-primary">
                        Spotify List - Find New Music!
                    </span>
                </h1>
            </header>
        );
    }
}

export default Header;
