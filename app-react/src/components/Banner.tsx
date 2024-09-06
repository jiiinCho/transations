import React, { memo } from 'react';

type BannerProps = {
  text: string;
  isAlert: boolean;
};
const Banner = memo(({ text, isAlert }: BannerProps) => (
  <>
    {text && (
      <p className={`banner ${isAlert ? 'text-red-800' : 'text-green-800'}`}>
        {text}
      </p>
    )}
  </>
));
export default Banner;
