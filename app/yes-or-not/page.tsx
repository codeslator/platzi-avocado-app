'use client'
import { useState, useEffect } from 'react';
import { getYesOrNot } from '@/app/services/yesOrNot';

const YesOrNot = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [result, setResult] = useState<string>('')
  const [count, setCount] = useState<number>(0)

  const getResult = async () => {
    const data = await getYesOrNot();
    setResult(data.data);
  }

  const onClick = async () => {
    setCount(count + 1)
  }

  useEffect(() => {
    setIsLoading(true);
    getResult();
    setIsLoading(false);
  }, [count])
  
  // console.log(data)
  return (
    <div>
      <p className={`text-6xl text-center capitalize text-black`}>{result}</p>

    </div>
  );
};

export default YesOrNot;