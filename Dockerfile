# Dockerfile para o backend Flask
FROM python:3.11-slim

WORKDIR /app

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copiar requirements e instalar dependências Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar código da aplicação
COPY src/ ./src/
COPY criar_dados_teste.py .

# Criar diretório para banco de dados
RUN mkdir -p src/database

# Expor porta
EXPOSE 5001

# Comando para iniciar a aplicação
CMD ["python", "src/main.py"]

