import styled from "styled-components";
import { getLogins, getSignUps, getUpgrades } from "../../services/api";
import { useRouter } from "next/router";
import UpgradesWidget from "../../components/upgradesWidget";
import { logins, signups, upgrades } from "../../types";

export const ItemContainer = styled.div`
  flex: 4;
  padding: 20px;
`;
export const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ItemAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: indigo;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;

export const ItemUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const ItemUpdateButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: midnightblue;
  color: white;
  font-weight: 600;
`;
export const ItemUpload = styled.div`
  display: flex;
  align-items: center;
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const ShowUser = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ShowUserTop = styled.div`
  display: flex;
  align-items: center;
`;
const ShowUserBottom = styled.div`
  margin-top: 20px;
`;

const FontWeight = styled.span`
  font-weight: "600";
`;
const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
  .showIcon {
    font-size: 16px !important;
  }
  .showInfoTitle {
    margin-left: 0px;
  }
`;
const UpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const LgWidgetContainer = styled.div`
  flex: 3;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const LgWidgetOldPlan = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
`;

const LgWidgetTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const LgWidgetTh = styled.th`
  text-align: left;
`;

const LightTd = styled.td`
  font-weight: 300;
`;

export const getServerSideProps = async () => {
  const res = await await Promise.all([
    getLogins(),
    getSignUps(),
    getUpgrades(),
  ]);
  return { props: { logins: res[0], signups: res[1], upgrades: res[2] } };
};

interface Props {
    logins: logins[],
    signups: signups[],
    upgrades: upgrades[],
}

export default function User({ logins, signups, upgrades }) {
  const router = useRouter();

  return (
    <ItemContainer>
      <UserContainer>
        <ShowUser>
          <ShowUserTop>
            <FontWeight>
              {signups.find((user) => user.id == router.query.id).name}
            </FontWeight>
          </ShowUserTop>
          <ShowUserBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <span className="showInfoTitle">
                {signups.find((user) => user.id == router.query.id).signupDate}
              </span>
            </UserShowInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfo>
              <span className="showInfoTitle">
                {signups.find((user) => user.id == router.query.id).email}
              </span>
            </UserShowInfo>
          </ShowUserBottom>
        </ShowUser>
        <LgWidgetContainer>
          <UpdateTitle>User Activity</UpdateTitle>
          <LgWidgetTable>
            <tbody>
              <tr>
                <LgWidgetTh>Login Device</LgWidgetTh>
                <LgWidgetTh>Login Date</LgWidgetTh>
                <LgWidgetTh> Upgrade Date</LgWidgetTh>
                <LgWidgetTh>Old Plan</LgWidgetTh>
                <LgWidgetTh>Current Plan</LgWidgetTh>
              </tr>
              <tr>
                <LightTd>
                  {
                    logins.find((user) => router.query.id == user.userId)
                      ?.device
                  }
                </LightTd>
                <LightTd>
                  {logins.find((user) => router.query.id == user.userId)?.date}
                </LightTd>
                <LightTd>
                  {upgrades.find((upgrade) => router.query.id == upgrade.userId)
                    ?.upgradeDate || "-"}
                </LightTd>
                <td>
                  <LgWidgetOldPlan
                    style={{ backgroundColor: "#fff0f1", color: "#d95087" }}
                  >
                    {upgrades.find(
                      (upgrade) => router.query.id == upgrade.userId
                    )?.oldPlan || "-"}
                  </LgWidgetOldPlan>
                </td>
                <td>
                  <LgWidgetOldPlan
                    style={{ backgroundColor: "#e5faf2", color: "#3bb077" }}
                  >
                    {upgrades.find(
                      (upgrade) => router.query.id == upgrade.userId
                    )?.newPlan || "-"}
                  </LgWidgetOldPlan>
                </td>
              </tr>
            </tbody>
          </LgWidgetTable>
        </LgWidgetContainer>
      </UserContainer>
    </ItemContainer>
  );
}
