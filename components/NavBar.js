import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter()
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>About</a>
            </Link>
            <style jsx>{`
                .active {
                    color: #4798fc
                }
                nav {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50px;
                    gap: 10px;
                }
            `}</style>
        </nav>
    )
}