import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { categories } from '../data/mockData'

const CategoryFilter = ({ selected, onSelect }) => {
const getIcon = (iconName) => {
const iconMap = {
book: Icons.Book,
laptop: Icons.Laptop,
bike: Icons.Bike,
armchair: Icons.Armchair,
'pen-tool': Icons.PenTool,
dribbble: Icons.Dribbble,
shirt: Icons.Shirt,
package: Icons.Package
}
const Icon = iconMap[iconName] || Icons.Package
return <Icon className="w-5 h-5" />
}

return (
<div className="flex flex-wrap gap-3 mb-8">
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
onClick={() => onSelect('')}
className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
selected === '' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
}`}
>
All Categories
</motion.button>

{categories.map(category => (
<motion.button
key={category.id}
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
onClick={() => onSelect(category.name)}
className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
selected === category.name ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
}`}
>
{getIcon(category.icon)}
<span>{category.name}</span>
</motion.button>
))}
</div>
)
}

export default CategoryFilter