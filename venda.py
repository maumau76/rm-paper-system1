from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class Cliente(db.Model):
    """Modelo para cadastro de clientes"""
    __tablename__ = 'clientes'
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=True)
    telefone = db.Column(db.String(20), nullable=True)
    endereco = db.Column(db.Text, nullable=True)
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relacionamentos
    vendas = db.relationship('Venda', backref='cliente', lazy=True)
    
    def __repr__(self):
        return f'<Cliente {self.nome}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'email': self.email,
            'telefone': self.telefone,
            'endereco': self.endereco,
            'data_criacao': self.data_criacao.isoformat() if self.data_criacao else None
        }

class Venda(db.Model):
    """Modelo para registro de vendas"""
    __tablename__ = 'vendas'
    
    id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, db.ForeignKey('clientes.id'), nullable=True)
    data_venda = db.Column(db.DateTime, default=datetime.utcnow)
    valor_total = db.Column(db.Float, nullable=False, default=0.0)
    forma_pagamento = db.Column(db.String(20), nullable=False)  # dinheiro, pix, cartao_debito, cartao_credito
    status = db.Column(db.String(20), nullable=False, default='concluida')  # pendente, concluida, cancelada
    observacoes = db.Column(db.Text, nullable=True)
    
    # Relacionamentos
    itens = db.relationship('VendaItem', backref='venda', lazy=True, cascade='all, delete-orphan')
    
    def __repr__(self):
        return f'<Venda {self.id} - R$ {self.valor_total}>'
    
    def calcular_total(self):
        """Calcula o valor total baseado nos itens da venda"""
        total = 0.0
        for item in self.itens:
            total += item.quantidade * item.preco_unitario
        return total
    
    def to_dict(self):
        return {
            'id': self.id,
            'cliente_id': self.cliente_id,
            'cliente_nome': self.cliente.nome if self.cliente else 'Cliente Avulso',
            'data_venda': self.data_venda.isoformat() if self.data_venda else None,
            'valor_total': self.valor_total,
            'forma_pagamento': self.forma_pagamento,
            'status': self.status,
            'observacoes': self.observacoes,
            'itens': [item.to_dict() for item in self.itens]
        }

class VendaItem(db.Model):
    """Modelo para itens de uma venda"""
    __tablename__ = 'venda_itens'
    
    id = db.Column(db.Integer, primary_key=True)
    venda_id = db.Column(db.Integer, db.ForeignKey('vendas.id'), nullable=False)
    produto_id = db.Column(db.Integer, db.ForeignKey('produtos.id'), nullable=False)
    quantidade = db.Column(db.Integer, nullable=False)
    preco_unitario = db.Column(db.Float, nullable=False)
    subtotal = db.Column(db.Float, nullable=False)
    
    def __repr__(self):
        return f'<VendaItem {self.produto.nome if self.produto else "N/A"} - {self.quantidade}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'venda_id': self.venda_id,
            'produto_id': self.produto_id,
            'produto_nome': self.produto.nome if self.produto else None,
            'quantidade': self.quantidade,
            'preco_unitario': self.preco_unitario,
            'subtotal': self.subtotal
        }

