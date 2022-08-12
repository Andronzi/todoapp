import React from "react";

type Props = {
  isSend: boolean;
};

export default function Comp({ isSend }: Props) {
  return (
    <>
      <p>{isSend}</p>
      <p>Coo</p>
    </>
  );
}
