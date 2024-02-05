import React, { FC, ReactNode } from "react";

type SectionProps = {
    title: string;
    children?: ReactNode;
};

const Section: FC<SectionProps> = ({ title, children }) => {
    return (
        <div className="block pt-12 md:flex">
            <div className="p-4 md:w-1/4 ">
                <h1 className="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase">{title}</h1>
            </div>
            <div className=" w-full md:w-2/3 p-4 tracking-widest text-lg text-gray-600 font-light leading-normal">{children}</div>
        </div>
    )
}

export default Section;