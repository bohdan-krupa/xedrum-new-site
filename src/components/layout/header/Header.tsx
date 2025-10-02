'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { NAVIGATION_ITEMS, HEADER_BUTTONS } from './constants';
import ArrowButton from '@/components/ui/buttons/arrowButton/ArrowButton';
import styles from './Header.module.scss';
import Logo from '@/components/ui/logo/Logo';

const Header = () => {
    const pathname = usePathname();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const textColorClass = pathname === "/" ? "text-black" : "text-white"

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className={`${styles.header} hidden lg:block`}>
            <nav className={styles.nav} aria-label="Top">
                <div className={styles.navContainer}>
                    <Logo />
                    <div className={styles.navItems}>
                        {NAVIGATION_ITEMS.map((item) => {
                            const isActive = pathname === item.href;

                            if (item.label === 'Services') {
                                return (
                                    <div key={item.href} className={styles.servicesContainer} ref={dropdownRef}>
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className={`${styles.servicesButton} ${textColorClass} ${isActive ? styles.active : ''}`}
                                        >
                                            {item.label}
                                            <svg
                                                className={`${styles.arrowIcon} ${isServicesOpen ? styles.open : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isServicesOpen && (
                                            <div className={styles.dropdown}>
                                                <div className={styles.dropdownContent}>
                                                    <div className={styles.dropdownItem}>
                                                        <svg className={styles.itemIcon} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        AI/ML Consulting
                                                    </div>
                                                    <div className={styles.dropdownItem}>
                                                        <svg className={styles.itemIcon} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                                        </svg>
                                                        RAG as a Service
                                                    </div>
                                                    <div className={styles.dropdownItem}>
                                                        <svg className={styles.itemIcon} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                                        </svg>
                                                        Dedicated AI Team
                                                    </div>
                                                    <div className={styles.dropdownItem}>
                                                        <svg className={styles.itemIcon} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        AI Agents & GenAI
                                                    </div>
                                                    <div className={styles.dropdownItem}>
                                                        <svg className={styles.itemIcon} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                                        </svg>
                                                        IT Staff Augmentation
                                                    </div>
                                                    <div className={styles.dropdownItem}>
                                                        <svg className={styles.itemIcon} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                                        </svg>
                                                        UI/UX Design
                                                    </div>
                                                    <div className={styles.dropdownItem}>
                                                        <svg className={styles.itemIcon} fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                        </svg>
                                                        BOT Team
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${styles.navLink} ${textColorClass} ${isActive ? styles.active : ''}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                    <ArrowButton title={HEADER_BUTTONS.CONTACT} />
                </div>
            </nav>
        </header>
    );
}

export default Header;
