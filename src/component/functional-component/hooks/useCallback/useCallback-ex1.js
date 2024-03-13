

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

