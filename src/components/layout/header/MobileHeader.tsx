'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { NAVIGATION_ITEMS, HEADER_BUTTONS } from './constants';
import Logo from '@/components/ui/logo/Logo';
import ArrowButton from '@/components/ui/buttons/arrowButton/ArrowButton';
import BurgerIcon from '@/components/ui/icons/burger-icon';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@/components/ui/icons/close-icon';
import { SOCIAL_LINKS } from '../footer/constants';
import Image from 'next/image';

const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
};

const MobileHeader = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);
    return (
        <div className='lg:hidden relative z-40'>
            <div className={`${menuOpen ? "hidden" : ""} fixed flex w-full py-5
            rounded-b-2xl backdrop-blur-xs px-2 justify-between bg-white/14 border-b-1 border-white`}>
                <Logo />
                <div className='flex flex-row gap-2 items-center'>
                    <ArrowButton title={HEADER_BUTTONS.CONTACT} />
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className='p-2 focus:outline-none'
                        aria-label='Open menu'
                    >
                        <BurgerIcon />
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black z-30"
                            onClick={() => setMenuOpen(false)}
                        />

                        <motion.nav
                            key="nav"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={menuVariants}
                            transition={{ type: "spring", stiffness: 260, damping: 26 }}
                            className="fixed top-0 right-0 h-full w-4/5 bg-white z-40 shadow-lg p-5"
                        >

                            <div className='flex flex-row gap-2 items-center justify-between'>
                                <ArrowButton title={HEADER_BUTTONS.CONTACT} />
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="rounded-full p-2 border-1 border-[#ADADAD]"
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                            <div className='flex flex-col h-full justify-between py-6'>
                                <div className='flex flex-col gap-2'>
                                    {NAVIGATION_ITEMS.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={`text-p py-2 px-4 font-inter font-medium w-fit rounded-full
                                        ${pathname === item.href ?
                                                    'bg-green-light' : ''}`}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    {SOCIAL_LINKS.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-primary"
                                        >
                                            <Image
                                                src={link.imagePath}
                                                alt={link.alt}
                                                width={13}
                                                height={13}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </div >
    );
};

export default MobileHeader;
