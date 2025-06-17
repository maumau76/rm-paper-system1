# Manual do Usuário - Sistema RM Paper

**Versão:** 1.0  
**Data:** Junho 2024  
**Cliente:** RM Paper  

---

## Bem-vindo ao Sistema RM Paper!

Este manual foi criado para ajudá-lo a utilizar todas as funcionalidades do seu novo sistema de gestão. O Sistema RM Paper foi desenvolvido especificamente para atender às necessidades da sua papelaria, oferecendo controle completo sobre materiais, produtos, produção, vendas e financeiro.

## Sumário

1. [Primeiros Passos](#1-primeiros-passos)
2. [Dashboard - Visão Geral](#2-dashboard---visão-geral)
3. [Gestão de Materiais](#3-gestão-de-materiais)
4. [Produtos Personalizados](#4-produtos-personalizados)
5. [Controle de Produção](#5-controle-de-produção)
6. [Vendas](#6-vendas)
7. [Clientes](#7-clientes)
8. [Financeiro](#8-financeiro)
9. [Dicas e Boas Práticas](#9-dicas-e-boas-práticas)

## 1. Primeiros Passos

### 1.1 Acessando o Sistema

Para acessar o Sistema RM Paper, abra seu navegador e digite o endereço fornecido pela equipe técnica. Você verá a tela inicial com o menu lateral contendo todas as funcionalidades.

### 1.2 Navegação

O sistema possui um menu lateral fixo com as seguintes opções:
- **Dashboard:** Visão geral do negócio
- **Materiais:** Gestão de insumos e materiais
- **Produtos:** Cadastro de produtos personalizados
- **Produção:** Controle de fabricação
- **Vendas:** Registro e acompanhamento de vendas
- **Clientes:** Cadastro de clientes
- **Financeiro:** Controle de fluxo de caixa

### 1.3 Dados Iniciais

O sistema já vem com alguns dados de exemplo para facilitar o aprendizado. Você pode modificar ou excluir esses dados conforme necessário.

## 2. Dashboard - Visão Geral

O Dashboard é sua central de informações, mostrando os dados mais importantes do seu negócio em tempo real.

### 2.1 Cards Principais

**Saldo Atual:** Mostra o saldo total baseado em todas as movimentações financeiras.

**Vendas do Mês:** Exibe o valor total das vendas do mês atual e a quantidade de vendas realizadas.

**Materiais em Falta:** Indica quantos materiais estão abaixo do estoque mínimo configurado.

**Produtos em Falta:** Mostra produtos que precisam ser produzidos devido ao baixo estoque.

### 2.2 Produtos Mais Vendidos

Lista os 5 produtos mais vendidos nos últimos 30 dias, ajudando você a identificar quais itens têm maior saída.

### 2.3 Produções Recentes

Mostra as últimas produções realizadas nos últimos 7 dias, permitindo acompanhar a atividade de fabricação.

### 2.4 Alertas Importantes

**Materiais em Falta:** Lista materiais que estão abaixo do estoque mínimo, com indicação da quantidade atual versus mínima.

**Produtos com Baixo Estoque:** Produtos que precisam ser produzidos para repor o estoque.

## 3. Gestão de Materiais

Os materiais são a base da sua produção. Aqui você controla todos os insumos necessários para fabricar seus produtos.

### 3.1 Cadastrando Materiais

Para cadastrar um novo material:

1. Clique em "Materiais" no menu lateral
2. Clique no botão "Novo Material"
3. Preencha as informações:
   - **Nome:** Nome do material (ex: "Papel A4 75g")
   - **Unidade de Medida:** Como o material é medido (resma, unidade, metro, etc.)
   - **Preço de Compra:** Valor pago por unidade
   - **Quantidade em Estoque:** Quantidade atual disponível
   - **Estoque Mínimo:** Quantidade mínima para gerar alerta
   - **Fornecedor:** Nome do fornecedor (opcional)

### 3.2 Controlando Estoque

O sistema controla automaticamente o estoque dos materiais:

**Entrada de Estoque:** Quando você compra materiais, registre a entrada para atualizar o estoque.

**Saída Automática:** Quando você produz produtos, o sistema automaticamente reduz o estoque dos materiais utilizados.

**Alertas:** Materiais com estoque baixo aparecem destacados em vermelho no dashboard e na listagem.

### 3.3 Movimentações de Estoque

Cada alteração no estoque é registrada com:
- Data e hora da movimentação
- Tipo (entrada, saída, ajuste)
- Quantidade movimentada
- Motivo da movimentação

### 3.4 Dicas para Materiais

- Configure o estoque mínimo baseado no seu consumo médio
- Mantenha os preços atualizados para cálculos precisos
- Use nomes descritivos para facilitar a identificação

## 4. Produtos Personalizados

Esta é uma das funcionalidades mais importantes do sistema, onde você define seus produtos e suas "receitas" de produção.

### 4.1 Cadastrando Produtos

Para criar um novo produto:

1. Acesse "Produtos" no menu
2. Clique em "Novo Produto"
3. Preencha as informações básicas:
   - **Nome:** Nome do produto (ex: "Caderno A5 Wire-o")
   - **Descrição:** Descrição detalhada (opcional)
   - **Categoria:** Tipo do produto (cadernos, planners, blocos, etc.)

### 4.2 Definindo a Receita (Materiais Utilizados)

Para cada produto, você deve definir quais materiais são necessários e em que quantidade:

1. Na tela de criação/edição do produto, adicione os materiais
2. Para cada material, informe:
   - **Material:** Selecione da lista de materiais cadastrados
   - **Quantidade:** Quanto deste material é usado por unidade do produto

**Exemplo:** Para um "Caderno A5 Wire-o":
- Papel A4 75g: 0.1 resma (10% de uma resma)
- Wire-o 1/2: 1 unidade
- Capa Dura: 1 unidade

### 4.3 Cálculo Automático de Custos

O sistema calcula automaticamente:

**Custo Total:** Soma do custo de todos os materiais utilizados

**Preço Sugerido:** Baseado no custo total + margem de lucro definida

**Margem de Lucro:** Percentual de lucro sobre o custo

### 4.4 Definindo Preços

Você pode:
- Usar o preço sugerido pelo sistema
- Definir um preço personalizado
- Ajustar a margem de lucro para recalcular automaticamente

## 5. Controle de Produção

Aqui você registra quando produz seus produtos, controlando custos e atualizando estoques automaticamente.

### 5.1 Registrando uma Produção

Para registrar uma nova produção:

1. Acesse "Produção" no menu
2. Clique em "Nova Produção"
3. Selecione o produto a ser produzido
4. Informe a quantidade a produzir
5. Adicione observações se necessário

### 5.2 Verificação de Materiais

Antes de confirmar a produção, o sistema verifica se há materiais suficientes. Se algum material estiver em falta, você será alertado.

### 5.3 Processo Automático

Quando você confirma uma produção, o sistema:
1. Reduz automaticamente o estoque dos materiais utilizados
2. Adiciona os produtos produzidos ao estoque
3. Calcula o custo total do lote produzido
4. Registra a movimentação no histórico

### 5.4 Relatórios de Produção

Você pode consultar:
- Histórico de todas as produções
- Produções por produto específico
- Custos de produção por período
- Produtos mais produzidos

## 6. Vendas

O módulo de vendas permite registrar todas as suas vendas e acompanhar o desempenho.

### 6.1 Registrando uma Venda

Para registrar uma nova venda:

1. Acesse "Vendas" no menu
2. Clique em "Nova Venda"
3. Selecione o cliente (opcional)
4. Adicione os produtos vendidos:
   - Produto
   - Quantidade
   - Preço unitário (pode usar o preço padrão ou personalizar)
5. Escolha a forma de pagamento
6. Adicione observações se necessário

### 6.2 Controle Automático

Ao confirmar uma venda, o sistema:
1. Reduz automaticamente o estoque dos produtos vendidos
2. Registra a movimentação financeira
3. Calcula o total da venda
4. Atualiza as estatísticas

### 6.3 Cancelamento de Vendas

Se necessário, você pode cancelar uma venda. O sistema:
1. Restaura o estoque dos produtos
2. Registra o estorno financeiro
3. Marca a venda como cancelada

### 6.4 Relatórios de Vendas

Consulte relatórios detalhados com:
- Vendas por período
- Produtos mais vendidos
- Vendas por forma de pagamento
- Ticket médio
- Performance mensal

## 7. Clientes

Mantenha um cadastro organizado dos seus clientes para melhor atendimento e controle.

### 7.1 Cadastrando Clientes

Para cadastrar um cliente:

1. Acesse "Clientes" no menu
2. Clique em "Novo Cliente"
3. Preencha as informações:
   - **Nome:** Nome completo ou razão social
   - **Email:** Email para contato
   - **Telefone:** Telefone principal
   - **Endereço:** Endereço completo

### 7.2 Histórico de Compras

Para cada cliente, você pode consultar:
- Histórico completo de compras
- Valor total já gasto
- Produtos preferidos
- Última compra realizada

### 7.3 Vendas Avulsas

Nem toda venda precisa ter um cliente cadastrado. Você pode fazer vendas avulsas sem vincular a um cliente específico.

## 8. Financeiro

Controle completo do fluxo de caixa da sua papelaria.

### 8.1 Movimentações Automáticas

O sistema registra automaticamente:
- **Entradas:** Vendas realizadas
- **Saídas:** Compras de materiais (quando registradas)

### 8.2 Movimentações Manuais

Você pode registrar outras movimentações:
- Despesas operacionais
- Investimentos
- Retiradas
- Outras receitas

### 8.3 Saldo Atual

O saldo é calculado automaticamente baseado em todas as movimentações registradas.

### 8.4 Relatórios Financeiros

Consulte relatórios detalhados:
- Fluxo de caixa por período
- Entradas e saídas por categoria
- Resultado mensal
- Gráficos de evolução

### 8.5 Categorias de Movimentação

As movimentações são organizadas por categorias:
- **Entradas:** vendas, outras receitas
- **Saídas:** compra de materiais, despesas operacionais, retiradas

## 9. Dicas e Boas Práticas

### 9.1 Configuração Inicial

**Configure os Materiais Primeiro:** Antes de criar produtos, cadastre todos os materiais que você utiliza.

**Defina Estoques Mínimos Realistas:** Baseie-se no seu consumo médio para evitar alertas desnecessários.

**Mantenha Preços Atualizados:** Preços desatualizados afetam o cálculo de custos e margens.

### 9.2 Uso Diário

**Registre Produções Regularmente:** Não deixe acumular produções para registrar depois.

**Acompanhe o Dashboard:** Verifique diariamente os alertas de estoque baixo.

**Registre Vendas Imediatamente:** Isso mantém o estoque sempre atualizado.

### 9.3 Controle de Estoque

**Faça Inventários Periódicos:** Compare o estoque físico com o sistema regularmente.

**Use a Função de Ajuste:** Para corrigir divergências encontradas no inventário.

**Monitore Materiais em Falta:** Programe compras baseadas nos alertas do sistema.

### 9.4 Análise de Resultados

**Consulte Relatórios Mensalmente:** Analise o desempenho e identifique tendências.

**Acompanhe Produtos Mais Vendidos:** Foque na produção dos itens com maior saída.

**Monitore Margens de Lucro:** Ajuste preços se necessário para manter rentabilidade.

### 9.5 Backup e Segurança

**Mantenha Backups Regulares:** Seus dados são valiosos, proteja-os adequadamente.

**Use Senhas Seguras:** Se o sistema tiver autenticação, use senhas fortes.

**Acesso Controlado:** Limite o acesso ao sistema apenas a pessoas autorizadas.

## Suporte e Contato

Para dúvidas, problemas ou sugestões sobre o Sistema RM Paper:

1. Consulte este manual primeiro
2. Verifique a documentação técnica se necessário
3. Entre em contato com o suporte técnico

**Lembre-se:** O Sistema RM Paper foi desenvolvido especificamente para a RM Paper. Aproveite todas as funcionalidades para otimizar sua gestão e aumentar a eficiência do seu negócio!

---

**Manual do Usuário - Sistema RM Paper v1.0**  
**Desenvolvido com dedicação para a RM Paper**

