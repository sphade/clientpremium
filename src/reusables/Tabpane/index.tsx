import React from 'react';

const TabPane = ({ list }: { list: Array<string> }) => {
    return (
        <div className="tab__pane">
            {list.map((item, index) => (
                <button key={item} className={`tab__pane--item ${index == 0 ? 'active' : ''}`}>
                    {item}
                </button>
            ))}
        </div>
    );
};

export default TabPane;
