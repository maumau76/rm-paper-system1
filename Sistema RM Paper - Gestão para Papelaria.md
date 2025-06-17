# Sistema RM Paper - Gestão para Papelaria

Sistema completo de gestão para papelarias personalizadas, desenvolvido especificamente para a **RM Paper**.

## 📋 Funcionalidades

### 🏠 Dashboard
- Visão geral do negócio
- Saldo atual e vendas do mês
- Produtos mais vendidos
- Alertas de estoque baixo
- Produções recentes

### 📦 Gestão de Materiais
- Cadastro de materiais/insumos
- Controle de estoque com alertas
- Histórico de movimentações
- Gestão de fornecedores

### 🛍️ Produtos Personalizados
- Cadastro de produtos
- Receitas (materiais utilizados)
- Cálculo automático de custos
- Definição de margem de lucro
- Preço sugerido automático

### 🏭 Controle de Produção
- Registro de produções
- Consumo automático de materiais
- Controle de custos por lote
- Histórico de produções

### 💰 Vendas
- Registro de vendas
- Gestão de clientes
- Baixa automática no estoque
- Relatórios de vendas

### 📊 Financeiro
- Controle de fluxo de caixa
- Entradas e saídas
- Relatórios mensais
- Movimentações por categoria

## 🚀 Instalação e Execução

### Pré-requisitos
- Python 3.8 ou superior
- Node.js 16 ou superior
- Git

### Instalação Local

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd rm-paper-system
```

2. **Execute o script de configuração**
```bash
./setup_local.sh
```

3. **Inicie o sistema**
```bash
./start_system.sh
```

4. **Acesse o sistema**
- Frontend: http://localhost:5173
- API: http://localhost:5001/api

### Parar o Sistema
```bash
./stop_system.sh
```

## 🐳 Deploy com Docker

### Usando Docker Compose (Recomendado)
```bash
# Construir e iniciar os serviços
docker-compose up -d

# Parar os serviços
docker-compose down
```

## 🌐 Deploy em Nuvem

### Opções Gratuitas Recomendadas

#### 1. Railway (Recomendado)
- Conecte seu repositório GitHub
- Deploy automático
- Banco de dados PostgreSQL gratuito

#### 2. Render
- Frontend: Deploy estático gratuito
- Backend: Web service gratuito

#### 3. Vercel + PlanetScale
- Frontend no Vercel
- Backend no Railway/Render
- Banco no PlanetScale

## 📁 Estrutura do Projeto

```
rm-paper-system/
├── rm_paper_system/          # Backend Flask
│   ├── src/
│   │   ├── models/           # Modelos do banco de dados
│   │   ├── routes/           # Endpoints da API
│   │   ├── database/         # Banco SQLite
│   │   └── main.py          # Aplicação principal
│   ├── requirements.txt      # Dependências Python
│   └── Dockerfile           # Container do backend
├── rm-paper-frontend/        # Frontend React
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── pages/           # Páginas da aplicação
│   │   └── App.jsx         # Componente principal
│   ├── package.json         # Dependências Node.js
│   └── Dockerfile          # Container do frontend
├── docker-compose.yml       # Orquestração dos serviços
├── setup_local.sh          # Script de configuração
├── start_system.sh         # Script para iniciar
└── stop_system.sh          # Script para parar
```

## 🔧 Configuração

### Variáveis de Ambiente

#### Backend
- `FLASK_ENV`: Ambiente (development/production)
- `DATABASE_URL`: URL do banco de dados (opcional)

#### Frontend
- `VITE_API_URL`: URL da API backend

### Banco de Dados
- **Local**: SQLite (automático)
- **Produção**: PostgreSQL recomendado

## 📱 Uso do Sistema

### Primeiro Acesso
1. O sistema criará dados de exemplo automaticamente
2. Acesse o dashboard para visão geral
3. Configure materiais e produtos conforme sua necessidade

### Fluxo Básico
1. **Cadastre materiais** (papel, wire-o, capas, etc.)
2. **Crie produtos** definindo quais materiais usar
3. **Registre produções** para fabricar produtos
4. **Faça vendas** e acompanhe o estoque
5. **Monitore financeiro** através dos relatórios

## 🛠️ Tecnologias Utilizadas

### Backend
- **Flask**: Framework web Python
- **SQLAlchemy**: ORM para banco de dados
- **Flask-CORS**: Suporte a CORS
- **SQLite**: Banco de dados local

### Frontend
- **React**: Biblioteca JavaScript
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework CSS
- **Shadcn/UI**: Componentes de interface
- **Lucide Icons**: Ícones
- **React Router**: Navegação

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique os logs: `tail -f backend.log` ou `tail -f frontend.log`
2. Reinicie o sistema: `./stop_system.sh && ./start_system.sh`
3. Verifique se as portas 5001 e 5173 estão livres

## 📄 Licença

Este sistema foi desenvolvido especificamente para a RM Paper.

---

**Desenvolvido com ❤️ para a RM Paper**

