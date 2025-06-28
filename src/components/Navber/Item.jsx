import React from 'react';

const Item = ({Item,href}) => {
    return (
        <div>
            <a href={href} className="text-accent duration-500 hover:text-emerald-600">{Item}</a>
        </div>
    );
};

export default Item;