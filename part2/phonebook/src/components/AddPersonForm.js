const AddPersonForm = ({ submit, name, changeName, number, changeNumber }) => {
  return (
    <form onSubmit={submit}>
      <div>
        Name: <input value={name} onChange={changeName} />
        Number: <input value={number} onChange={changeNumber} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default AddPersonForm;
