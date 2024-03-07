import { useState } from 'react';

const Empolyee = () => {
  const [curr, setCurr] = useState([
    {
      name: 'kedar',
      designation: 'frontend',
      salary: 30000,
    },
    {
      name: 'aravind',
      designation: 'frontend',
      salary: 35000,
    },
  ]);

  const addEmpolyee = () => {
    let newEmployee = [
      ...curr,
      { name: 'sai', designation: 'frontend', salary: 40000 },
    ];
    setCurr(newEmployee);
  };

  const deleteName = (idx) => {
    let newEmployee = [...curr];
    newEmployee.splice(idx, 1);
    setCurr(newEmployee);
  };
  return (
    <>
      <h1>hii</h1>
      <button onClick={addEmpolyee}>add employee</button>
      {curr.map((each, idx) => (
        <>
          <h3>name:{each.name}</h3>
          <h3>age : {each.designation}</h3>
          <h3>salary: {each.salary}</h3>
          <button onClick={() => deleteName(idx)}>delete</button>
        </>
      ))}
    </>
  );
};
export default Empolyee;
