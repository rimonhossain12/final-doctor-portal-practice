import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white">{children}</button>
        </div>
    );
};

export default PrimaryButton;