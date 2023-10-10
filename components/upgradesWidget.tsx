import styled from "styled-components";
import { signups, upgrades } from "../types";

const LgWidgetContainer = styled.div`
  flex: 3;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
const LgWidgetTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
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
const LgWidgetUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const LightTd = styled.td`
  font-weight: 300;
`;

interface Props {
    upgrades: upgrades[];
    signups: signups[];
}

const UpgradesWidget = ({ upgrades, signups }: Props) => {
  return (
    <LgWidgetContainer>
      <LgWidgetTitle>Upgrades</LgWidgetTitle>
      <LgWidgetTable>
        <tbody>
          <tr>
            <LgWidgetTh>Customer</LgWidgetTh>
            <LgWidgetTh>Date</LgWidgetTh>
            <LgWidgetTh>Old Plan</LgWidgetTh>
            <LgWidgetTh>Current Plan</LgWidgetTh>
          </tr>
          {upgrades &&
            upgrades.map((upgrade) => (
              <tr>
                <LgWidgetUser>
                  <span>
                    {
                      signups.find((signup) => signup.id === upgrade.userId)
                        .name
                    }
                  </span>
                </LgWidgetUser>
                <LightTd>{upgrade.upgradeDate}</LightTd>
                <td>
                  <LgWidgetOldPlan
                    style={{ backgroundColor: "#fff0f1", color: "#d95087" }}
                  >
                    {upgrade.oldPlan}
                  </LgWidgetOldPlan>
                </td>
                <td>
                  <LgWidgetOldPlan
                    style={{ backgroundColor: "#e5faf2", color: "#3bb077" }}
                  >
                    {upgrade.newPlan}
                  </LgWidgetOldPlan>
                </td>
              </tr>
            ))}
        </tbody>
      </LgWidgetTable>
    </LgWidgetContainer>
  );
};

export default UpgradesWidget;
