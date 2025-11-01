import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Shield, Users } from 'lucide-react'
import ItemCard from '../components/ItemCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import { items } from '../data/mockData'
import { fadeIn } from '../utils/motion'

const Home = () => {
const [searchQuery, setSearchQuery] = useState('')
const [selectedCategory, setSelectedCategory] = useState('')
const [filteredItems, setFilteredItems] = useState(items)

useEffect(() => {
let result = items

if (searchQuery) {
result = result.filter(item =>
item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
item.description.toLowerCase().includes(searchQuery.toLowerCase())
)
}

if (selectedCategory) {
result = result.filter(item => item.category === selectedCategory)
}

setFilteredItems(result)
}, [searchQuery, selectedCategory])

const features = [
{ icon: Shield, title: 'Verified Students', desc: 'Only college students can access' },
{ icon: TrendingUp, title: 'Best Deals', desc: 'Great prices on campus items' },
{ icon: Users, title: 'Safe Trading', desc: 'Secure transactions within campus' }
]

return (
<div>
<section className="bg-gradient-to-r from-primary to-accent text-white py-16">
<div className="container-custom">
<motion.div
variants={fadeIn('down', 0.2)}
initial="hidden"
animate="show"
className="text-center mb-8"
>
<h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
Campus Marketplace
</h1>
<p className="text-xl text-blue-100 mb-8">
Buy, Sell & Exchange Items Safely Within Your Campus
</p>
<SearchBar onSearch={setSearchQuery} />
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
{features.map((feature, index) => (
<motion.div
key={index}
variants={fadeIn('up', 0.1 * index)}
initial="hidden"
animate="show"
className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
>
<feature.icon className="w-12 h-12 mx-auto mb-4" />
<h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
<p className="text-blue-100 text-sm">{feature.desc}</p>
</motion.div>
))}
</div>
</div>
</section>

<section className="container-custom py-12">
<motion.div
variants={fadeIn('up', 0.2)}
initial="hidden"
whileInView="show"
viewport={{ once: true }}
>
<h2 className="text-3xl font-heading font-bold mb-6">Browse by Category</h2>
<CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
</motion.div>

<div className="mb-6">
<h3 className="text-xl font-heading font-semibold text-gray-700">
{filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'} Found
</h3>
</div>

{filteredItems.length > 0 ? (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredItems.map((item, index) => (
<ItemCard key={item.id} item={item} index={index} />
))}
</div>
) : (
<div className="text-center py-12">
<p className="text-gray-500 text-lg">No items found. Try adjusting your filters.</p>
</div>
)}
</section>
</div>
)
}

export default Home