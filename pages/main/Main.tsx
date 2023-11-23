import styled from "styled-components";
import ParkingSlotList from "../Components/ParkingSlotList";
import Image from "next/image";

const Main = () => {
  return (
    <MainContainer>
      <Image
        src={"/images/logo.svg"}
        width={285}
        height={151}
        alt={"차대 로고"}
      />
      <p>원하는 주차장을 선택하여 차대를 경험해보세요.</p>
      <ParkingSlotList />
    </MainContainer>
  );
};
const MainContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
  }
`;
export default Main;
