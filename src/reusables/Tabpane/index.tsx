import React from 'react';

const TabPane = ({
    list,
    onChange,
}: {
    list: Array<string>;
    onChange?: (value: string) => void;
}) => {
    const [selectedTab, setSelectedTab] = React.useState(list[0]);

    const handleTabChange = (value: string) => {
        console.log(value);
        setSelectedTab(value);

        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="tab__pane">
            {list.map((item) => (
                <button
                    onClick={() => handleTabChange(item)}
                    key={item}
                    className={`tab__pane--item ${item == selectedTab ? 'active' : ''}`}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default TabPane;
