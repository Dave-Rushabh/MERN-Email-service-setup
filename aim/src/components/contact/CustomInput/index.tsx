import { INPUT_TYPES } from '../../../constants/input-types';
import { Input, Textarea } from './styles';
interface CustomInputProps {
  type: string;
  inputValue: string | null;
  handleInputValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextAreaValueChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder: string;
}

const CustomInput = ({
  type,
  inputValue,
  handleInputValueChange,
  handleTextAreaValueChange,
  placeholder,
}: CustomInputProps) => {
  const renderInputByType = (type: CustomInputProps['type']) => {
    switch (type) {
      case INPUT_TYPES['TEXT']:
        return (
          <>
            <Input
              type="text"
              value={inputValue ?? ''}
              onChange={handleInputValueChange}
              placeholder={placeholder}
            />
          </>
        );
      case INPUT_TYPES['TEXTAREA']:
        return (
          <>
            <Textarea
              placeholder={placeholder}
              value={inputValue ?? ''}
              onChange={handleTextAreaValueChange}
            />
          </>
        );
      default:
        return <></>;
    }
  };

  return renderInputByType(type);
};

export default CustomInput;
