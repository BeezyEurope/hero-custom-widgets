/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import getBulletsSize from "./getBulletsSize";
import getArrayOfNumber from "./getArrayOfNumber";
import BulletSizes from "../enums/BulletSizes";
import BulletsIndex from "../enums/BulletsIndex";

const BIG = null;
const { MEDIUM, SMALL } = BulletSizes;
const { FIRST_INDEX, LAST_INDEX } = BulletsIndex;
const ITEMS: number[] = getArrayOfNumber(5);

type bulletsSizeParams = {
  index: number;
  active: number;
  numberOfBullets?: number;
};

function bulletSizes({
  active,
  index,
  numberOfBullets = ITEMS.length,
}: bulletsSizeParams) {
  return getBulletsSize({
    active,
    index,
    numberOfBullets,
  });
}

describe("Test getBulletsSize", () => {
  /* -- TEST WITH 4 ITEMS -- */
  test("Number of items <= 4 should return every bullet as big", () => {
    const fourItems: number[] = getArrayOfNumber(4);
    const active = 1;

    for (const index in fourItems) {
      const bulletSize = bulletSizes({
        active,
        index: +index,
        numberOfBullets: fourItems.length,
      });

      expect(bulletSize).toEqual(BIG);
    }
  });

  /* -- TESTS WITH 5 ITEMS -- */

  test("If first or second item is active, bullets 1, 2 and 3 should be big, 4 medium and 5 small", () => {
    const active = FIRST_INDEX;

    for (const index in ITEMS) {
      const bulletSize = bulletSizes({
        active,
        index: +index,
      });

      +index <= 2 && expect(bulletSize).toEqual(BIG);
      +index === 3 && expect(bulletSize).toEqual(MEDIUM);
      +index === LAST_INDEX && expect(bulletSize).toEqual(SMALL);
    }
  });

  test("If third item is active, bullets 1 and 5 should be medium and bullets 2, 3 and 4, big", () => {
    const active = 2;

    for (const index in ITEMS) {
      const bulletSize = bulletSizes({
        active,
        index: +index,
      });

      (+index === FIRST_INDEX || +index === LAST_INDEX) &&
        expect(bulletSize).toEqual(MEDIUM);

      +index >= 1 && +index <= 3 && expect(bulletSize).toEqual(BIG);
    }
  });

  test("If fourth or fifth item is active, bullets 3, 4 and 5 should be big, 2 medium and 1 small", () => {
    const active = LAST_INDEX;

    for (const index in ITEMS) {
      const bulletSize = bulletSizes({
        active,
        index: +index,
      });

      +index === FIRST_INDEX && expect(bulletSize).toEqual(SMALL);
      +index === 1 && expect(bulletSize).toEqual(MEDIUM);
      +index >= 2 && expect(bulletSize).toEqual(BIG);
    }
  });
});
