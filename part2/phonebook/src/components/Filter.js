const Filter = ({ keyword, changeKeyword }) => {
  return (
    <div>
      Search contact: <input value={keyword} onChange={changeKeyword} />
    </div>
  );
};

export default Filter;
