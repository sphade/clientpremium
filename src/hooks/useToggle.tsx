import * as React from "react";

/** A simple hook to toggle between boolean states */
const useToggle = (): [boolean, () => void] => {
  const [value, setValue] = React.useState(false);

  // Function to handle the toggling
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleValue: React.SetStateAction<any> = React.useCallback(
    () => setValue((prev: boolean) => !prev),
    []
  );

  return [value, toggleValue];
};

export default useToggle;
