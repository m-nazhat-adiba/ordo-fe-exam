import BasicButton from "@/Components/button/BasicButton";

const LeaderboardCard = () => {
    return (
        <div className="leaderboard-card">
            <div className="rank">
                <p>01</p>
            </div>
            <div className="profile">
                <div className="img-wrapper">
                    <img src="/img/rank-1.png" />
                </div>
                <div className="name-wrapper">
                    <p>Mangrove Maven</p>
                    <h5>Budi Hartono</h5>
                </div>
            </div>
            <div className="details">
                <div>
                    <img src="/img/tree.png" />
                </div>
                <p>
                    350<span>pohon</span>
                </p>
            </div>
        </div>
    );
};

const Leaderboard = () => {
    const items = Array.from({ length: 6 });
    return (
        <div className="leaderboard-wrapper">
            <div className="title">
                <h2>Leaderboard</h2>
                <div className="button-wrapper">
                    <BasicButton variant="primary" outline={true} size="medium">
                        Most Donation
                    </BasicButton>
                    <BasicButton
                        variant="tertiary"
                        outline={true}
                        disable={true}
                        size="medium"
                    >
                        Most Recent
                    </BasicButton>
                </div>
            </div>
            <div className="list">
                {items.map((_, index) => (
                    <LeaderboardCard key={index} /> // Use index or a unique id for the key prop
                ))}{" "}
            </div>
        </div>
    );
};

export default Leaderboard;
