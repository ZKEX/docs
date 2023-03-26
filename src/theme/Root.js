import React from 'react'
import Chat from "@site/src/components/Chat";


// Default implementation, that you can customize
export default function Root({children}) {

  return <>
    {children}
    {Chat()}
  </>;
}
