interface CustomTextAreaProps {
  text: string | null;
  handleTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const CustomTextArea = ({
  text,
  handleTextChange,
  placeholder,
}: CustomTextAreaProps) => {
  return (
    <>
      <textarea
        value={text ?? ''}
        onChange={handleTextChange}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default CustomTextArea;
