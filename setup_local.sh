#!/bin/bash

# Script para inicializar o sistema RM Paper localmente
echo "=== Inicializando Sistema RM Paper ==="

# Verificar se Python está instalado
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 não encontrado. Por favor, instale Python 3.8 ou superior."
    exit 1
fi

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale Node.js 16 ou superior."
    exit 1
fi

echo "✅ Dependências básicas verificadas"

# Configurar backend
echo "🔧 Configurando backend..."
cd rm_paper_system

# Criar ambiente virtual se não existir
if [ ! -d "venv" ]; then
    echo "📦 Criando ambiente virtual Python..."
    python3 -m venv venv
fi

# Ativar ambiente virtual e instalar dependências
source venv/bin/activate
pip install -r requirements.txt

# Criar dados de teste se o banco não existir
if [ ! -f "src/database/app.db" ]; then
    echo "🗄️ Criando banco de dados e dados de teste..."
    python criar_dados_teste.py
fi

echo "✅ Backend configurado"

# Configurar frontend
echo "🔧 Configurando frontend..."
cd ../rm-paper-frontend

# Instalar dependências do frontend
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências do frontend..."
    npm install
fi

echo "✅ Frontend configurado"

# Voltar ao diretório raiz
cd ..

echo ""
echo "🎉 Sistema RM Paper configurado com sucesso!"
echo ""
echo "Para iniciar o sistema:"
echo "1. Backend: cd rm_paper_system && source venv/bin/activate && python src/main.py"
echo "2. Frontend: cd rm-paper-frontend && npm run dev"
echo ""
echo "Acesse o sistema em: http://localhost:5173"
echo "API disponível em: http://localhost:5001/api"

