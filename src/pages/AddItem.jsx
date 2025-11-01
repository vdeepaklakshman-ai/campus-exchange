import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Upload, X } from 'lucide-react'
import Input from '../components/Input'
import Button from '../components/Button'
import { categories } from '../data/mockData'
import { fadeIn } from '../utils/motion'

const AddItem = () => {
const navigate = useNavigate()
const [formData, setFormData] = useState({
title: '',
description: '',
price: '',
category: '',
condition: 'Good',
imagePreview: null
})
const [errors, setErrors] = useState({})
const [loading, setLoading] = useState(false)

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value })
setErrors({ ...errors, [e.target.name]: '' })
}

const handleImageChange = (e) => {
const file = e.target.files[0]
if (file) {
const reader = new FileReader()
reader.onloadend = () => {
setFormData({ ...formData, imagePreview: reader.result })
}
reader.readAsDataURL(file)
}
}

const removeImage = () => {
setFormData({ ...formData, imagePreview: null })
}

const validateForm = () => {
const newErrors = {}
if (!formData.title) newErrors.title = 'Title is required'
if (!formData.description) newErrors.description = 'Description is required'
if (!formData.price) newErrors.price = 'Price is required'
else if (isNaN(formData.price) || formData.price <= 0) newErrors.price = 'Enter valid price'
if (!formData.category) newErrors.category = 'Category is required'
if (!formData.imagePreview) newErrors.image = 'Image is required'
return newErrors
}

const handleSubmit = async (e) => {
e.preventDefault()
const newErrors = validateForm()
if (Object.keys(newErrors).length > 0) {
setErrors(newErrors)
return
}
setLoading(true)
setTimeout(() => {
setLoading(false)
navigate('/')
}, 1500)
}

return (
<div className="container-custom py-12">
<motion.div
variants={fadeIn('up', 0.2)}
initial="hidden"
animate="show"
className="max-w-2xl mx-auto"
>
<h1 className="text-3xl font-heading font-bold mb-8">List Your Item</h1>

<form onSubmit={handleSubmit} className="card space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Item Images *
</label>
<div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors duration-200">
{formData.imagePreview ? (
<div className="relative inline-block">
<img src={formData.imagePreview} alt="Preview" className="max-h-64 rounded-lg" />
<button
type="button"
onClick={removeImage}
className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
>
<X className="w-4 h-4" />
</button>
</div>
) : (
<div>
<Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
<p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
<p className="text-gray-400 text-sm">PNG, JPG up to 5MB</p>
<input
type="file"
accept="image/*"
onChange={handleImageChange}
className="hidden"
id="image-upload"
/>
<label htmlFor="image-upload" className="btn-primary inline-block mt-4 cursor-pointer">
Choose Image
</label>
</div>
)}
</div>
{errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
</div>

<Input
label="Item Title"
type="text"
name="title"
value={formData.title}
onChange={handleChange}
placeholder="e.g., Data Structures Textbook"
required
error={errors.title}
/>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Description *
</label>
<textarea
name="description"
value={formData.description}
onChange={handleChange}
placeholder="Describe your item in detail..."
rows="4"
required
className="input-field"
/>
{errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<Input
label="Price (₹)"
type="number"
name="price"
value={formData.price}
onChange={handleChange}
placeholder="1000"
required
error={errors.price}
/>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Category *
</label>
<select
name="category"
value={formData.category}
onChange={handleChange}
required
className="input-field"
>
<option value="">Select Category</option>
{categories.map(cat => (
<option key={cat.id} value={cat.name}>{cat.name}</option>
))}
</select>
{errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Condition *
</label>
<div className="grid grid-cols-3 gap-4">
{['Like New', 'Good', 'Fair'].map(cond => (
<button
key={cond}
type="button"
onClick={() => setFormData({ ...formData, condition: cond })}
className={`p-3 rounded-lg border-2 transition-all duration-200 ${
formData.condition === cond ? 'border-primary bg-primary bg-opacity-10 text-primary' : 'border-gray-300 hover:border-gray-400'
}`}
>
{cond}
</button>
))}
</div>
</div>

<div className="flex space-x-4">
<Button type="submit" disabled={loading} className="flex-1">
{loading ? 'Listing Item...' : 'List Item'}
</Button>
<Button type="button" variant="secondary" onClick={() => navigate(-1)} className="flex-1">
Cancel
</Button>
</div>
</form>
</motion.div>
</div>
)
}

export default AddItem