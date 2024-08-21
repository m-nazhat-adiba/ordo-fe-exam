import BasicButton from "@/Components/button/BasicButton";
import Table from "./_components/Table";
import { Icon } from "@iconify/react";

const Sponsorship = () => {
    const tierObj = [
        { name: "Seedling Scout", src: "img/tier/6.png" },
        { name: "Sapling Savior", src: "img/tier/5.png" },
        { name: "Tree Titan", src: "img/tier/4.png" },
        { name: "Mangrove Master", src: "img/tier/3.png" },
        { name: "Guardian of the Grove", src: "img/tier/2.png" },
        { name: "Mangrove Maven", src: "img/tier/1.png" },
    ];
    const tierList = tierObj.map((item, key) => (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "4px",
                alignItems: "center",
            }}
            key={key}
        >
            <img style={{ width: "27px", height: "27px" }} src={item.src} />
            <p>{item.name}</p>
        </div>
    ));

    const checkIcon = (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Icon
                style={{ height: "30px", width: "30px" }}
                icon="simple-line-icons:check"
            />
        </div>
    );

    const dummyDataPersonal = {
        schema: [
            { name: "Membership Tier" },
            { name: "Min. Seeds" },
            { name: "Min. Buy" },
            { name: "Benefits" },
            { name: "Donors" },
        ],
        datarows: [
            [tierList[0], "5 Seeds", "IDR 75K", "Badge", "4,900 Donors"],
            [
                tierList[1],
                "10 Seeds",
                "IDR 150K",
                "Badge + Pin",
                "4,300 Donors",
            ],
            [
                tierList[2],
                "20 Seeds",
                "IDR 300K",
                "Badge + Pin",
                "15,000 Donors",
            ],
            [
                tierList[3],
                "50 Seeds",
                "IDR 750K",
                "Badge + Pin + Bag",
                "5,000 Donors",
            ],
            [
                tierList[4],
                "100 Seeds",
                "IDR 1,500K",
                "Badge + Pin + Bag",
                "300 Donors",
            ],
            [
                tierList[5],
                "200 Seeds",
                "IDR 3,000K",
                "Badge + Pin + Bag",
                "10 Donors",
            ],
        ],
        action: (
            <BasicButton variant="secondary" size="small">
                <p>Support Our Mission</p>
                <div style={{ width: "18px", height: "18px" }}>
                    <Icon
                        style={{ height: "100%", width: "100%" }}
                        icon="material-symbols:chevron-right"
                    />
                </div>
            </BasicButton>
        ),
    };

    const dummyDataCorporate = {
        schema: [
            { name: "Benefits" },
            { name: "Eco Trailblazer" },
            { name: "Green Inovators" },
            { name: "Eco Vanguard" },
        ],
        datarows: [
            ["Price", "15 Million IDR", "30 Million UDR", "45 Million IDR"],
            [
                "CO2 Sequestration",
                "22.5 ton/year",
                "45 ton/year",
                "67.5 ton/year",
            ],
            ["Number of Trees", "1000 Trees", "2000 Trees", "3000 Trees"],
            ["Logo on JCI Banner", checkIcon, checkIcon, checkIcon],
            [
                "Logo on Communal Stainless Plate",
                checkIcon,
                checkIcon,
                checkIcon,
            ],
            ["Considered as Main Sponsor", checkIcon, checkIcon, checkIcon],
            ["Dedicated Stainless Plate", "", checkIcon, checkIcon],
            ["Report Update on Planted Trees", "", checkIcon, checkIcon],
            ["Logo on Event Clothings", "", "", checkIcon],
        ],
        actionFooter: {
            title: "Make a Donation",
            element: (
                <div style={{ width: "fit-content", marginInline: "auto" }}>
                    <BasicButton variant="tertiary" size="small">
                        <p>Support Our Mission</p>
                        <div style={{ width: "18px", height: "18px" }}>
                            <Icon
                                style={{ height: "100%", width: "100%" }}
                                icon="material-symbols:chevron-right"
                            />
                        </div>
                    </BasicButton>
                </div>
            ),
        },
    };

    return (
        <div className="sponsorship-wrapper">
            <div className="title-wrapper">
                <h1>Sponsorship Packages</h1>
                <p>
                    Our sponsorship package offers branding, promotional
                    opportunities, and visibility at our event, ideal for
                    enhancing company presence and community engagement.
                </p>
            </div>
            <div className="packages-wrapper">
                <h2>Personal Sponsorship Package</h2>
                <Table data={dummyDataPersonal} />
            </div>
            <div className="divider"></div>
            <div className="corporate-wrapper">
                <h2>Corporate Sponsorship Package</h2>
                <Table data={dummyDataCorporate} />
            </div>
        </div>
    );
};

export default Sponsorship;
