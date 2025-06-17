import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Factory } from 'lucide-react'

function Producao() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Produção</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Produção
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Factory className="h-5 w-5" />
            Registros de Produção
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aqui você pode registrar novas produções e acompanhar o histórico de fabricação dos produtos.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Producao

