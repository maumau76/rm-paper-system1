import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  DollarSign, 
  ShoppingCart, 
  Package, 
  AlertTriangle,
  TrendingUp,
  Factory
} from 'lucide-react'

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento de dados do dashboard
    // Em produção, isso seria uma chamada para a API
    setTimeout(() => {
      setDashboardData({
        saldo_atual: 15420.50,
        vendas_mes: {
          valor_total: 8750.00,
          quantidade: 45
        },
        produtos_mais_vendidos: [
          ['Caderno A5 Wire-o', 25],
          ['Planner Mensal', 18],
          ['Bloco de Notas', 15],
          ['Agenda 2024', 12],
          ['Caderno Universitário', 10]
        ],
        materiais_em_falta: [
          { id: 1, nome: 'Papel A4 75g', quantidade_estoque: 2, estoque_minimo: 10 },
          { id: 2, nome: 'Wire-o 1/2', quantidade_estoque: 5, estoque_minimo: 20 },
          { id: 3, nome: 'Capa Dura Azul', quantidade_estoque: 1, estoque_minimo: 5 }
        ],
        producoes_recentes: [
          { id: 1, produto_nome: 'Caderno A5 Wire-o', quantidade_produzida: 50, data_producao: '2024-06-10' },
          { id: 2, produto_nome: 'Planner Mensal', quantidade_produzida: 30, data_producao: '2024-06-09' },
          { id: 3, produto_nome: 'Bloco de Notas', quantidade_produzida: 100, data_producao: '2024-06-08' }
        ],
        produtos_baixo_estoque: [
          { id: 1, nome: 'Agenda 2024', quantidade_estoque: 3 },
          { id: 2, nome: 'Caderno Universitário', quantidade_estoque: 2 }
        ]
      })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Atual</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {dashboardData.saldo_atual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendas do Mês</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {dashboardData.vendas_mes.valor_total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              {dashboardData.vendas_mes.quantidade} vendas realizadas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Materiais em Falta</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {dashboardData.materiais_em_falta.length}
            </div>
            <p className="text-xs text-muted-foreground">
              Materiais abaixo do estoque mínimo
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtos em Falta</CardTitle>
            <Package className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {dashboardData.produtos_baixo_estoque.length}
            </div>
            <p className="text-xs text-muted-foreground">
              Produtos com baixo estoque
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Produtos Mais Vendidos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Produtos Mais Vendidos
            </CardTitle>
            <CardDescription>Últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dashboardData.produtos_mais_vendidos.map(([produto, quantidade], index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">
                      {index + 1}
                    </Badge>
                    <span className="text-sm font-medium">{produto}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{quantidade} un.</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Produções Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Factory className="h-5 w-5" />
              Produções Recentes
            </CardTitle>
            <CardDescription>Últimos 7 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dashboardData.producoes_recentes.map((producao) => (
                <div key={producao.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{producao.produto_nome}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(producao.data_producao).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <Badge variant="secondary">
                    {producao.quantidade_produzida} un.
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alertas */}
      {(dashboardData.materiais_em_falta.length > 0 || dashboardData.produtos_baixo_estoque.length > 0) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Materiais em Falta */}
          {dashboardData.materiais_em_falta.length > 0 && (
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-5 w-5" />
                  Materiais em Falta
                </CardTitle>
                <CardDescription>Materiais abaixo do estoque mínimo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {dashboardData.materiais_em_falta.map((material) => (
                    <div key={material.id} className="flex items-center justify-between p-2 bg-red-50 rounded">
                      <span className="text-sm font-medium">{material.nome}</span>
                      <div className="text-right">
                        <p className="text-sm text-red-600">
                          {material.quantidade_estoque} / {material.estoque_minimo}
                        </p>
                        <p className="text-xs text-muted-foreground">atual / mínimo</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Produtos com Baixo Estoque */}
          {dashboardData.produtos_baixo_estoque.length > 0 && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Package className="h-5 w-5" />
                  Produtos com Baixo Estoque
                </CardTitle>
                <CardDescription>Produtos que precisam ser produzidos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {dashboardData.produtos_baixo_estoque.map((produto) => (
                    <div key={produto.id} className="flex items-center justify-between p-2 bg-orange-50 rounded">
                      <span className="text-sm font-medium">{produto.nome}</span>
                      <Badge variant="outline" className="text-orange-600">
                        {produto.quantidade_estoque} un.
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}

export default Dashboard

