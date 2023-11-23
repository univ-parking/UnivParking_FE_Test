import styled from "styled-components";
import Link from "next/link";

interface Props {
  title: string;
}

const ParkingSlotSelection = ({ title }: Props) => {
  return (
    <ParkingSlotSelectionContainer>
      <p>{title}</p>
    </ParkingSlotSelectionContainer>
  );
};

const ParkingSlotSelectionContainer = styled.div`
  width: 70vw;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #dedede;
  border-radius: 10px;
  box-shadow: 0px 1px 1px black;
  cursor: pointer;

  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default ParkingSlotSelection;
