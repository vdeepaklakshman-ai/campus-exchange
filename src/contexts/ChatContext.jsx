import { createContext, useContext, useState } from 'react'
import { messages as mockMessages } from '../data/mockData'

const ChatContext = createContext()

export const useChat = () => {
const context = useContext(ChatContext)
if (!context) throw new Error('useChat must be used within ChatProvider')
return context
}

export const ChatProvider = ({ children }) => {
const [messages, setMessages] = useState(mockMessages)
const [activeChat, setActiveChat] = useState(null)

const sendMessage = (receiverId, content) => {
const newMessage = {
id: Date.now().toString(),
senderId: '1',
receiverId,
content,
timestamp: new Date().toISOString(),
read: false
}
setMessages(prev => [...prev, newMessage])
return newMessage
}

const getConversation = (userId) => {
return messages.filter(
m => (m.senderId === userId || m.receiverId === userId)
)
}

const markAsRead = (messageIds) => {
setMessages(prev =>
prev.map(m => messageIds.includes(m.id) ? { ...m, read: true } : m)
)
}

const getUnreadCount = () => {
return messages.filter(m => m.receiverId === '1' && !m.read).length
}

const value = {
messages,
activeChat,
setActiveChat,
sendMessage,
getConversation,
markAsRead,
getUnreadCount
}

return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}