const Input = ({ label, type = 'text', value, onChange, placeholder, required, error, name, className = '' }) => {
return (
<div className={`mb-4 ${className}`}>
{label && (
<label className="block text-sm font-medium text-gray-700 mb-2">
{label}
{required && <span className="text-red-500 ml-1">*</span>}
</label>
)}
<input
type={type}
name={name}
value={value}
onChange={onChange}
placeholder={placeholder}
required={required}
className={`input-field ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
/>
{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
</div>
)
}

export default Input