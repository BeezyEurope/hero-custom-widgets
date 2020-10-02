import React from "react";
import useSocial, { UseSocial, UseSocialParams } from "./hooks/useSocial";

import Social from "./Social";
import getParamsByFields from "./utils/getParamsByFields";

type SocialContainerProps = {
  queryString?: string;
};

const SocialContainer: React.FC<SocialContainerProps> = ({
  queryString,
}: SocialContainerProps): React.ReactElement => {
  const useSocialParam: UseSocialParams = getParamsByFields(
    ["user"],
    queryString
  );

  const { posts, loading, useSelectedType, error }: UseSocial = useSocial(
    useSocialParam
  );

  return (
    <Social
      loading={loading}
      posts={posts}
      user={useSocialParam.user}
      onSelectedType={useSelectedType}
      error={error}
    />
  );
};

SocialContainer.defaultProps = {
  queryString: window.location.search,
};

export default SocialContainer;
