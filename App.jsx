import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Factory, 
  Users, 
  DollarSign, 
  BarChart3,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Importar páginas (vamos criar depois)
import Dashboard from './pages/Dashboard'
import Materiais from './pages/Materiais'
import Produtos from './pages/Produtos'
import Producao from './pages/Producao'
import Vendas from './pages/Vendas'
import Clientes from './pages/Clientes'
import Financeiro from './pages/Financeiro'

const menuItems = [
  { path: '/', icon: Home, label: 'Dashboard' },
  { path: '/materiais', icon: Package, label: 'Materiais' },
  { path: '/produtos', icon: ShoppingCart, label: 'Produtos' },
  { path: '/producao', icon: Factory, label: 'Produção' },
  { path: '/vendas', icon: BarChart3, label: 'Vendas' },
  { path: '/clientes', icon: Users, label: 'Clientes' },
  { path: '/financeiro', icon: DollarSign, label: 'Financeiro' },
]

function Sidebar({ isOpen, onClose }) {
  const location = useLocation()

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between h-16 px-6 border-b">
        <h1 className="text-xl font-bold text-blue-600">RM Paper</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="lg:hidden"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b lg:hidden">
          <div className="flex items-center justify-between h-16 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold">RM Paper</h1>
            <div className="w-8" /> {/* Spacer */}
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/producao" element={<Producao />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/financeiro" element={<Financeiro />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

