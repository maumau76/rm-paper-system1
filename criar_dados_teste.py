#!/usr/bin/env python3
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from src.models.user import db
from src.models.material import Material
from src.models.produto import Produto, ProdutoMaterial
from src.main import app

def criar_dados_teste():
    with app.app_context():
        # Limpar dados existentes
        db.drop_all()
        db.create_all()
        
        # Criar materiais de teste
        material1 = Material(
            nome='Papel A4 75g',
            unidade_medida='resma',
            preco_compra=25.50,
            quantidade_estoque=15,
            estoque_minimo=10,
            fornecedor='Papelaria Central'
        )
        
        material2 = Material(
            nome='Wire-o 1/2',
            unidade_medida='unidade',
            preco_compra=0.85,
            quantidade_estoque=5,
            estoque_minimo=20,
            fornecedor='Encadernação Silva'
        )
        
        material3 = Material(
            nome='Capa Dura Azul',
            unidade_medida='unidade',
            preco_compra=3.20,
            quantidade_estoque=8,
            estoque_minimo=5,
            fornecedor='Gráfica Moderna'
        )
        
        db.session.add_all([material1, material2, material3])
        db.session.commit()
        
        # Criar produtos de teste
        produto1 = Produto(
            nome='Caderno A5 Wire-o',
            categoria='cadernos',
            margem_lucro=87.0,
            preco_final=15.90,
            quantidade_estoque=25
        )
        
        produto2 = Produto(
            nome='Planner Mensal',
            categoria='planners',
            margem_lucro=101.0,
            preco_final=28.50,
            quantidade_estoque=12
        )
        
        db.session.add_all([produto1, produto2])
        db.session.commit()
        
        # Criar relacionamentos produto-material
        pm1 = ProdutoMaterial(
            produto_id=produto1.id,
            material_id=material1.id,
            quantidade=0.1  # 0.1 resma por caderno
        )
        
        pm2 = ProdutoMaterial(
            produto_id=produto1.id,
            material_id=material2.id,
            quantidade=1  # 1 wire-o por caderno
        )
        
        pm3 = ProdutoMaterial(
            produto_id=produto1.id,
            material_id=material3.id,
            quantidade=1  # 1 capa por caderno
        )
        
        db.session.add_all([pm1, pm2, pm3])
        db.session.commit()
        
        print("Dados de teste criados com sucesso!")
        print(f"Materiais: {Material.query.count()}")
        print(f"Produtos: {Produto.query.count()}")

if __name__ == '__main__':
    criar_dados_teste()

