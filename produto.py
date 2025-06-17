from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class Produto(db.Model):
    """Modelo para produtos personalizados"""
    __tablename__ = 'produtos'
    
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.Text, nullable=True)
    categoria = db.Column(db.String(50), nullable=True)  # cadernos, planners, brindes
    margem_lucro = db.Column(db.Float, nullable=False, default=0.0)  # percentual
    preco_final = db.Column(db.Float, nullable=False, default=0.0)
    quantidade_estoque = db.Column(db.Integer, nullable=False, default=0)
    ativo = db.Column(db.Boolean, nullable=False, default=True)
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)
    data_atualizacao = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relacionamentos
    materiais = db.relationship('ProdutoMaterial', backref='produto', lazy=True, cascade='all, delete-orphan')
    producoes = db.relationship('Producao', backref='produto', lazy=True)
    vendas = db.relationship('VendaItem', backref='produto', lazy=True)
    
    def __repr__(self):
        return f'<Produto {self.nome}>'
    
    def calcular_custo_total(self):
        """Calcula o custo total baseado nos materiais utilizados"""
        custo_total = 0.0
        for produto_material in self.materiais:
            custo_material = produto_material.quantidade * produto_material.material.preco_compra
            custo_total += custo_material
        return custo_total
    
    def calcular_preco_sugerido(self):
        """Calcula o preço sugerido baseado no custo e margem de lucro"""
        custo_total = self.calcular_custo_total()
        if custo_total > 0 and self.margem_lucro > 0:
            return custo_total * (1 + self.margem_lucro / 100)
        return custo_total
    
    def to_dict(self):
        custo_total = self.calcular_custo_total()
        preco_sugerido = self.calcular_preco_sugerido()
        
        return {
            'id': self.id,
            'nome': self.nome,
            'descricao': self.descricao,
            'categoria': self.categoria,
            'margem_lucro': self.margem_lucro,
            'preco_final': self.preco_final,
            'quantidade_estoque': self.quantidade_estoque,
            'ativo': self.ativo,
            'custo_total': custo_total,
            'preco_sugerido': preco_sugerido,
            'data_criacao': self.data_criacao.isoformat() if self.data_criacao else None,
            'data_atualizacao': self.data_atualizacao.isoformat() if self.data_atualizacao else None,
            'materiais': [pm.to_dict() for pm in self.materiais]
        }

class ProdutoMaterial(db.Model):
    """Modelo para relacionamento entre produtos e materiais (receita)"""
    __tablename__ = 'produto_materiais'
    
    id = db.Column(db.Integer, primary_key=True)
    produto_id = db.Column(db.Integer, db.ForeignKey('produtos.id'), nullable=False)
    material_id = db.Column(db.Integer, db.ForeignKey('materiais.id'), nullable=False)
    quantidade = db.Column(db.Float, nullable=False)  # quantidade do material por unidade de produto
    
    def __repr__(self):
        return f'<ProdutoMaterial P:{self.produto_id} M:{self.material_id}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'produto_id': self.produto_id,
            'material_id': self.material_id,
            'material_nome': self.material.nome if self.material else None,
            'material_unidade': self.material.unidade_medida if self.material else None,
            'quantidade': self.quantidade,
            'custo_unitario': self.material.preco_compra if self.material else 0.0,
            'custo_total': self.quantidade * (self.material.preco_compra if self.material else 0.0)
        }

