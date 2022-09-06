import NavBar from "./NavBar";

export default function Layout({children}) {
    return (
        <div id="content">
        <NavBar />
        {children}
        </div>
    )
}