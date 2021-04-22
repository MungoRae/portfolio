import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Divider = (params) => {
    const lineClasses = `max-w-xs h-1 w-full ${
        params.isLight ? "bg-white" : "bg-primary"
    }`;
    const iconClasses = `text-4xl ${params.isLight ? "text-white" : "text-primary"}`
    return (
        <div className="flex mt-5 mb-6 w-full justify-center items-center">
            <div className={`${lineClasses} mr-4`}></div>
            <div className={iconClasses}>
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={`${lineClasses} ml-4`}></div>
        </div>
    );
};

export default Divider;
