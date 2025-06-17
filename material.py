from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class Material(db.Model):
    """Modelo para cadastro de materiais/insumos"""
    __tablename__ = 'materiais'
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    unidade_medida = db.Column(db.String(20), nullable=False)  # unidade, metro, grama, etc.
    preco_compra = db.Column(db.Float, nullable=False, default=0.0)
    quantidade_estoque = db.Column(db.Float, nullable=False, default=0.0)
    fornecedor = db.Column(db.String(100), nullable=True)
    estoque_minimo = db.Column(db.Float, nullable=False, default=0.0)
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)
    data_atualizacao = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relacionamentos
    movimentacoes = db.relationship('MovimentacaoEstoque', backref='material', lazy=True)
    produto_materiais = db.relationship('ProdutoMaterial', backref='material', lazy=True)
    
    def __repr__(self):
        return f'<Material {self.nome}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'unidade_medida': self.unidade_medida,
            'preco_compra': self.preco_compra,
            'quantidade_estoque': self.quantidade_estoque,
            'fornecedor': self.fornecedor,
            'estoque_minimo': self.estoque_minimo,
            'data_criacao': self.data_criacao.isoformat() if self.data_criacao else None,
            'data_atualizacao': self.data_atualizacao.isoformat() if self.data_atualizacao else None,
            'estoque_baixo': self.quantidade_estoque <= self.estoque_minimo
        }

class MovimentacaoEstoque(db.Model):
    """Modelo para histórico de movimentações de estoque"""
    __tablename__ = 'movimentacoes_estoque'
    
    id = db.Column(db.Integer, primary_key=True)
    material_id = db.Column(db.Integer, db.ForeignKey('materiais.id'), nullable=False)
    tipo = db.Column(db.String(20), nullable=False)  # 'entrada', 'saida', 'ajuste'
    quantidade = db.Column(db.Float, nullable=False)
    quantidade_anterior = db.Column(db.Float, nullable=False)
    quantidade_nova = db.Column(db.Float, nullable=False)
    motivo = db.Column(db.String(200), nullable=True)
    data_movimentacao = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f'<MovimentacaoEstoque {self.tipo} - {self.quantidade}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'material_id': self.material_id,
            'material_nome': self.material.nome if self.material else None,
            'tipo': self.tipo,
            'quantidade': self.quantidade,
            'quantidade_anterior': self.quantidade_anterior,
            'quantidade_nova': self.quantidade_nova,
            'motivo': self.motivo,
            'data_movimentacao': self.data_movimentacao.isoformat() if self.data_movimentacao else None
        }

