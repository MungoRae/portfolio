import React from "react";
import Divider from "./Divider";

const SectionHeader = (params) => {
    const headerClasses = `text-5xl text-center uppercase font-bold mb-0 ${params.isLight ? 'text-white' : 'text-primary'}`;
    return (
        <div>
            <h2 className={headerClasses}>{params.header}</h2>
            <Divider isLight={params.isLight} />
        </div>
    );
};

export default SectionHeader;
