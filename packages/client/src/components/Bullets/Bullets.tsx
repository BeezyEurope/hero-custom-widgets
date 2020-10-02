/* eslint-disable jsx-a11y/aria-role */
import React from "react";
import {
  StyledNavigationList,
  StyledNavigationListItem,
  StyledNavigationButton,
} from "./Bullets.styles";

import getArrayOfNumber from "./utils/getArrayOfNumber";
import getBulletsSize from "./utils/getBulletsSize";

type BulletsType = {
  active: number;
  numberOfBullets: number;
  onClick(id: number): void;
};

const Bullets: React.FC<BulletsType> = ({
  active,
  numberOfBullets,
  onClick,
}: BulletsType): React.ReactElement => {
  const bullets: number[] = getArrayOfNumber(numberOfBullets);

  const handleOnClick: (event, item) => void = (event, item) => {
    event.preventDefault();
    onClick(item);
  };

  return (
    <StyledNavigationList>
      {bullets.map((item) => (
        <StyledNavigationListItem key={item}>
          <StyledNavigationButton
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleOnClick(event, item)
            }
            role={`navigation${active === item ? "-active" : ""}`}
            active={active === item}
            size={getBulletsSize({ index: item, active, numberOfBullets })}
          />
        </StyledNavigationListItem>
      ))}
    </StyledNavigationList>
  );
};

export default React.memo(Bullets);
