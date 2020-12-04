import React from 'react';

const Search = ({ searchTerm, searchCallback }) => {
    return (
        <div className="mb-5">
            <h2>Search</h2>

            <div className="flex gap-2">
                <input
                    id="search"
                    type="text"
                    className="rounded-md p-3 w-full outline-none shadow-md focus:ring-2 focus:ring-primary"
                    value={searchTerm}
                    onChange={searchCallback}
                />
                <button className="rounded-md p-3 bg-primary text-primary-darker font-bold shadow-md border-primary border-2 focus:outline-none">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
