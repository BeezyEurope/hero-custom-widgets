import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

import {
  StyledMainContainer,
  StyledPosts,
} from "./Social.styles";

import Tabs from "./Tabs/Tabs";
import Bullets from "../../components/Bullets/Bullets";
import SocialEnum from "./SocialEnum";
import { UseSocialPosts } from "./hooks/useSocial";
import ErrorMessage from "./Error";
import Post from "./Post";
import swipeConfig from "./swipeConfig";
import Loading from "./Loading/Loading";

export type SocialProps = {
  loading: boolean;
  user: string;
  posts: UseSocialPosts[];
  onSelectedType: (type: SocialEnum) => void;
  error?: boolean;
};

const Social: React.FC<SocialProps> = ({
  loading,
  posts,
  onSelectedType,
  error,
}: SocialProps): React.ReactElement => {
  const [active, setActive] = useState<number>(0);

  const [width, setWidth] = useState<number>(0);

  const mainElement = useRef<HTMLDivElement>();

  const marginLeftSwipe = useRef<number>(0);

  const [swipping, setSwipping] = useState<boolean>(false);

  const [selectedIcon, setSelectedIcon] = useState<SocialEnum>(
    SocialEnum.TWITTER
  );

  const handleBulletOnClick: (id: number) => void = useCallback(
    (id) => {
      setActive(id);

      marginLeftSwipe.current = -100 * id;

      mainElement.current.style.transform = `translateX(${marginLeftSwipe.current}vw)`;
    },
    [setActive]
  );

  const handleOnClickTabs = useCallback(
    (type: SocialEnum): void => {
      setSelectedIcon(type);
      onSelectedType(type);

      setActive(0);

      mainElement.current &&
        mainElement.current.style &&
        mainElement.current.style &&
        (mainElement.current.style.transform = "translateX(0)");

      marginLeftSwipe.current = 0;
    },
    [setSelectedIcon, setActive, onSelectedType]
  );

  const handlers = useSwipeable(
    swipeConfig({
      length: posts.length,
      mainElement,
      marginLeftSwipe,
      setActive,
      setSwipping
    })
  );

  const onRefresh = (e: Event) => {
    e.preventDefault();
    onSelectedType(selectedIcon);
  };

  useLayoutEffect(() => {
    const onResize = () => {
      const newWidth =
        (mainElement.current &&
          mainElement.current.getBoundingClientRect &&
          mainElement.current.getBoundingClientRect().width) ||
        0;

      setWidth(newWidth);
    };
    window.addEventListener("resize", onResize);

    !loading && onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [loading]);

  const isFixed:boolean= (swipping || error || loading);

  return (
    <StyledMainContainer fixed={isFixed} {...handlers}>
      <Tabs active={selectedIcon} onClick={handleOnClickTabs} />
      {loading && <Loading />}
      {error && <ErrorMessage onRefresh={onRefresh} />}
      {!loading && posts.length > 0 && (
        <StyledPosts ref={mainElement} fixed={swipping}>
          {posts.map((post, key) => {
            return (
              <Post
                key={`${selectedIcon}${key}`}
                createdAt={post.createdAt}
                link={post.link}
                text={post.text}
                user={post.user}
                width={width}
              />
            );
          })}
        </StyledPosts>
      )}
      {!(error || loading) &&
        <Bullets
          active={active}
          numberOfBullets={posts.length}
          onClick={handleBulletOnClick}
        />
      }
    </StyledMainContainer>
  );
};

export default React.memo(Social);
