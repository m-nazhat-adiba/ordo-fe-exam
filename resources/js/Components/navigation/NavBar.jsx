import BasicButton from "../button/BasicButton";

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src="/img/logo.png" />
            <li className="nav-link">
                <ul>About Green Haven</ul>
                <ul>Event Detail</ul>
                <ul>Our Sponsors</ul>
                <ul>Leaderboard</ul>
            </li>
            <div>
                <BasicButton variant="primary" outline={true} size="medium">
                    Plant a Mangrove
                </BasicButton>
            </div>
        </nav>
    );
};

export default NavBar;
