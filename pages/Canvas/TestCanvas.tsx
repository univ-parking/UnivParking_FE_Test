import { useRef, useEffect, useState } from "react";
import { testCarPosition } from "./parkingData";

interface ParkingData {
  array: boolean[] | undefined;
}

interface IsParking {
  id: number;
  carX: number;
  carY: number;
  vertical: boolean;
  disable: boolean;
}

const TestCanvas = ({ array }: ParkingData) => {
  const parkingSlot = useRef<HTMLCanvasElement>(null);
  const [isParking, setIsParking] = useState<IsParking[]>();

  useEffect(() => {
    console.log(`테스트 캔버스에서 찍는 어레이 ${array}`);
    let tmpArray: IsParking[] = [];

    array?.forEach((car, index) => {
      if (car) {
        tmpArray.push(
          testCarPosition[testCarPosition.findIndex((car) => car.id === index)]
        );
      }
    });

    setIsParking(tmpArray);
  }, [array]);

  useEffect(() => {
    const canvas = parkingSlot.current;
    const context = canvas?.getContext("2d");

    //초기 주차장 크기
    const initialWidth = 414;
    const initialHeight = 645;
    //비율 계산
    const aspectRatio = initialWidth / initialHeight;

    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = document.documentElement;

      if (clientWidth / clientHeight > aspectRatio && canvas) {
        canvas.width = clientHeight * aspectRatio;
        canvas.height = clientHeight;
      } else if (canvas && clientWidth / clientHeight < aspectRatio) {
        canvas.width = clientWidth;
        canvas.height = clientWidth / aspectRatio;
      }

      //Cavas에 그리기
      if (canvas) {
        context?.fillRect(0, 0, canvas.width, canvas.height);
      }

      const parkingSlotImage = new Image();
      parkingSlotImage.src = "/images/test_parking.svg";

      const carImage = new Image();
      carImage.src = "/images/car.svg";

      parkingSlotImage.onload = () => {
        if (canvas) {
          context?.drawImage(
            parkingSlotImage,
            0,
            0,
            canvas.width,
            canvas.height
          );
        }
      };

      carImage.onload = () => {
        isParking?.forEach((car) => {
          if (canvas) {
            const transformedX = (car.carX / initialWidth) * canvas.width;
            const transformedY = (car.carY / initialHeight) * canvas.height;
            const transformedImageWidth = (46 / initialWidth) * canvas.width;
            const transformedImageHeight = (96 / initialHeight) * canvas.height;

            context?.drawImage(
              carImage,
              transformedX,
              transformedY,
              transformedImageHeight,
              transformedImageWidth
            );
          }
        });
      };
    };

    //초기 한 번 호출하여 Canvas를 현재 브라우저 크기로 설정
    resizeCanvas();

    //브라우저 크기가 변경될 때마다 Canvas 크기 조정
    window.addEventListener("resize", resizeCanvas);

    //컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isParking]);

  return <canvas ref={parkingSlot} />;
};

export default TestCanvas;
