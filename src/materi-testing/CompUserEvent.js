import React from "react";

const CompUserEvent = ({onSubmit}) => {
  const [value, setValue] = React.useState("");
  // const onSubmit = () => {
  //   console.log("Call API Submit");
  // };
  return (
    <div>
      <p>anda mengetik {value}) </p>
      <input
        placeholder="input value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p data-testid="text-submit" onClick={onSubmit}>
        Submit
      </p>
    </div>
  );
};

export default CompUserEvent;
