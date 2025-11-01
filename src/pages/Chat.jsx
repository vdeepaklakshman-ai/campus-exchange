import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, ArrowLeft } from 'lucide-react'
import ChatMessage from '../components/ChatMessage'
import { useChat } from '../contexts/ChatContext'
import { users } from '../data/mockData'
import { fadeIn } from '../utils/motion'

const Chat = () => {
const { userId } = useParams()
const { getConversation, sendMessage, markAsRead } = useChat()
const [conversation, setConversation] = useState([])
const [newMessage, setNewMessage] = useState('')
const [otherUser, setOtherUser] = useState(null)
const messagesEndRef = useRef(null)

useEffect(() => {
if (userId) {
const conv = getConversation(userId)
setConversation(conv)
const user = users.find(u => u.id === userId)
setOtherUser(user)
const unreadIds = conv.filter(m => m.senderId === userId && !m.read).map(m => m.id)
if (unreadIds.length > 0) {
markAsRead(unreadIds)
}
}
}, [userId])

useEffect(() => {
messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
}, [conversation])

const handleSend = (e) => {
e.preventDefault()
if (newMessage.trim() && userId) {
const sent = sendMessage(userId, newMessage)
setConversation([...conversation, sent])
setNewMessage('')
}
}

if (!userId) {
return (
<div className="container-custom py-12">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl font-heading font-bold mb-4">Select a conversation</h2>
<p className="text-gray-600">Choose a user from your messages to start chatting</p>
</div>
</div>
)
}

return (
<div className="container-custom py-8">
<motion.div
variants={fadeIn('up', 0.2)}
initial="hidden"
animate="show"
className="max-w-4xl mx-auto"
>
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
<div className="bg-primary text-white p-4 flex items-center space-x-4">
<button onClick={() => window.history.back()} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors duration-200">
<ArrowLeft className="w-5 h-5" />
</button>
<div>
<h2 className="font-heading font-semibold text-lg">{otherUser?.name}</h2>
<p className="text-blue-100 text-sm">{otherUser?.class} - Section {otherUser?.section}</p>
</div>
</div>

<div className="h-96 overflow-y-auto p-6 bg-gray-50">
{conversation.length > 0 ? (
conversation.map(message => (
<ChatMessage key={message.id} message={message} isOwn={message.senderId === '1'} />
))
) : (
<div className="text-center text-gray-500 mt-8">
<p>No messages yet. Start the conversation!</p>
</div>
)}
<div ref={messagesEndRef} />
</div>

<form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200">
<div className="flex space-x-4">
<input
type="text"
value={newMessage}
onChange={(e) => setNewMessage(e.target.value)}
placeholder="Type your message..."
className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
/>
<button
type="submit"
disabled={!newMessage.trim()}
className="bg-primary text-white p-3 rounded-lg hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
>
<Send className="w-5 h-5" />
</button>
</div>
</form>
</div>
</motion.div>
</div>
)
}

export default Chat