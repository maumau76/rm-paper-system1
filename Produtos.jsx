import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, ShoppingCart, Edit } from 'lucide-react'

function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: 'Caderno A5 Wire-o',
          categoria: 'cadernos',
          preco_final: 15.90,
          quantidade_estoque: 25,
          custo_total: 8.50,
          margem_lucro: 87
        },
        {
          id: 2,
          nome: 'Planner Mensal',
          categoria: 'planners',
          preco_final: 28.50,
          quantidade_estoque: 12,
          custo_total: 14.20,
          margem_lucro: 101
        },
        {
          id: 3,
          nome: 'Bloco de Notas',
          categoria: 'blocos',
          preco_final: 8.90,
          quantidade_estoque: 45,
          custo_total: 4.30,
          margem_lucro: 107
        }
      ])
      setLoading(false)
    }, 800)
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Produtos</h1>
          <Button disabled>
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Produtos</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <Card key={produto.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{produto.nome}</CardTitle>
                  <CardDescription className="capitalize">{produto.categoria}</CardDescription>
                </div>
                <Badge variant="outline">
                  {produto.quantidade_estoque} un.
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Preço de Venda:</span>
                  <span className="text-sm font-bold text-green-600">
                    R$ {produto.preco_final.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Custo:</span>
                  <span className="text-sm">
                    R$ {produto.custo_total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Margem:</span>
                  <Badge variant="secondary">
                    {produto.margem_lucro.toFixed(0)}%
                  </Badge>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Produtos

