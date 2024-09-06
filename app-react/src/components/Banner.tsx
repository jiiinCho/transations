import React, { memo } from 'react';

type BannerProps = {
  text: string;
  isAlert: boolean;
};
const Banner = memo(({ text, isAlert }: BannerProps) => (
  <>
    {text && (
      <p className={`banner ${isAlert ? 'error' : 'success'}`}>{text}</p>
    )}
  </>
));
export default Banner;
