import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { motion } from 'framer-motion'

const SearchBar = ({ onSearch, placeholder = 'Search items...' }) => {
const [query, setQuery] = useState('')

const handleSubmit = (e) => {
e.preventDefault()
onSearch(query)
}

const handleClear = () => {
setQuery('')
onSearch('')
}

return (
<form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
<div className="relative">
<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
<input
type="text"
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder={placeholder}
className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
/>
{query && (
<motion.button
initial={{ scale: 0 }}
animate={{ scale: 1 }}
type="button"
onClick={handleClear}
className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
>
<X className="w-5 h-5" />
</motion.button>
)}
</div>
</form>
)
}

export default SearchBar