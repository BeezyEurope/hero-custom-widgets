/* eslint-disable jsx-a11y/aria-role */
import React from "react";
import Twitter from "../../../components/Icons/Twitter";
import Facebook from "../../../components/Icons/Facebook";
import LinkedIn from "../../../components/Icons/Linkedin";
import SocialEnum from "../SocialEnum";
import {
  StyledIconsList,
  StyledIconsListItem,
  StyledIconsListButton,
} from "./Tabs.styles";

type PropsTabs = {
  onClick(type: SocialEnum): void;
  active: SocialEnum;
};

const Tabs: React.FC<PropsTabs> = ({
  onClick,
  active,
}: PropsTabs): React.ReactElement => {
  return (
    <StyledIconsList>
      <StyledIconsListItem>
        <StyledIconsListButton
          type="button"
          onClick={() => onClick(SocialEnum.TWITTER)}
          active={SocialEnum.TWITTER === active}
          role="twitter-selection"
        >
          <Twitter />
        </StyledIconsListButton>
      </StyledIconsListItem>
      <StyledIconsListItem>
        <StyledIconsListButton
          type="button"
          onClick={() => onClick(SocialEnum.FACEBOOK)}
          active={SocialEnum.FACEBOOK === active}
          role="facebook-selection"
        >
          <Facebook />
        </StyledIconsListButton>
      </StyledIconsListItem>
      <StyledIconsListItem>
        <StyledIconsListButton
          type="button"
          onClick={() => onClick(SocialEnum.LINKEDIN)}
          active={SocialEnum.LINKEDIN === active}
          role="linkedin-selection"
        >
          <LinkedIn />
        </StyledIconsListButton>
      </StyledIconsListItem>
    </StyledIconsList>
  );
};

export default React.memo(Tabs);
