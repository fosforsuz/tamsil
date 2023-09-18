import { motion } from "framer-motion";
import logo from "../assets/logo-1.png";
import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const Navbar = () => {
    const [toggled, setToggled] = useState(false);
    const matches = useMediaQuery("(min-width: 560px)");
    console.log(matches);
    return (
        <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
            <svg
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                width={250}
                height={4}
                viewBox="0 0 250 4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
            >
                <path d="M2 2L428 2" stroke="#282828" strokeLinecap="round" />
            </svg>
            <div>
                <img src={logo.src} alt="logo" className="w-[50px] h-[75px]" />
            </div>
            {/* Title */}

            {matches &&
                <div className="flex gap-12">
                    <a href="/">Ana Sayfa</a>
                    <a href="/about">Hakkında</a>
                    <a href="/price">Fiyat Listesi</a>
                    <a href="/contact">İletişim</a>
                </div>}

            {!matches &&
                <div
                    className="space-y-1 cursor-pointer z-50"
                    onClick={() => setToggled(!toggled)}
                >
                    <motion.span
                        animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                        className="block h-0.5 w-8 bg-black"
                    />
                    <motion.span
                        animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                        className="block h-0.5 w-6 bg-black"
                    />
                    <motion.span
                        animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                        className="block h-0.5 w-4 bg-black"
                    />
                </div>}

            {toggled &&
                !matches &&
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 25 }}
                    className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center"
                >
                    <div className="flex flex-col gap-24">
                        <a href="/">Ana Sayfa</a>
                        <a href="/about">Hakkında</a>
                        <a href="/price">Fiyat Listesi</a>
                        <a href="/contact">İletişim</a>
                    </div>
                </motion.div>}
        </nav>
    );
};
