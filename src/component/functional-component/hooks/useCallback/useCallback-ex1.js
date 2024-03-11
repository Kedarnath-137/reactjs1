// import { useState } from 'react';
// import CustomButton from './custom-button';

// const ProfileExample = () => {
//   const [age, setAge] = useState(10);
//   const [salary, setSalary] = useState(1000);

//   const handleAge = () => {
//     setAge(age + 10);
//   };
//   const handleSalary = () => {
//     setSalary(salary + 1000);
//   };
//   return (
//     <>
//       <h2>salary {salary}</h2>
//       <h2>age {age}</h2>

//       <CustomButton>Age increment</CustomButton>

//       <CustomButton onClick={handleSalary}>sdfghjk</CustomButton>
//     </>
//   );
// };

// export default ProfileExample;


import { useCallback, useState } from 'react';
import CustomButton from './custom-button';

const ProfileExample = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(1000);

  const handleAge =  useCallback(() => {
    setAge(age + 10);
  },[age])

 
  const handleSalary =  useCallback(() => {
    setSalary(salary + 1000);
  },[salary])
 
  
  return (
    <>
      <h2>salary {salary}</h2>
      <h2>age {age}</h2>

      <CustomButton onClick={handleAge}>Age increment</CustomButton>

      <CustomButton onClick={handleSalary}>Salary increment</CustomButton>
    </>
  );
};

export default ProfileExample;

