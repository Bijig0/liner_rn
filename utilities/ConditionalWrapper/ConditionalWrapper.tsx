import React from "react";

type Props = {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactElement;
  children: React.ReactNode;
};

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: Props): React.ReactElement => (
  <>{condition ? wrapper(children) : children}</>
);

export default ConditionalWrapper;
