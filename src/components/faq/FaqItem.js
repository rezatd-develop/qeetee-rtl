"use client"

import React from "react";
import { Collapse } from "reactstrap";
import Image from "next/image";

import expandIcon from '../../files/images/icons/expand_icon.png';
import collapseIcon from '../../files/images/icons/collapse_icon.png';


function FaqItem({ key, title, content }) {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    return (
        <>
            <div key={key} className="w-100 pb-3 mt-3 border-bottom">
                <div className="d-flex justify-content-between">
                    <div className="font-size-1000 prompt-font">{title}</div>
                    <Image src={collapseOpen ? collapseIcon : expandIcon}
                        width={15}
                        onClick={(e) => setCollapseOpen(!collapseOpen)} id="collapseExample" />
                </div>
                <Collapse className="info-color prompt-font font-size-750" isOpen={collapseOpen}>
                    {content}
                </Collapse>
            </div>
        </>
    );
}

export default FaqItem;