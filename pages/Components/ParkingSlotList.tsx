import styled from "styled-components";
import ParkingSlotSelection from "./ParkingSlotSelection";
import Link from "next/link";

export interface Selection {
  title: string;
  link: string;
}

const parkingSlotData: Selection[] = [
  {
    title: "실시간 전산관 주차장",
    link: "parking/2",
  },
  {
    title: "실시간 모형 주차장",
    link: "parking/1",
  },
];

const ParkingSlotList = () => {
  return (
    <ParkingSlotListContainer>
      {parkingSlotData.map((data, index) => (
        <Link key={index} href={data.link}>
          <ParkingSlotSelection key={index} title={data.title} />
        </Link>
      ))}
    </ParkingSlotListContainer>
  );
};

const ParkingSlotListContainer = styled.div`
  height: 25vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default ParkingSlotList;
