import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', onClick, disabled, type = 'button', className = '' }) => {
const baseClass = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
const variantClass = variant === 'primary' ? 'bg-primary text-white hover:bg-opacity-90' : 'bg-secondary text-primary hover:bg-opacity-80'

return (
<motion.button
whileHover={{ scale: disabled ? 1 : 1.02 }}
whileTap={{ scale: disabled ? 1 : 0.98 }}
type={type}
onClick={onClick}
disabled={disabled}
className={`${baseClass} ${variantClass} ${className}`}
>
{children}
</motion.button>
)
}

export default Button