from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class Producao(db.Model):
    """Modelo para registro de produção de produtos"""
    __tablename__ = 'producoes'
    
    id = db.Column(db.Integer, primary_key=True)
    produto_id = db.Column(db.Integer, db.ForeignKey('produtos.id'), nullable=False)
    quantidade_produzida = db.Column(db.Integer, nullable=False)
    custo_total_lote = db.Column(db.Float, nullable=False, default=0.0)
    custo_unitario = db.Column(db.Float, nullable=False, default=0.0)
    observacoes = db.Column(db.Text, nullable=True)
    data_producao = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f'<Producao {self.produto.nome if self.produto else "N/A"} - {self.quantidade_produzida}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'produto_id': self.produto_id,
            'produto_nome': self.produto.nome if self.produto else None,
            'quantidade_produzida': self.quantidade_produzida,
            'custo_total_lote': self.custo_total_lote,
            'custo_unitario': self.custo_unitario,
            'observacoes': self.observacoes,
            'data_producao': self.data_producao.isoformat() if self.data_producao else None
        }

