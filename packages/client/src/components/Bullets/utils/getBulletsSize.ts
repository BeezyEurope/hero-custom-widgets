import BulletsIndex from "../enums/BulletsIndex";
import BulletSizes from "../enums/BulletSizes";

type bulletsSizeParams = {
  index: number;
  active: number;
  numberOfBullets: number;
};

function getBulletsSize({
  index,
  active,
  numberOfBullets,
}: bulletsSizeParams): string {
  const BIG = null;
  const { MEDIUM, SMALL } = BulletSizes;
  const { FIRST_INDEX, LAST_INDEX } = BulletsIndex;

  if (numberOfBullets <= 4) return BIG;

  const small = index > active + 2 || index < active - 2;

  const medium =
    (active === FIRST_INDEX && index === active + 3) ||
    (active > FIRST_INDEX &&
      active < LAST_INDEX &&
      (index === active + 2 || index === active - 2)) ||
    (active === LAST_INDEX && index === active - 3);

  return (!!medium && MEDIUM) || (!!small && SMALL) || BIG;
}

export default getBulletsSize;
