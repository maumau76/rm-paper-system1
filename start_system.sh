#!/bin/bash

# Script para iniciar o sistema RM Paper
echo "=== Iniciando Sistema RM Paper ==="

# Função para verificar se uma porta está em uso
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Função para parar processos existentes
stop_services() {
    echo "🛑 Parando serviços existentes..."
    pkill -f "python src/main.py" 2>/dev/null || true
    pkill -f "npm run dev" 2>/dev/null || true
    pkill -f "vite" 2>/dev/null || true
    sleep 2
}

# Parar serviços existentes
stop_services

# Iniciar backend
echo "🚀 Iniciando backend..."
cd rm_paper_system
source venv/bin/activate

# Verificar se a porta 5001 está livre
if check_port 5001; then
    echo "⚠️ Porta 5001 em uso. Tentando liberar..."
    lsof -ti:5001 | xargs kill -9 2>/dev/null || true
    sleep 2
fi

# Iniciar Flask em background
nohup python src/main.py > ../backend.log 2>&1 &
BACKEND_PID=$!

# Aguardar backend inicializar
echo "⏳ Aguardando backend inicializar..."
sleep 5

# Verificar se backend está rodando
if check_port 5001; then
    echo "✅ Backend iniciado na porta 5001"
else
    echo "❌ Erro ao iniciar backend. Verifique o log: tail -f backend.log"
    exit 1
fi

# Iniciar frontend
echo "🚀 Iniciando frontend..."
cd ../rm-paper-frontend

# Verificar se a porta 5173 está livre
if check_port 5173; then
    echo "⚠️ Porta 5173 em uso. Tentando liberar..."
    lsof -ti:5173 | xargs kill -9 2>/dev/null || true
    sleep 2
fi

# Iniciar Vite em background
nohup npm run dev -- --host > ../frontend.log 2>&1 &
FRONTEND_PID=$!

# Aguardar frontend inicializar
echo "⏳ Aguardando frontend inicializar..."
sleep 8

# Verificar se frontend está rodando
if check_port 5173; then
    echo "✅ Frontend iniciado na porta 5173"
else
    echo "❌ Erro ao iniciar frontend. Verifique o log: tail -f frontend.log"
    exit 1
fi

cd ..

echo ""
echo "🎉 Sistema RM Paper iniciado com sucesso!"
echo ""
echo "📱 Frontend: http://localhost:5173"
echo "🔌 API Backend: http://localhost:5001/api"
echo ""
echo "📋 PIDs dos processos:"
echo "   Backend: $BACKEND_PID"
echo "   Frontend: $FRONTEND_PID"
echo ""
echo "📝 Logs:"
echo "   Backend: tail -f backend.log"
echo "   Frontend: tail -f frontend.log"
echo ""
echo "🛑 Para parar o sistema: ./stop_system.sh"

