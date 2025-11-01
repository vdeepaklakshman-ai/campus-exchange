import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Eye, CheckCircle, MessageCircle, ArrowLeft, Share2 } from 'lucide-react'
import Button from '../components/Button'
import { items, users } from '../data/mockData'
import { useAuth } from '../contexts/AuthContext'
import { fadeIn } from '../utils/motion'

const ItemDetail = () => {
const { id } = useParams()
const navigate = useNavigate()
const { isAuthenticated } = useAuth()
const [item, setItem] = useState(null)
const [seller, setSeller] = useState(null)

useEffect(() => {
const foundItem = items.find(i => i.id === id)
if (foundItem) {
setItem(foundItem)
const foundSeller = users.find(u => u.id === foundItem.sellerId)
setSeller(foundSeller)
}
}, [id])

if (!item) {
return (
<div className="container-custom py-12">
<p className="text-center text-gray-500">Item not found</p>
</div>
)
}

const handleContact = () => {
if (!isAuthenticated) {
navigate('/login')
return
}
navigate(`/chat/${item.sellerId}`)
}

const formatDate = (dateString) => {
return new Date(dateString).toLocaleDateString('en-US', {
year: 'numeric',
month: 'long',
day: 'numeric'
})
}

return (
<div className="container-custom py-8">
<button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-gray-600 hover:text-primary mb-6 transition-colors duration-200">
<ArrowLeft className="w-5 h-5" />
<span>Back</span>
</button>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<motion.div
variants={fadeIn('right', 0.2)}
initial="hidden"
animate="show"
>
<div className="relative rounded-lg overflow-hidden">
<img src={item.images[0]} alt={item.title} className="w-full h-96 object-cover" />
{item.verified && (
<div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center space-x-1">
<CheckCircle className="w-4 h-4" />
<span className="text-sm font-medium">Verified</span>
</div>
)}
<span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
{item.category}
</span>
</div>
</motion.div>

<motion.div
variants={fadeIn('left', 0.2)}
initial="hidden"
animate="show"
className="space-y-6"
>
<div>
<h1 className="text-3xl font-heading font-bold mb-2">{item.title}</h1>
<div className="flex items-center space-x-4 text-gray-600 text-sm">
<div className="flex items-center space-x-1">
<Calendar className="w-4 h-4" />
<span>{formatDate(item.postedDate)}</span>
</div>
<div className="flex items-center space-x-1">
<Eye className="w-4 h-4" />
<span>{item.views} views</span>
</div>
</div>
</div>

<div className="bg-primary bg-opacity-10 rounded-lg p-6">
<div className="flex items-baseline space-x-2">
<span className="text-4xl font-bold text-primary">₹{item.price}</span>
<span className="text-gray-600">({item.condition})</span>
</div>
</div>

<div>
<h2 className="text-xl font-heading font-semibold mb-3">Description</h2>
<p className="text-gray-700 leading-relaxed">{item.description}</p>
</div>

<div className="border-t border-gray-200 pt-6">
<h2 className="text-xl font-heading font-semibold mb-4">Seller Information</h2>
<div className="bg-gray-50 rounded-lg p-4 space-y-3">
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-lg">{item.sellerName}</p>
<div className="flex items-center space-x-1 text-gray-600 text-sm">
<MapPin className="w-4 h-4" />
<span>{item.sellerClass}</span>
</div>
</div>
{seller && (
<div className="text-right">
<div className="text-yellow-500 font-semibold">★ {seller.rating}</div>
<div className="text-gray-600 text-sm">{seller.totalSales} sales</div>
</div>
)}
</div>
</div>
</div>

<div className="flex space-x-4">
<Button onClick={handleContact} className="flex-1 flex items-center justify-center space-x-2">
<MessageCircle className="w-5 h-5" />
<span>Contact Seller</span>
</Button>
<button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
<Share2 className="w-5 h-5 text-gray-600" />
</button>
</div>

{item.status === 'sold' && (
<div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
<p className="text-red-600 font-semibold">This item has been sold</p>
</div>
)}
</motion.div>
</div>
</div>
)
}

export default ItemDetail