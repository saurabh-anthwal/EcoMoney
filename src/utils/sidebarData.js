import {FaTachometerAlt,FaWallet,FaChartBar,FaCogs,FaBoxOpen,FaLock,FaChevronLeft,FaTelegram,FaTwitter,FaReddit,FaPinterest} from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { BsFillLightningChargeFill } from "react-icons/bs";

export const menu_items = [
    { id: 1, icon: <FaTachometerAlt />, title: "Dashboard" },
    { id: 2, icon: <FaCogs />, title: "Swoop" },
    { id: 3, icon: <FaBoxOpen />, title: "Add Liquidity" },
    { id: 4, icon: <FaCogs />, title: "Manage Liquidity" },
    { id: 5, icon: <BsFillLightningChargeFill />, title: "Ther Stake" },
    { id: 6, icon: <FaLock />, title: "Pending Liquidity" },
    { id: 7, icon: <FaChartPie />, title: "Vesting" },
    { id: 8, icon: <FaWallet />, title: "Your Wallet" },
    { id: 9, icon: <FaCogs />, title: "Thornode" },
    { id: 10, icon: <FaChartBar />, title: "Stats" },
    { id: 11, icon: <FaChevronLeft />, title: "Collapse Sidebar" },
];

export const footer_icons = [
    { id: 1, icon: <FaTelegram /> },
    { id: 2, icon: <FaTwitter /> },
    { id: 3, icon: <FaReddit /> },
    { id: 4, icon: <FaPinterest /> },
];