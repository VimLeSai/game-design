import ActionButton from "../components/home/action-button";
import GamesSection from "../components/home/games-section";
import WalletCard from "../components/home/wallet-card";
import Layout from "../shared/layout";
import ReferNowCard from "../shared/refer-now";

const popularGames = [
  {
    name: "Card",
    link: "",
    image: "/rectangle-8@2x.png",
  },
  {
    name: "Target",
    link: "",
    image: "/rectangle-9@2x.png",
  },
  {
    name: "Chase",
    link: "",
    image: "/rectangle-10@2x.png",
  },
  {
    name: "Dice",
    link: "",
    image: "/rectangle-11@2x.png",
  },
  {
    name: "Balls",
    link: "",
    image: "/rectangle-12@2x.png",
  },
];

const newGames = [...popularGames];
const Home = () => {
  return (
    <Layout>
      <>
        <section className="flex flex-col justify-start gap-4 md:flex-row">
          <div className="flex flex-col">
            <WalletCard />
            <ActionButton />
          </div>
          <ReferNowCard />
        </section>

        <GamesSection title="Popular" games={popularGames} />
        <GamesSection title="New" games={newGames} />
      </>
    </Layout>
  );
};

export default Home;
