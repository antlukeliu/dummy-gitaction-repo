import React, { FC } from "react";

interface LinkProps {
  href: string;
}

const StyledLink: FC<LinkProps> = (props) => {
  const { href, children } = props;
  return <a href={href}>{children}</a>;
};

export default StyledLink;
