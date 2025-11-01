import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, User, BookOpen, ShoppingBag } from 'lucide-react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useAuth } from '../contexts/AuthContext'
import { fadeIn } from '../utils/motion'

const Signup = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
confirmPassword: '',
class: '',
section: ''
})
const [errors, setErrors] = useState({})
const [loading, setLoading] = useState(false)
const { signup } = useAuth()
const navigate = useNavigate()

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value })
setErrors({ ...errors, [e.target.name]: '' })
}

const validateForm = () => {
const newErrors = {}
if (!formData.name) newErrors.name = 'Name is required'
if (!formData.email) newErrors.email = 'Email is required'
else if (!formData.email.endsWith('@college.edu')) newErrors.email = 'Use college email address'
if (!formData.password) newErrors.password = 'Password is required'
else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
if (!formData.class) newErrors.class = 'Class is required'
if (!formData.section) newErrors.section = 'Section is required'
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
const result = await signup(formData)
setLoading(false)
if (result.success) {
navigate('/')
} else {
setErrors({ submit: result.error })
}
}

return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent py-12 px-4">
<motion.div
variants={fadeIn('up', 0.2)}
initial="hidden"
animate="show"
className="max-w-md w-full bg-white rounded-lg shadow-xl p-8"
>
<div className="text-center mb-8">
<ShoppingBag className="w-16 h-16 text-primary mx-auto mb-4" />
<h2 className="text-3xl font-heading font-bold text-gray-900">Join Campus Exchange</h2>
<p className="text-gray-600 mt-2">Create your student marketplace account</p>
</div>

<form onSubmit={handleSubmit} className="space-y-4">
<div className="relative">
<User className="absolute left-3 top-11 text-gray-400 w-5 h-5" />
<Input
label="Full Name"
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="John Doe"
required
error={errors.name}
className="pl-10"
/>
</div>

<div className="relative">
<Mail className="absolute left-3 top-11 text-gray-400 w-5 h-5" />
<Input
label="College Email"
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="your.name@college.edu"
required
error={errors.email}
className="pl-10"
/>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="relative">
<BookOpen className="absolute left-3 top-11 text-gray-400 w-5 h-5" />
<Input
label="Class"
type="text"
name="class"
value={formData.class}
onChange={handleChange}
placeholder="Computer Science"
required
error={errors.class}
className="pl-10"
/>
</div>
<Input
label="Section"
type="text"
name="section"
value={formData.section}
onChange={handleChange}
placeholder="A"
required
error={errors.section}
/>
</div>

<div className="relative">
<Lock className="absolute left-3 top-11 text-gray-400 w-5 h-5" />
<Input
label="Password"
type="password"
name="password"
value={formData.password}
onChange={handleChange}
placeholder="Create password"
required
error={errors.password}
className="pl-10"
/>
</div>

<div className="relative">
<Lock className="absolute left-3 top-11 text-gray-400 w-5 h-5" />
<Input
label="Confirm Password"
type="password"
name="confirmPassword"
value={formData.confirmPassword}
onChange={handleChange}
placeholder="Confirm password"
required
error={errors.confirmPassword}
className="pl-10"
/>
</div>

{errors.submit && (
<div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
{errors.submit}
</div>
)}

<Button type="submit" disabled={loading} className="w-full">
{loading ? 'Creating Account...' : 'Sign Up'}
</Button>

<div className="text-center">
<Link to="/login" className="text-primary hover:underline text-sm">
Already have an account? Login
</Link>
</div>
</form>
</motion.div>
</div>
)
}

export default Signup