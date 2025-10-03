import Link from "next/link"
import Image from "next/image"
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
                <Image
                    src="/images/logo/xedrum.svg"
                    alt="Xedrum"
                    width={26}
                    height={20}
                    priority
                />
                <span className="text-p font-outfit text-white font-semibold">Xedrum</span>
            </Link>
        </div>
    )
}

export default Logo