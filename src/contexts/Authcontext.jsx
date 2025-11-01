import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
const context = useContext(AuthContext)
if (!context) throw new Error('useAuth must be used within AuthProvider')
return context
}

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
const storedUser = localStorage.getItem('campusUser')
if (storedUser) {
setUser(JSON.parse(storedUser))
}
setLoading(false)
}, [])

const login = async (email, password) => {
setLoading(true)
try {
const mockUser = {
id: '1',
name: 'John Doe',
email,
class: 'Computer Science',
section: 'B',
verified: true
}
setUser(mockUser)
localStorage.setItem('campusUser', JSON.stringify(mockUser))
return { success: true }
} catch (error) {
return { success: false, error: error.message }
} finally {
setLoading(false)
}
}

const signup = async (userData) => {
setLoading(true)
try {
const newUser = {
id: Date.now().toString(),
...userData,
verified: false
}
setUser(newUser)
localStorage.setItem('campusUser', JSON.stringify(newUser))
return { success: true }
} catch (error) {
return { success: false, error: error.message }
} finally {
setLoading(false)
}
}

const logout = () => {
setUser(null)
localStorage.removeItem('campusUser')
}

const value = {
user,
loading,
login,
signup,
logout,
isAuthenticated: !!user
}

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}