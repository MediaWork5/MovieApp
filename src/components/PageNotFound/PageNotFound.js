import React from 'react';
import NotFoundimage from '../../images/pnf.jpg'
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <div className="NotFound">
            <img src={NotFoundimage} alt="pageNotFound" />
        </div>
    );
};

export default PageNotFound;