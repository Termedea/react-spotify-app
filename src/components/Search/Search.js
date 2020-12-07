import React from 'react';

const Search = ({ searchTerm, searchCallback, description }) => {
    return (
        <div className="mb-5">
            <h2 className="section-header">Search</h2>
            <p className="paragraph-description">{description}</p>
            <form
                className="flex gap-2"
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log('Submitted');
                }}
            >
                <input
                    id="search"
                    type="text"
                    className="rounded-md p-2 w-full outline-none shadow-md focus:ring-none focus:border-primary semi-transparent-item"
                    value={searchTerm}
                    onChange={searchCallback}
                />
                <button
                    className="rounded-md p-2 text-primary-darker font-bold shadow-md 
                            border-primary border-2 focus:outline-none bg-primary hover:bg-blue-300"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
