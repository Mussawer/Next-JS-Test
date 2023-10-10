import { getLogins, getSignUps, getUpgrades } from "../services/api";
import Featured from "../components/featured";
import styled from "styled-components";
import SignupsWidget from "../components/signupsWidget";
import UpgradesWidget from "../components/upgradesWidget";
import { logins, signups, upgrades } from "../types";

export const getStaticProps = async () => {
  const res = await Promise.all([getLogins(), getSignUps(), getUpgrades()]);
  return { props: { logins: res[0], signups: res[1], upgrades: res[2] } };
};

const HomeContainer = styled.div`
  flex: 4;
`;

const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;

interface Props {
  logins: logins[],
  signups: signups[],
  upgrades: upgrades[]
}

export default function Home({ logins, signups, upgrades }: Props) {
  let featured = [
    {
      title: "Logins",
      count: logins.length,
    },
    {
      title: "Signups",
      count: signups.length,
    },
    {
      title: "Upgrades",
      count: upgrades.length,
    },
  ];
  return (
      <HomeContainer>
        <Featured featuredData={featured} />
        <HomeWidgets>
          <SignupsWidget newMembers={signups}/>
          <UpgradesWidget upgrades={upgrades} signups={signups} />
        </HomeWidgets>
      </HomeContainer>
  );
}
