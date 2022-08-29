import React from "react";
import ContentLoader from "react-content-loader";

const AvatarLoader: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <ContentLoader
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    height="100%"
    speed={2}
    width="100%">
    <circle
      cx="38"
      cy="38"
      r="22"
    />

    {!isMobile ? (
      <>
        <rect
          height="16"
          rx="3"
          ry="3"
          width="121"
          x="75"
          y="22"
        />

        <rect
          height="10"
          rx="3"
          ry="3"
          width="121"
          x="75"
          y="43"
        />
      </>
    ) : null}
  </ContentLoader>
);

export default AvatarLoader;
