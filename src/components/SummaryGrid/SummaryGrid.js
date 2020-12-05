import React from 'react';

const SummaryGrid = ({ list, title }) => {
    const thumbnails = list.map((item) => {
        return (
            <div key={item}>
                <img src="https://dummyimage.com/80" />
            </div>
        );
    });

    return (
        <div className="SummaryGrid lg:max-w-lg lg+:max-w-sm border-acc-green border-2 mb-5 rounded-md p-2">
            <h3 className="text-acc-green font-heading text-xl mb-3">
                {title}
            </h3>
            <div className="flex flex-wrap justify-center flex-row gap-2">
                {thumbnails}
            </div>
        </div>
    );
};

export default SummaryGrid;
