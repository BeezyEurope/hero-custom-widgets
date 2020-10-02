import React from "react";
import * as timeago from "timeago.js";

type TimeAgoProps = {
  className?: string;
  date: string;
};

const TimeAgo: React.FC<TimeAgoProps> = ({
  className,
  date,
}: TimeAgoProps): React.ReactElement => {
  const getMessage = (): string => {
    const dateInstance = new Date(date);

    return timeago.format(dateInstance, "es-US");
  };
  return <time className={className}>{getMessage()}</time>;
};

TimeAgo.defaultProps = {
  className: "",
};

export default React.memo(TimeAgo);
