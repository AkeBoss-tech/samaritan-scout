import React from 'react';

const Test = ({
  introduction,
  name,
  background,
  story,
}: {
  introduction: string;
  name: string;
  background: string;
  story: string;
}) => {
  return (
    <>
      <div>{introduction}</div>
      <div>{name}</div>
      <div>{background}</div>
      <div>{story}</div>
    </>
  );
};

export default Test;
