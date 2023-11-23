import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ParkingInfo from "../Components/ParkingInfo";
import ParkingCanvas from "../Canvas/ParkingCanvas";
import CanvasTest from "../Canvas/CanvasTest";

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

  // useEffect(() => {
  //   // 컴포넌트가 마운트될 때 setInterval 호출
  //   const intervalId = setInterval(refresh, 5000);

  //   // 컴포넌트가 언마운트될 때 clearInterval 호출하여 메모리 누수 방지
  //   return () => clearInterval(intervalId);
  // }, []); // 빈 배열을 전달하여 마운트 및 언마운트 시에만 실행

  // const refresh = () => {
  //   // 페이지를 새로고침하는 방법
  //   window.location.reload();
  // };

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
      <ParkingInfo
        count={parkingData?.count}
        disable={disable}
        disableParking={canDisableParking}
        canParking={canParking}
      />

      {parkingId === "1" && <CanvasTest array={parkingChk} />}
      {parkingId === "2" && <ParkingCanvas array={parkingChk} />}
    </ParkingContainer>
  );
};

const ParkingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Parking;
