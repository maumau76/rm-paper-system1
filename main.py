import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from src.models.user import db
from src.routes.user import user_bp
from src.routes.material import material_bp
from src.routes.produto import produto_bp
from src.routes.producao import producao_bp
from src.routes.venda import venda_bp
from src.routes.financeiro import financeiro_bp

# Importar todos os modelos para garantir que sejam criados
from src.models.material import Material, MovimentacaoEstoque
from src.models.produto import Produto, ProdutoMaterial
from src.models.producao import Producao
from src.models.venda import Cliente, Venda, VendaItem
from src.models.financeiro import MovimentacaoFinanceira, ConfiguracaoSistema

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Configurar CORS para permitir acesso do frontend
CORS(app)

app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(material_bp, url_prefix='/api')
app.register_blueprint(produto_bp, url_prefix='/api')
app.register_blueprint(producao_bp, url_prefix='/api')
app.register_blueprint(venda_bp, url_prefix='/api')
app.register_blueprint(financeiro_bp, url_prefix='/api')

# uncomment if you need to use database
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
