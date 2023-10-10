import { useRouter } from 'next/router'
import styled from "styled-components";
import { signups } from '../types';

const SmWidgetContainer = styled.div`
  flex: 1;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;
const SmWidgetTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const SmWidgetList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  .SmWidgetListItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
  }
`;
const SmWidgetUser = styled.div`
  display: flex;
  flex-direction: column;
  .SmWidgetUsername {
    font-weight: 600;
  }
  .SmWidgetUserTitle {
    font-weight: 300;
  }
  .SmWidgetSignupDate {
    font-weight: 200;
  }
`;
const SmWidgetButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

interface Props {
  newMembers: signups[]
}

const SignupsWidget = ({ newMembers }: Props) => {
  const router = useRouter()

  return (
    <SmWidgetContainer>
      <SmWidgetTitle>New Members</SmWidgetTitle>
      <SmWidgetList>
        {newMembers &&
          newMembers.map((member) => (
            <li key={member.id} className="SmWidgetListItem">
              <SmWidgetUser>
                <span className="SmWidgetUsername">{member.name}</span>
                <span className="SmWidgetUserTitle">{member.email}</span>
                <span className="SmWidgetSignupDate">{member.signupDate}</span>
              </SmWidgetUser>
              <SmWidgetButton onClick={() => router.push(`/users/${member.id}`)}>Display</SmWidgetButton>
            </li>
          ))}
      </SmWidgetList>
    </SmWidgetContainer>
  );
};

export default SignupsWidget;
