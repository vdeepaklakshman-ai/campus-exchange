import { motion } from 'framer-motion'
import { Package, ShoppingCart, MessageCircle, TrendingUp, Clock, CheckCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { items, transactions } from '../data/mockData'
import { fadeIn } from '../utils/motion'

const Dashboard = () => {
const { user } = useAuth()
const userItems = items.filter(item => item.sellerId === user?.id)
const userTransactions = transactions.filter(t => t.buyerId === user?.id || t.sellerId === user?.id)
const activeListings = userItems.filter(item => item.status === 'available').length
const soldItems = userItems.filter(item => item.status === 'sold').length

const stats = [
{ icon: Package, label: 'Active Listings', value: activeListings, color: 'text-blue-500', bg: 'bg-blue-50' },
{ icon: CheckCircle, label: 'Sold Items', value: soldItems, color: 'text-green-500', bg: 'bg-green-50' },
{ icon: ShoppingCart, label: 'Purchases', value: userTransactions.filter(t => t.buyerId === user?.id).length, color: 'text-purple-500', bg: 'bg-purple-50' },
{ icon: MessageCircle, label: 'Messages', value: 12, color: 'text-orange-500', bg: 'bg-orange-50' }
]

const formatDate = (dateString) => {
return new Date(dateString).toLocaleDateString('en-US', {
month: 'short',
day: 'numeric',
year: 'numeric'
})
}

return (
<div className="container-custom py-12">
<motion.div
variants={fadeIn('up', 0.2)}
initial="hidden"
animate="show"
>
<h1 className="text-3xl font-heading font-bold mb-8">Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
{stats.map((stat, index) => (
<motion.div
key={index}
variants={fadeIn('up', 0.1 * index)}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="card"
>
<div className="flex items-center justify-between">
<div>
<p className="text-gray-600 text-sm mb-1">{stat.label}</p>
<p className="text-3xl font-bold">{stat.value}</p>
</div>
<div className={`${stat.bg} p-4 rounded-lg`}>
<stat.icon className={`w-8 h-8 ${stat.color}`} />
</div>
</div>
</motion.div>
))}
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<motion.div
variants={fadeIn('right', 0.2)}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="card"
>
<h2 className="text-xl font-heading font-semibold mb-4 flex items-center space-x-2">
<TrendingUp className="w-5 h-5 text-primary" />
<span>Recent Activity</span>
</h2>

<div className="space-y-4">
{userItems.slice(0, 5).map(item => (
<div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
<div className="flex items-center space-x-3">
<img src={item.images[0]} alt={item.title} className="w-12 h-12 rounded object-cover" />
<div>
<p className="font-medium">{item.title}</p>
<p className="text-sm text-gray-600">{formatDate(item.postedDate)}</p>
</div>
</div>
<div className="text-right">
<p className="font-semibold text-primary">₹{item.price}</p>
<span className={`text-xs px-2 py-1 rounded-full ${
item.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
}`}>
{item.status}
</span>
</div>
</div>
))}
</div>
</motion.div>

<motion.div
variants={fadeIn('left', 0.2)}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
className="card"
>
<h2 className="text-xl font-heading font-semibold mb-4 flex items-center space-x-2">
<Clock className="w-5 h-5 text-primary" />
<span>Recent Transactions</span>
</h2>

<div className="space-y-4">
{userTransactions.length > 0 ? (
userTransactions.slice(0, 5).map(transaction => (
<div key={transaction.id} className="p-3 bg-gray-50 rounded-lg">
<div className="flex items-center justify-between mb-2">
<p className="font-medium">{transaction.itemTitle}</p>
<span className={`text-xs px-2 py-1 rounded-full ${
transaction.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
}`}>
{transaction.status}
</span>
</div>
<div className="flex items-center justify-between text-sm text-gray-600">
<span>{formatDate(transaction.date)}</span>
<span className="font-semibold text-primary">₹{transaction.amount}</span>
</div>
</div>
))
) : (
<div className="text-center py-8 text-gray-500">
<p>No transactions yet</p>
</div>
)}
</div>
</motion.div>
</div>
</motion.div>
</div>
)
}

export default Dashboard