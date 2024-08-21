import Footer from "@/Components/navigation/Footer";
import NavBar from "@/Components/navigation/NavBar";

export default function HomeLayout({ children }) {
    return (
        <div className="home-layout">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}
