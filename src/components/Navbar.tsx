import { motion } from "framer-motion";
import logo from "../assets/logo-1.png";
import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const navMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15
        }
    },
    hidden: {
        opacity: 0
    }
};
const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
};
const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: 0 }
};
const navLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "Blog", href: "/blog", id: 2 },
    { name: "Contact", href: "/contact", id: 3 }
];

export const Navbar = () => {
    const [toggled, setToggled] = useState<boolean>(false);
    const matches = useMediaQuery("(min-width: 1280px)");

    return (
        <nav className="relative mx-8  flex justify-between items-center border-b-2 pt-6 pb-6 font-medium md:mx-16 lg:mx-32">
            {/* <svg
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                width={250}
                height={4}
                viewBox="0 0 250 4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
            >
                <path d="M2 2L428 2" stroke="#282828" strokeLinecap="round" />
            </svg> */}
            <div>
                <img src={logo.src} alt="logo" className="w-[100x] h-[125px]" />
            </div>

            <h1>
                Tamsil
            </h1>

            {matches &&
                <div className="flex gap-12">
                    <a href="/" key="home">
                        Ana Sayfa
                    </a>
                    <a href="/about" key="about">
                        Hakkımızda
                    </a>
                    <a href="/price" key="price">
                        Fiyat Listesi
                    </a>
                    <a href="/galery" key="galery">
                        Galeri
                    </a>
                    <a href="/contact" key="contact">
                        İletişim
                    </a>
                </div>}

            {!matches &&
                <div
                    className="space-y-1.5 cursor-pointer z-50"
                    onClick={() => setToggled(!toggled)}
                >
                    <motion.span
                        animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                        className="block h-0.5 w-8 bg-black"
                    />
                    <motion.span
                        animate={{ width: toggled ? 0 : 24 }}
                        className="block h-0.5 w-6 bg-black"
                    />
                    <motion.span
                        animate={{
                            rotateZ: toggled ? -45 : 0,
                            y: toggled ? -8 : 0,
                            width: toggled ? 32 : 16
                        }}
                        className="block h-0.5 w-4 bg-black"
                    />
                </div>}

            {toggled &&
                !matches &&
                <div className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
                    <motion.div
                        variants={navMotion}
                        animate="visible"
                        initial="hidden"
                        className="flex flex-col gap-24"
                    >
                        <motion.div variants={itemMotion}>
                            <a href="/" key="home">
                                Ana Sayfa
                            </a>
                        </motion.div>
                        <motion.div variants={itemMotion}>
                            <a href="/about" key="about">
                                Hakkımızda
                            </a>
                        </motion.div>
                        <motion.div variants={itemMotion}>
                            <a href="/price" key="price">
                                Fiyat Listesi
                            </a>
                        </motion.div>
                        <motion.div variants={itemMotion}>
                            <a href="/galery" key="galery">
                                Galeri
                            </a>
                        </motion.div>
                        <motion.div variants={itemMotion}>
                            <a href="/contact" key="contact">
                                İletişim
                            </a>
                        </motion.div>
                    </motion.div>
                </div>}
        </nav>
    );
};
