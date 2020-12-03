import React from 'react';
import './SummaryGrid.css';

class SummaryGrid extends React.Component {
    render() {
        return (
            <div className="SummaryGrid border-acc-green border-2 mb-5 rounded-md p-2">
                <h3 className="text-acc-green font-heading text-xl mb-3">
                    {this.props.title}
                </h3>
                <div className="flex flex-wrap justify-center flex-row gap-2">
                    <div>
                        <img src="https://dummyimage.com/85" />
                    </div>
                    <div>
                        <img src="https://dummyimage.com/85" />
                    </div>
                    <div>
                        <img src="https://dummyimage.com/85" />
                    </div>
                    <div>
                        <img src="https://dummyimage.com/85" />
                    </div>
                    <div>
                        <img src="https://dummyimage.com/85" />
                    </div>
                    <div>
                        <img src="https://dummyimage.com/85" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SummaryGrid;
