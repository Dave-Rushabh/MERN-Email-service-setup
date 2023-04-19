interface PrefixDropdownProps {
  prefix: string | null;
  handlePrefixChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PrefixDropdown = ({
  prefix,
  handlePrefixChange,
}: PrefixDropdownProps) => {
  return (
    <>
      <select
        id="prefix-select"
        value={prefix ?? ''}
        onChange={handlePrefixChange}
      >
        <option value="">Select a prefix</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
      </select>
    </>
  );
};

export default PrefixDropdown;
