import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Package, AlertTriangle, Edit, Trash2 } from 'lucide-react'

function Materiais() {
  const [materiais, setMateriais] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setMateriais([
        {
          id: 1,
          nome: 'Papel A4 75g',
          unidade_medida: 'resma',
          preco_compra: 25.50,
          quantidade_estoque: 15,
          estoque_minimo: 10,
          fornecedor: 'Papelaria Central',
          estoque_baixo: false
        },
        {
          id: 2,
          nome: 'Wire-o 1/2',
          unidade_medida: 'unidade',
          preco_compra: 0.85,
          quantidade_estoque: 5,
          estoque_minimo: 20,
          fornecedor: 'Encadernação Silva',
          estoque_baixo: true
        },
        {
          id: 3,
          nome: 'Capa Dura Azul',
          unidade_medida: 'unidade',
          preco_compra: 3.20,
          quantidade_estoque: 8,
          estoque_minimo: 5,
          fornecedor: 'Gráfica Moderna',
          estoque_baixo: false
        }
      ])
      setLoading(false)
    }, 800)
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Materiais</h1>
          <Button disabled>
            <Plus className="mr-2 h-4 w-4" />
            Novo Material
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
        <h1 className="text-3xl font-bold">Materiais</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Material
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materiais.map((material) => (
          <Card key={material.id} className={material.estoque_baixo ? 'border-red-200' : ''}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{material.nome}</CardTitle>
                  <CardDescription>{material.fornecedor}</CardDescription>
                </div>
                {material.estoque_baixo && (
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Estoque:</span>
                  <Badge variant={material.estoque_baixo ? 'destructive' : 'secondary'}>
                    {material.quantidade_estoque} {material.unidade_medida}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Preço:</span>
                  <span className="text-sm font-medium">
                    R$ {material.preco_compra.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Mínimo:</span>
                  <span className="text-sm">
                    {material.estoque_minimo} {material.unidade_medida}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  <Package className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Materiais

