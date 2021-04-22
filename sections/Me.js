import React from "react";
import Image from "next/image";
import Divider from "../components/Divider";

const Me = () => {
    return (
        <header
            className="pt-24 pb-24"
            style={{ backgroundImage: "url('/img/background.jpg')" }}
        >
            <div className="container mx-auto items-center flex flex-col">
                <div className="mb-10">
                    <Image
                        src="/img/profile.png"
                        alt="Profile picture of Alex Macrae"
                        width="240"
                        height="240"
                    />
                </div>
                <h1 className="text-7xl leading-10 tracking-wider uppercase font-extrabold text-white">
                    Alex Macrae
                </h1>
                <Divider isLight="true" />
                <p className="text-3xl text-white font-light font-normal">
                    Android Developer - iOS Developer - Linux Lover
                </p>
            </div>
        </header>
    );
};

export default Me;
