import React from 'react'
import {
    FaTelegram,
    FaTwitter,
    FaReddit,
    FaPinterest,
} from "react-icons/fa";

const Footer = () => {
    const footer_icons = [
        { id: 1, icon: <FaTelegram /> },
        { id: 2, icon: <FaTwitter /> },
        { id: 3, icon: <FaReddit /> },
        { id: 4, icon: <FaPinterest /> },
    ]
    return (
        <div className="relative flex gap-4 text-lg p-2 rounded-2xl justify-center w-full bg-gradient-to-b from-[#4e7da7] to-[#1b3849] shadow-lg">
            {footer_icons.map((el) => (
                <div
                    key={el.id}
                    className="p-1 border-[1px] border-gray-300 rounded-full bg-white text-gray-700 hover:bg-[#2eb4e9] hover:text-white hover:border-[#2eb4e9] transition-all duration-300 shadow-md"
                >
                    {el.icon}
                </div>
            ))}

            <div className="absolute -bottom-2 left-4 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#1a4162]"></div>
        </div>
    )
}

export default Footer
