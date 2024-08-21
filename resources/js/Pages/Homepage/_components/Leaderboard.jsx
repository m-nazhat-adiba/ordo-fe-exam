import BasicButton from "@/Components/button/BasicButton";
import clsx from "clsx";

const LeaderboardCard = ({ data, rank }) => {
    const tierIcons = (value) => {
        let resolvedSrc;
        let resolvedTier;

        if (value < 20) {
            resolvedSrc = "/img/tier/5.png";
            resolvedTier = "Sapling Savior";
        } else if (value < 50) {
            resolvedSrc = "/img/tier/4.png";
            resolvedTier = "Tree Titan";
        } else if (value < 100) {
            resolvedSrc = "/img/tier/3.png";
            resolvedTier = "Mangrove Master";
        } else if (value < 200) {
            resolvedSrc = "/img/tier/2.png";
            resolvedTier = "Guardian of The Grove";
        } else {
            resolvedSrc = "/img/tier/1.png";
            resolvedTier = "Mangrove Maven";
        }

        return { resolvedSrc, resolvedTier };
    };

    const { resolvedSrc, resolvedTier } = tierIcons(data.tree);

    const rankNumber = parseInt(rank, 10);
    const rankStyles = clsx("rank", {
        "rank-top": rankNumber >= 1 && rankNumber <= 3,
        "rank-4": rankNumber === 4,
        "rank-5": rankNumber === 5,
        "rank-6": rankNumber >= 6,
    });

    return (
        <div className="leaderboard-card">
            <div className={rankStyles}>
                <p>{rank}</p> {/* Adjust rank logic if needed */}
            </div>
            <div className="profile">
                <div className="img-wrapper">
                    <img src={resolvedSrc} alt={resolvedTier} />
                </div>
                <div className="name-wrapper">
                    <p>{resolvedTier}</p>
                    <h5>{data.name}</h5>
                </div>
            </div>
            <div className="details">
                <div>
                    <img src="/img/tree.png" alt="Tree Icon" />
                </div>
                <p>
                    {data.tree} <span>pohon</span>
                </p>
            </div>
        </div>
    );
};

const Leaderboard = ({ data }) => {
    const items = data.sort((a, b) => b.tree - a.tree);

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
                {items.map((item, index) => (
                    <LeaderboardCard
                        data={item}
                        key={index}
                        rank={`0${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
