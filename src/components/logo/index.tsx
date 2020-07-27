import React from 'react';

type Logo = {
  isSquare?: boolean;
  className?: string;
};

export const Logo: React.FC<Logo> = (props) => {
  const { isSquare = true, className = '' } = props;
  const img = isSquare ? 'logo' : 'logo-no-margin';
  return <img className={className} src={`/images/${img}.svg`} alt="logo" />;
};
