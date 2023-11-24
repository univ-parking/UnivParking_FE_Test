import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ParkingInfo from "../Components/ParkingInfo";
import ParkingCanvas from "../Canvas/ParkingCanvas";
import CanvasTest from "../Canvas/CanvasTest";
import Header from "../Components/Header";

interface Detail {
  id: number;
  AN: number;
  PC: boolean;
  PT: number;
  created_data: Date;
  updated_Data: Date;
  type: number;
}

interface Data {
  count: number;
  array: boolean[];
  detail: Detail[];
}

const Parking = () => {
  const router = useRouter();
  const parkingId = router.query.Parking;

  const [parkingData, setParkingData] = useState<Data>();
  const [parkingChk, setParkingChk] = useState<boolean[]>();
  const [canParking, setCanParking] = useState<number>();
  const [canDisableParking, setCanDisableParking] = useState<number>();
  const [disable, setDisable] = useState<number>(0);

  const fetchData = () => {
    axios
      .get(`http://api.univ-parking.xyz/v1/parking/${parkingId}/?format=json`)
      .then((response) => {
        console.log(response.data.data);
        setParkingData(response.data.data);
        setParkingChk(response.data.data.array);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    //parkingId 변경시 API 호출 및 장애인 주차구역 설정 로직
    if (parkingId === "1") setDisable(2);
    else if (parkingId === "2") setDisable(1);

    fetchData();

    const interValId = setInterval(fetchData, 3000);

    return () => clearInterval(interValId);
  }, [parkingId]);

  useEffect(() => {
    //주차 가능 구역 추출
    console.log(parkingData?.array);
    setCanParking(
      parkingData?.array.filter((item) => {
        return !item;
      }).length
    );
    checkDisableParking(parkingId);
  }, [parkingData]);

  const checkDisableParking = (id: any) => {
    if (id === "1") {
      if (parkingData?.array[16] && parkingData?.array[17]) {
        setCanDisableParking(0);
      } else if (parkingData?.array[16] || parkingData?.array[17]) {
        setCanDisableParking(1);
      } else {
        setCanDisableParking(2);
      }
    } else if (id === "2") {
      if (parkingData?.array[5]) setCanDisableParking(0);
      else setCanDisableParking(1);
    }
  };

  return (
    <ParkingContainer>
      <Header
        title={
          parkingId === "1" ? "실시간 모형 주차장" : "실시간 전산관 주차장"
        }
      />
      <ParkingInfo
        count={parkingData?.count}
        disable={disable}
        disableParking={canDisableParking}
        canParking={canParking}
      />

      <CanvasContainer>
        {parkingId === "1" && <CanvasTest array={parkingChk} />}
        {parkingId === "2" && <ParkingCanvas array={parkingChk} />}
      </CanvasContainer>
    </ParkingContainer>
  );
};

const ParkingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CanvasContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Parking;
