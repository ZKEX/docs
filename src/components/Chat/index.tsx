import React from 'react'
import Contact from 'zkex-chat'


// Default implementation, that you can customize


export default function Chat(): JSX.Element {
  const [showChatModal, setShowChatModal] = React.useState<boolean>(false)

  return (<div>
    <Contact showChatModal={showChatModal} setShowChatModal={setShowChatModal} showIcon={true} />
  </div>);
}
