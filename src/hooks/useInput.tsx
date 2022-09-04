import React from "react";

const useInput = () => {
  const [value, setValue] = React.useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return {
    value,
    onChange,
  };
};

export default useInput;
