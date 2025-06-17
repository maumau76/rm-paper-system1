#!/bin/bash

# Script para parar o sistema RM Paper
echo "=== Parando Sistema RM Paper ==="

# Parar processos do backend
echo "🛑 Parando backend..."
pkill -f "python src/main.py" 2>/dev/null && echo "✅ Backend parado" || echo "ℹ️ Backend não estava rodando"

# Parar processos do frontend
echo "🛑 Parando frontend..."
pkill -f "npm run dev" 2>/dev/null && echo "✅ Frontend (npm) parado" || echo "ℹ️ Frontend (npm) não estava rodando"
pkill -f "vite" 2>/dev/null && echo "✅ Frontend (vite) parado" || echo "ℹ️ Frontend (vite) não estava rodando"

# Liberar portas se ainda estiverem em uso
echo "🔓 Liberando portas..."

# Porta 5001 (backend)
if lsof -Pi :5001 -sTCP:LISTEN -t >/dev/null 2>&1; then
    lsof -ti:5001 | xargs kill -9 2>/dev/null
    echo "✅ Porta 5001 liberada"
fi

# Porta 5173 (frontend)
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null 2>&1; then
    lsof -ti:5173 | xargs kill -9 2>/dev/null
    echo "✅ Porta 5173 liberada"
fi

# Remover logs antigos
echo "🧹 Limpando logs..."
rm -f backend.log frontend.log

echo ""
echo "✅ Sistema RM Paper parado com sucesso!"

