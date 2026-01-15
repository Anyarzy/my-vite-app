import React from 'react';
import { MyContext } from './context';

export function MyName() {
  const { name } = React.useContext(MyContext);
  return <div className="text-3xl font-bold underline">My Name: {name}</div>;
}
