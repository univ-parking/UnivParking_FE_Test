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

export const carPosition: IsParking[] = [
  {
    id: 0,
    carX: 132,
    carY: 155,
    vertical: true,
    disable: false,
  },
  {
    id: 1,
    carX: 190,
    carY: 155,
    vertical: true,
    disable: false,
  },
  {
    id: 2,
    carX: 255,
    carY: 225,
    vertical: false,
    disable: false,
  },
  {
    id: 3,
    carX: 255,
    carY: 282,
    vertical: false,
    disable: false,
  },
  {
    id: 4,
    carX: 255,
    carY: 342,
    vertical: false,
    disable: false,
  },
  {
    id: 5,
    carX: 255,
    carY: 412,
    vertical: false,
    disable: true,
  },
];

export const testCarPosition: IsParking[] = [
  {
    id: 0,
    carX: 18,
    carY: 496,
    vertical: false,
    disable: false,
  },
  {
    id: 1,
    carX: 18,
    carY: 440,
    vertical: false,
    disable: false,
  },
  {
    id: 2,
    carX: 18,
    carY: 384,
    vertical: false,
    disable: false,
  },
  {
    id: 3,
    carX: 18,
    carY: 328,
    vertical: false,
    disable: false,
  },
  {
    id: 4,
    carX: 18,
    carY: 272,
    vertical: false,
    disable: false,
  },
  {
    id: 5,
    carX: 18,
    carY: 216,
    vertical: false,
    disable: false,
  },
  {
    id: 6,
    carX: 18,
    carY: 155,
    vertical: false,
    disable: false,
  },
  {
    id: 7,
    carX: 18,
    carY: 99,
    vertical: false,
    disable: true,
  },
  {
    id: 8,
    carX: 138,
    carY: 496,
    vertical: false,
    disable: true,
  },
  {
    id: 9,
    carX: 138,
    carY: 440,
    vertical: false,
    disable: true,
  },
  {
    id: 10,
    carX: 138,
    carY: 384,
    vertical: false,
    disable: true,
  },
  {
    id: 11,
    carX: 138,
    carY: 328,
    vertical: false,
    disable: true,
  },
  {
    id: 12,
    carX: 138,
    carY: 272,
    vertical: false,
    disable: true,
  },
  {
    id: 13,
    carX: 138,
    carY: 216,
    vertical: false,
    disable: true,
  },
  {
    id: 14,
    carX: 138,
    carY: 155,
    vertical: false,
    disable: true,
  },
  {
    id: 15,
    carX: 138,
    carY: 99,
    vertical: false,
    disable: false,
  },
  {
    id: 16,
    carX: 270,
    carY: 485,
    vertical: false,
    disable: true,
  },
  {
    id: 17,
    carX: 270,
    carY: 400,
    vertical: false,
    disable: true,
  },
  {
    id: 18,
    carX: 270,
    carY: 328,
    vertical: false,
    disable: false,
  },
  {
    id: 19,
    carX: 270,
    carY: 270,
    vertical: false,
    disable: false,
  },
  {
    id: 20,
    carX: 270,
    carY: 212,
    vertical: false,
    disable: false,
  },
  {
    id: 21,
    carX: 270,
    carY: 155,
    vertical: false,
    disable: false,
  },
  {
    id: 22,
    carX: 270,
    carY: 95,
    vertical: false,
    disable: false,
  },
];
