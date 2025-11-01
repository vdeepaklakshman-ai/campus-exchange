import { motion } from 'framer-motion'
import { Mail, MapPin, Calendar, Star, Package } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { users, items } from '../data/mockData'
import ItemCard from '../components/ItemCard'
import { fadeIn } from '../utils/motion'

const Profile = () => {
const { user } = useAuth()
const userDetails = users.find(u => u.id === user?.id) || users[0]
const userItems = items.filter(item => item.sellerId === user?.id)

const formatDate = (dateString) => {
return new Date(dateString).toLocaleDateString('en-US', {
year: 'numeric',
month: 'long'
})
}

return (
<div className="container-custom py-12">
<motion.div
variants={fadeIn('up', 0.2)}
initial="hidden"
animate="show"
>
<div className="card mb-8">
<div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
<div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-4xl font-bold">
{user?.name?.charAt(0)}
</div>

<div className="flex-1 text-center md:text-left">
<h1 className="text-3xl font-heading font-bold mb-2">{user?.name}</h1>
<div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 mb-4">
<div className="flex items-center space-x-2">
<Mail className="w-4 h-4" />
<span>{user?.email}</span>
</div>
<div className="flex items-center space-x-2">
<MapPin className="w-4 h-4" />
<span>{user?.class} - Section {user?.section}</span>
</div>
<div className="flex items-center space-x-2">
<Calendar className="w-4 h-4" />
<span>Joined {formatDate(userDetails.joinedDate)}</span>
</div>
</div>

<div className="flex justify-center md:justify-start space-x-6">
<div className="text-center">
<div className="flex items-center justify-center space-x-1 text-yellow-500 mb-1">
<Star className="w-5 h-5 fill-current" />
<span className="text-xl font-bold text-gray-900">{userDetails.rating}</span>
</div>
<p className="text-sm text-gray-600">Rating</p>
</div>
<div className="text-center">
<div className="flex items-center justify-center space-x-1 mb-1">
<Package className="w-5 h-5 text-primary" />
<span className="text-xl font-bold text-gray-900">{userDetails.totalSales}</span>
</div>
<p className="text-sm text-gray-600">Sales</p>
</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-heading font-bold mb-6">My Listings</h2>
{userItems.length > 0 ? (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{userItems.map((item, index) => (
<ItemCard key={item.id} item={item} index={index} />
))}
</div>
) : (
<div className="card text-center py-12">
<Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
<p className="text-gray-600 text-lg mb-4">You haven't listed any items yet</p>
<a href="/add-item" className="btn-primary inline-block">
List Your First Item
</a>
</div>
)}
</div>
</motion.div>
</div>
)
}

export default Profile