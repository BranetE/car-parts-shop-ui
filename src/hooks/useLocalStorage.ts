/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

interface UseLocalStorageType {
  read: any;
  write: (value: any) => void;
}

const useLocalStorage = (key: string): UseLocalStorageType => {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    const val = localStorage.getItem(key);
    if (val) {
      setValue(JSON.parse(val));
    } else {
      console.log(`Couldn't find value in local storage by key ${key}`);
    }
  }, []);

  const write = (val: any) => {
    setValue(val);
    localStorage.setItem(key, value);
  };

  return { read: value, write: write } as const;
};

export default useLocalStorage;
