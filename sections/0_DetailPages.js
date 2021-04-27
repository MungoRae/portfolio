import React from "react";
import PortfolioModal from "../components/PortfolioModal";

const DetailPages = (props) => {
    return (
        <div>
            {props.items.map((item, index) => (
                <PortfolioModal key={index} item={item} open={props.current == item.id} onClose={props.onClose} />
            ))}
        </div>
    );
};

export default DetailPages;
