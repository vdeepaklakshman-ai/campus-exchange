import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, MapPin, CheckCircle } from 'lucide-react'
import { fadeIn } from '../utils/motion'

const ItemCard = ({ item, index }) => {
return (
<motion.div
variants={fadeIn('up', 0.1 * index)}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="card group cursor-pointer"
>
<Link to={`/item/${item.id}`}>
<div className="relative overflow-hidden rounded-lg mb-4">
<img
src={item.images[0]}
alt={item.title}
className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
/>
{item.status === 'sold' && (
<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
<span className="text-white font-bold text-lg">SOLD</span>
</div>
)}
{item.verified && (
<div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
<CheckCircle className="w-4 h-4" />
</div>
)}
<span className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
{item.category}
</span>
</div>

<h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
{item.title}
</h3>

<p className="text-gray-600 text-sm mb-3 line-clamp-2">
{item.description}
</p>

<div className="flex items-center justify-between mb-3">
<span className="text-2xl font-bold text-primary">
₹{item.price}
</span>
<span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
{item.condition}
</span>
</div>

<div className="flex items-center justify-between text-sm text-gray-600">
<div className="flex items-center space-x-1">
<MapPin className="w-4 h-4" />
<span>{item.sellerClass}</span>
</div>
<div className="flex items-center space-x-1">
<Eye className="w-4 h-4" />
<span>{item.views}</span>
</div>
</div>

<div className="mt-3 pt-3 border-t border-gray-200">
<p className="text-sm text-gray-600">
Seller: <span className="font-medium">{item.sellerName}</span>
</p>
</div>
</Link>
</motion.div>
)
}

export default ItemCard