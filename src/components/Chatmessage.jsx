import { motion } from 'framer-motion'
import { CheckCheck } from 'lucide-react'

const ChatMessage = ({ message, isOwn }) => {
const formatTime = (timestamp) => {
const date = new Date(timestamp)
return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

return (
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}
>
<div className={`max-w-xs lg:max-w-md ${
isOwn ? 'bg-primary text-white' : 'bg-gray-100 text-gray-900'
} rounded-lg px-4 py-2 shadow-sm`}>
<p className="text-sm">{message.content}</p>
<div className={`flex items-center justify-end space-x-1 mt-1 text-xs ${
isOwn ? 'text-blue-100' : 'text-gray-500'
}`}>
<span>{formatTime(message.timestamp)}</span>
{isOwn && message.read && <CheckCheck className="w-4 h-4" />}
</div>
</div>
</motion.div>
)
}

export default ChatMessage