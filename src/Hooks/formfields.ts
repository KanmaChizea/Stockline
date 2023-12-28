import {useState} from 'react';

const useFormFields = (numFields: number) => {
  const [values, setValues] = useState(Array(numFields).fill(''));
  const [isFocused, setIsFocused] = useState(Array(numFields).fill(false));

  const handleValueChange = ({
    index,
    value,
  }: {
    index: number;
    value: string;
  }) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const handleFocusChange = ({
    index,
    focused,
  }: {
    index: number;
    focused: boolean;
  }) => {
    const newFocus = [...isFocused];
    newFocus[index] = focused;
    setIsFocused(newFocus);
  };

  return {
    values,
    isFocused,
    handleValueChange,
    handleFocusChange,
  };
};

export default useFormFields;
