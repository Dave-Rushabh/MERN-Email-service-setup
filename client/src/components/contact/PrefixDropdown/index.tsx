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
        style={{ color: !prefix ? 'gray' : 'black' }}
      >
        <option value="" disabled style={{ color: 'gray' }} hidden>
          How should we address you ?
        </option>
        <option value="Mr." style={{ color: 'black' }}>
          Mr
        </option>
        <option value="Mrs." style={{ color: 'black' }}>
          Mrs
        </option>
        <option value="Miss" style={{ color: 'black' }}>
          Miss
        </option>
      </select>
    </>
  );
};

export default PrefixDropdown;
