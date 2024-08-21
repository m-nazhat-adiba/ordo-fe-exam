import HeroChip from "./_components/HeroChip";
import Leaderboard from "./_components/Leaderboard";
import LogoCarousel from "./_components/LogoCarousel";
import ProgressCard from "./_components/ProgressCard";

const Hero = () => {
    const leaderboardData = [
        { name: "Budi Hartanto", tree: 350 },
        { name: "Dewi Sartika", tree: 330 },
        { name: "Eko Wahyudi", tree: 200 },
        { name: "Rina Kartika", tree: 190 },
        { name: "Agus Prasetyo", tree: 140 },
        { name: "Irfan Setiawan", tree: 80 },
    ];

    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                <section className="header">
                    <div className="header-detail">
                        <HeroChip />
                        <h1 className="title">
                            Green Horizons Await, Join Us in Planting 10,000
                            Mangroves!
                        </h1>
                        <ProgressCard />
                    </div>
                    <div className="img-wrapper">
                        <img src="img/hero-bg.png" />
                    </div>
                </section>
                <section className="leaderboard">
                    <Leaderboard data={leaderboardData} />
                </section>
            </div>
            <LogoCarousel />
        </div>
    );
};

export default Hero;
