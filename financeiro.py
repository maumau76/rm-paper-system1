from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class MovimentacaoFinanceira(db.Model):
    """Modelo para controle de fluxo de caixa"""
    __tablename__ = 'movimentacoes_financeiras'
    
    id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.String(20), nullable=False)  # 'entrada', 'saida'
    categoria = db.Column(db.String(50), nullable=False)  # 'venda', 'compra_material', 'despesa_operacional', etc.
    descricao = db.Column(db.String(200), nullable=False)
    valor = db.Column(db.Float, nullable=False)
    forma_pagamento = db.Column(db.String(20), nullable=True)  # dinheiro, pix, cartao, transferencia
    data_movimentacao = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Referências opcionais para rastreabilidade
    venda_id = db.Column(db.Integer, db.ForeignKey('vendas.id'), nullable=True)
    material_id = db.Column(db.Integer, db.ForeignKey('materiais.id'), nullable=True)
    
    # Relacionamentos
    venda = db.relationship('Venda', backref='movimentacoes_financeiras', lazy=True)
    material = db.relationship('Material', backref='movimentacoes_financeiras', lazy=True)
    
    def __repr__(self):
        return f'<MovimentacaoFinanceira {self.tipo} - R$ {self.valor}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'tipo': self.tipo,
            'categoria': self.categoria,
            'descricao': self.descricao,
            'valor': self.valor,
            'forma_pagamento': self.forma_pagamento,
            'data_movimentacao': self.data_movimentacao.isoformat() if self.data_movimentacao else None,
            'venda_id': self.venda_id,
            'material_id': self.material_id
        }

class ConfiguracaoSistema(db.Model):
    """Modelo para configurações gerais do sistema"""
    __tablename__ = 'configuracoes_sistema'
    
    id = db.Column(db.Integer, primary_key=True)
    chave = db.Column(db.String(50), unique=True, nullable=False)
    valor = db.Column(db.Text, nullable=True)
    descricao = db.Column(db.String(200), nullable=True)
    data_atualizacao = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def __repr__(self):
        return f'<ConfiguracaoSistema {self.chave}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'chave': self.chave,
            'valor': self.valor,
            'descricao': self.descricao,
            'data_atualizacao': self.data_atualizacao.isoformat() if self.data_atualizacao else None
        }

