interface CustomInputProps {
  inputValue: string | null;
  handleInputValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const CustomInput = ({
  inputValue,
  handleInputValueChange,
  placeholder,
}: CustomInputProps) => {
  return (
    <>
      <input
        type="text"
        value={inputValue ?? ''}
        onChange={handleInputValueChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;
