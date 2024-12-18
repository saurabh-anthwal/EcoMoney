"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SiDocsdotrs } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa";
import Footer from "../footer/Footer";
import { footer_icons, menu_items } from "@/utils/sidebarData";

const Sidebar = () => {
    {/*all state*/}
    const [activeMenu, setActiveMenu] = useState(1);
    const [isExpanded, setIsExpanded] = useState(true);
    const [showTooltip, setShowTooltip] = useState(false);
    const [clickedTooltip, setClickedTooltip] = useState(null); 
    
    {/* navbar expand function */}
    const handleExpand = ()=>{
        setIsExpanded(!isExpanded);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsExpanded(true);
            } else {
                setIsExpanded(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderMenuItems = (items, bgColor) => {
        return items.map((el) => (
            <div
                className="relative flex items-center cursor-pointer text-md rounded-lg transition-all"
                key={el?.id}
                onMouseEnter={() => setClickedTooltip(el?.id)} 
                onMouseLeave={() => setClickedTooltip(null)}
                onClick={() =>{el?.id == 11 ? handleExpand() : setActiveMenu(el?.id)}}
            >
                <div
                    className={`text-lg p-3 rounded-2xl transition-all ${activeMenu === el?.id
                        ? `${bgColor} text-white shadow-lg`
                        : "text-gray-400 hover:bg-[#1e3c5d] hover:text-white"
                }`}>
                    <div onClick={el?.id == 11 && handleExpand}>
                        {el?.id == 11 ? isExpanded ? el?.icon : <FaChevronRight /> : el?.icon}    
                    </div>
                </div>
                {isExpanded && (
                    <p
                        className={`p-3 text-sm rounded-2xl transition-all w-full ${
                            activeMenu === el?.id
                                ? `${bgColor} text-white shadow-lg`
                                : "text-gray-400 hover:bg-[#1e3c5d] hover:text-white"
                        }`}
                    >
                        {el?.title}
                    </p>
                )}
                
                {!isExpanded && clickedTooltip === el?.id && (
                    <div className="absolute left-14 top-1/2 -translate-y-1/2 text-xs p-2 rounded-lg bg-gradient-to-b from-[#4e7da7] to-[#1b3849] shadow-lg whitespace-nowrap">
                        <div className="rounded-full px-2 py-1 text-white">
                            {el?.title}
                        </div>
                        <div className="absolute -left-1 top-3 border-[#345c74] transform -translate-x-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-t-[#1a4162]"></div>
                    </div>
                )}
            </div>
        ));
    };
    

    return (
        <div className={`relative rounded-2xl flex flex-col gap-14 bg-gradient-to-b from-[#0b305d] to-[#091e3a] h-full p-4 text-md shadow-lg transition-all duration-300 ${isExpanded ? "w-72" : "w-20"}`}>
            {/* logo */}
            <div className="flex items-center gap-2 cursor-pointer text-white font-bold">
                <Image
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-2xl"
                    src="/logo.png"
                    alt="Logo"
                />
                {isExpanded && <p className="text-2xl tracking-wide">EcoMoney</p>}
            </div>

            {/* section */}
            <div className="space-y-4">
                <div className="space-y-2 my-2">
                    {renderMenuItems(menu_items.slice(0, 1), "bg-[#2eb4e9]")}
                </div>

                <div className={`bg-[#244265] rounded-2xl space-y-2 my-2 ${isExpanded ? "w-full" : "w-12" }`}>
                    {renderMenuItems(menu_items.slice(1, 6), "bg-[#3ee991]")}
                </div>

                <div className="space-y-2 my-2">
                    {renderMenuItems(menu_items.slice(6), "bg-[#2eb4e9]")}
                </div>
            </div>

            {/* Footer */}
            <div className="text-gray-400 flex items-center">
                {isExpanded ? (
                    <div className="flex gap-4 text-lg p-3">
                        {footer_icons.map((el) => (
                            <div key={el?.id} className="p-2 border-[1px] border-gray-50 rounded-xl cursor-pointer hover:text-white transition-colors" >
                                {el?.icon}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div onClick={() => setShowTooltip(!showTooltip)} className="text-lg p-3" >
                        <SiDocsdotrs className="cursor-pointer hover:text-white transition-colors" />
                    </div>
                )}
            </div>

            {/* Floating Footer Icons */}
            <div className={`absolute bottom-14 left-4 ${isExpanded ? "hidden" : "block"}`}>
                {showTooltip && <Footer />}
            </div>
        </div>
    );
};

export default Sidebar;
