import Link from "next/link";
import styles from "./navbar-link.module.css"
import { usePathname } from "next/navigation";

export default function NavbarLink ({
    href,
    children,
    className,
}: {
    href: string,
    children: React.ReactNode,
    className?: string,
}) {
    const pathname = usePathname();

    return (
        <div className={`${styles["navbar-link"]} ${className} ${pathname === href ? styles["navbar-link-active"] : styles["navbar-link-inactive"]}`}>
            <Link href={href}>
                {children}
            </Link>
        </div>
    );
}