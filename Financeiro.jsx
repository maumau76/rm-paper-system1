import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, DollarSign } from 'lucide-react'

function Financeiro() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Financeiro</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Movimentação
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Controle Financeiro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Acompanhe entradas, saídas e o fluxo de caixa da sua papelaria.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Financeiro

