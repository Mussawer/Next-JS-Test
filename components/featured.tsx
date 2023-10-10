import styled from "styled-components";

const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const FeaturedTitle = styled.span`
  font-size: 20px;
`;
const FeaturedCountContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  .featuredCount {
    font-size: 30px;
    font-weight: 600;
  }
  .featuredRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }
  .featuredIcon.negative {
    color: red;
  }
`;
const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;
type featured = {
  title: string;
  count: number;
};
interface Props {
  featuredData: featured[];
}
const Featured = ({ featuredData }: Props) => {
  return (
    <FeaturedContainer>
      {featuredData &&
        featuredData.map((item, index) => (
          <FeaturedItem key={index}>
            <FeaturedTitle>{item.title}</FeaturedTitle>
            <FeaturedCountContainer>
              <span className="featuredCount">{item.count}</span>
            </FeaturedCountContainer>
            <FeaturedSub>Compared to Previous Month</FeaturedSub>
          </FeaturedItem>
        ))}
    </FeaturedContainer>
  );
};

export default Featured;
