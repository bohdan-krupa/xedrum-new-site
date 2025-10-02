import Logo from '@/components/ui/logo/Logo';
import Link from 'next/link';
import Image from 'next/image';
import {
    FOOTER_SECTIONS,
    FOOTER_MENU_ITEMS,
    FOOTER_SERVICES,
    FOOTER_COPYRIGHT,
    SOCIAL_LINKS,
    CONTACT_ICONS,
} from './constants';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.logoSection}>
                        <div className={styles.logoContent}>
                            <div className={styles.logoWrapper}>
                                <Logo />
                            </div>
                            <div className={styles.socialIcons}>
                                {SOCIAL_LINKS.map((link, index) => (
                                    <Link key={index} href={link.href} className={styles.socialIcon}>
                                        <Image
                                            src={link.imagePath}
                                            alt={link.alt}
                                            width={24}
                                            height={24}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <p className={styles.copyright}>
                            {FOOTER_COPYRIGHT}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{FOOTER_SECTIONS.MENU}</h3>
                        <ul className={styles.menuList}>
                            {FOOTER_MENU_ITEMS.map((item) => (
                                <li key={item.href} className={styles.menuItem}>
                                    <Link
                                        href={item.href}
                                        className={styles.menuLink}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{FOOTER_SECTIONS.SERVICES}</h3>
                        <ul className={styles.menuList}>
                            {FOOTER_SERVICES.map((service) => (
                                <li key={service.href} className={styles.menuItem}>
                                    <Link
                                        href={service.href}
                                        className={styles.menuLink}
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>{FOOTER_SECTIONS.CONTACT_US}</h3>
                        <div className={styles.contactList}>
                            {CONTACT_ICONS.map((icon, index) => (
                                <div key={index} className={styles.contactItem}>
                                    <Link href={icon.href}>
                                        <Image
                                            src={icon.imagePath}
                                            alt={icon.alt}
                                            width={24}
                                            height={24}
                                            className={styles.contactIcon}
                                        />
                                    </Link>
                                    <span className={styles.contactText}>
                                        {icon.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;