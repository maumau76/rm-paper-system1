# Manual Técnico - Sistema RM Paper

**Versão:** 1.0  
**Data:** Junho 2024  
**Autor:** Manus AI  
**Cliente:** RM Paper  

---

## Sumário Executivo

O Sistema RM Paper é uma solução completa de gestão desenvolvida especificamente para papelarias que trabalham com produtos personalizados. O sistema foi projetado para atender às necessidades específicas da RM Paper, oferecendo controle total sobre materiais, produção, vendas e financeiro.

Este manual técnico fornece informações detalhadas sobre a arquitetura, implementação, configuração e manutenção do sistema, servindo como guia para desenvolvedores e administradores de sistema.

## 1. Visão Geral da Arquitetura

### 1.1 Arquitetura Geral

O Sistema RM Paper foi desenvolvido seguindo uma arquitetura de aplicação web moderna, separando claramente as responsabilidades entre frontend e backend. Esta abordagem oferece flexibilidade, escalabilidade e facilita a manutenção do sistema.

A arquitetura é composta por três camadas principais:

**Camada de Apresentação (Frontend):** Desenvolvida em React com Vite, responsável pela interface do usuário e experiência de navegação. Utiliza componentes modernos e responsivos que se adaptam a diferentes dispositivos.

**Camada de Aplicação (Backend):** Implementada em Flask (Python), gerencia toda a lógica de negócio, validações, processamento de dados e comunicação com o banco de dados através de uma API RESTful.

**Camada de Dados:** Utiliza SQLite para desenvolvimento local e suporta PostgreSQL para produção, garantindo persistência e integridade dos dados através do ORM SQLAlchemy.

### 1.2 Tecnologias Utilizadas

#### Backend
- **Flask 3.1.1:** Framework web minimalista e flexível para Python
- **SQLAlchemy:** ORM (Object-Relational Mapping) para abstração do banco de dados
- **Flask-CORS:** Middleware para suporte a Cross-Origin Resource Sharing
- **SQLite/PostgreSQL:** Sistemas de gerenciamento de banco de dados

#### Frontend
- **React 18:** Biblioteca JavaScript para construção de interfaces de usuário
- **Vite:** Build tool moderna e rápida para desenvolvimento frontend
- **Tailwind CSS:** Framework CSS utility-first para estilização
- **Shadcn/UI:** Biblioteca de componentes de interface moderna
- **React Router DOM:** Gerenciamento de rotas no lado cliente
- **Lucide React:** Biblioteca de ícones SVG

### 1.3 Padrões de Desenvolvimento

O sistema segue padrões estabelecidos da indústria para garantir qualidade, manutenibilidade e escalabilidade:

**Padrão MVC (Model-View-Controller):** Separação clara entre modelos de dados, visualização e controle de fluxo.

**API RESTful:** Endpoints bem definidos seguindo convenções REST para operações CRUD.

**Componentização:** Interface dividida em componentes reutilizáveis e modulares.

**Responsividade:** Design adaptável para diferentes tamanhos de tela e dispositivos.

## 2. Estrutura do Banco de Dados

### 2.1 Modelo de Dados

O banco de dados foi projetado para suportar todas as operações necessárias para gestão de uma papelaria personalizada. O modelo relacional garante integridade referencial e permite consultas eficientes.

#### Tabela: materiais
Armazena informações sobre materiais e insumos utilizados na produção.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER (PK) | Identificador único |
| nome | VARCHAR(100) | Nome do material |
| unidade_medida | VARCHAR(20) | Unidade (resma, unidade, metro, etc.) |
| preco_compra | FLOAT | Preço de compra unitário |
| quantidade_estoque | FLOAT | Quantidade atual em estoque |
| estoque_minimo | FLOAT | Quantidade mínima para alerta |
| fornecedor | VARCHAR(100) | Nome do fornecedor |
| data_criacao | DATETIME | Data de criação do registro |
| data_atualizacao | DATETIME | Data da última atualização |

#### Tabela: produtos
Contém informações sobre produtos personalizados oferecidos.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER (PK) | Identificador único |
| nome | VARCHAR(100) | Nome do produto |
| descricao | TEXT | Descrição detalhada |
| categoria | VARCHAR(50) | Categoria do produto |
| margem_lucro | FLOAT | Percentual de margem de lucro |
| preco_final | FLOAT | Preço de venda |
| quantidade_estoque | INTEGER | Quantidade em estoque |
| ativo | BOOLEAN | Status ativo/inativo |
| data_criacao | DATETIME | Data de criação |
| data_atualizacao | DATETIME | Data da última atualização |

#### Tabela: produto_materiais
Relaciona produtos com materiais necessários (receita de produção).

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER (PK) | Identificador único |
| produto_id | INTEGER (FK) | Referência ao produto |
| material_id | INTEGER (FK) | Referência ao material |
| quantidade | FLOAT | Quantidade do material por unidade de produto |

### 2.2 Relacionamentos

O sistema implementa relacionamentos bem definidos entre as entidades:

**Um para Muitos (1:N):**
- Material → MovimentacoesEstoque
- Produto → ProdutoMateriais
- Cliente → Vendas
- Venda → VendaItens

**Muitos para Muitos (N:N):**
- Produtos ↔ Materiais (através de produto_materiais)

### 2.3 Índices e Performance

Para garantir performance adequada, foram implementados índices nas seguintes colunas:
- Chaves primárias (automático)
- Chaves estrangeiras
- Campos de data para consultas temporais
- Campos de status para filtragem

## 3. API Backend

### 3.1 Estrutura da API

A API segue padrões RESTful com endpoints organizados por recursos. Todas as respostas seguem um formato JSON consistente com campos de sucesso, dados e mensagens.

#### Formato de Resposta Padrão
```json
{
  "success": true|false,
  "data": {...},
  "message": "Mensagem descritiva"
}
```

### 3.2 Endpoints Principais

#### Materiais (/api/materiais)
- **GET /api/materiais** - Lista todos os materiais
- **POST /api/materiais** - Cria novo material
- **GET /api/materiais/{id}** - Obtém material específico
- **PUT /api/materiais/{id}** - Atualiza material
- **DELETE /api/materiais/{id}** - Remove material
- **POST /api/materiais/{id}/estoque** - Atualiza estoque
- **GET /api/materiais/estoque-baixo** - Lista materiais com estoque baixo

#### Produtos (/api/produtos)
- **GET /api/produtos** - Lista todos os produtos
- **POST /api/produtos** - Cria novo produto
- **GET /api/produtos/{id}** - Obtém produto específico
- **PUT /api/produtos/{id}** - Atualiza produto
- **DELETE /api/produtos/{id}** - Desativa produto
- **GET /api/produtos/categorias** - Lista categorias

#### Vendas (/api/vendas)
- **GET /api/vendas** - Lista vendas com paginação
- **POST /api/vendas** - Registra nova venda
- **GET /api/vendas/{id}** - Obtém venda específica
- **POST /api/vendas/{id}/cancelar** - Cancela venda

### 3.3 Validações e Tratamento de Erros

O sistema implementa validações robustas em múltiplas camadas:

**Validações de Entrada:** Verificação de tipos de dados, campos obrigatórios e formatos.

**Validações de Negócio:** Regras específicas como verificação de estoque antes de vendas.

**Tratamento de Exceções:** Captura e tratamento adequado de erros com mensagens informativas.

## 4. Frontend React

### 4.1 Estrutura de Componentes

O frontend foi desenvolvido com arquitetura baseada em componentes, promovendo reutilização e manutenibilidade.

#### Componentes Principais
- **App.jsx:** Componente raiz com roteamento
- **Layout:** Estrutura base com sidebar e header
- **Dashboard:** Página inicial com resumos e métricas
- **Páginas de Gestão:** Materiais, Produtos, Vendas, etc.

#### Componentes UI Reutilizáveis
- **Card:** Container para informações
- **Button:** Botões com variações de estilo
- **Badge:** Indicadores de status
- **Form Controls:** Inputs, selects e validações

### 4.2 Gerenciamento de Estado

O estado da aplicação é gerenciado através de:
- **useState:** Para estado local dos componentes
- **useEffect:** Para efeitos colaterais e carregamento de dados
- **Context API:** Para compartilhamento de estado global quando necessário

### 4.3 Comunicação com API

A comunicação com o backend é realizada através de:
- **Fetch API:** Para requisições HTTP
- **Async/Await:** Para tratamento assíncrono
- **Error Handling:** Tratamento adequado de erros de rede

## 5. Configuração e Deploy

### 5.1 Ambiente de Desenvolvimento

#### Pré-requisitos
- Python 3.8+
- Node.js 16+
- Git

#### Configuração Local
1. Clone do repositório
2. Configuração do ambiente virtual Python
3. Instalação de dependências
4. Inicialização do banco de dados
5. Execução dos serviços

### 5.2 Deploy em Produção

#### Opções de Hospedagem Gratuita

**Railway:** Plataforma recomendada para deploy completo com banco PostgreSQL incluído.

**Render:** Alternativa robusta com tier gratuito para aplicações web.

**Vercel + PlanetScale:** Combinação para frontend estático e banco gerenciado.

#### Configurações de Produção
- Variáveis de ambiente para configurações sensíveis
- Banco de dados PostgreSQL para melhor performance
- HTTPS obrigatório para segurança
- Logs estruturados para monitoramento

### 5.3 Docker

O sistema inclui configuração Docker para facilitar deploy e desenvolvimento:

**Dockerfile Backend:** Container otimizado para aplicação Flask
**Dockerfile Frontend:** Container para aplicação React
**Docker Compose:** Orquestração completa dos serviços

## 6. Segurança

### 6.1 Medidas Implementadas

**CORS:** Configurado adequadamente para permitir comunicação frontend-backend.

**Validação de Entrada:** Sanitização e validação de todos os dados de entrada.

**SQL Injection Prevention:** Uso de ORM SQLAlchemy com queries parametrizadas.

**Error Handling:** Tratamento adequado sem exposição de informações sensíveis.

### 6.2 Recomendações Adicionais

Para ambiente de produção, recomenda-se implementar:
- Autenticação e autorização de usuários
- Rate limiting para APIs
- Logs de auditoria
- Backup automático do banco de dados
- Monitoramento de performance

## 7. Manutenção e Monitoramento

### 7.1 Logs

O sistema gera logs estruturados para facilitar debugging e monitoramento:
- Logs de aplicação (backend.log)
- Logs de desenvolvimento (frontend.log)
- Logs de erro com stack traces

### 7.2 Backup

**Desenvolvimento:** Backup manual do arquivo SQLite
**Produção:** Backup automático configurado no provedor de banco

### 7.3 Atualizações

Processo recomendado para atualizações:
1. Teste em ambiente de desenvolvimento
2. Backup do banco de dados
3. Deploy gradual com rollback preparado
4. Monitoramento pós-deploy

## 8. Troubleshooting

### 8.1 Problemas Comuns

**Porta em uso:** Verificar processos rodando nas portas 5001 e 5173
**Dependências:** Reinstalar packages com versões corretas
**Banco de dados:** Verificar permissões e integridade

### 8.2 Comandos Úteis

```bash
# Verificar portas em uso
netstat -tlnp | grep 5001

# Logs em tempo real
tail -f backend.log

# Reiniciar sistema
./stop_system.sh && ./start_system.sh
```

## 9. Roadmap e Melhorias Futuras

### 9.1 Funcionalidades Planejadas

**Autenticação:** Sistema de login e controle de acesso
**Relatórios Avançados:** Gráficos e análises detalhadas
**Integração Fiscal:** Emissão de notas fiscais
**Mobile App:** Aplicativo para dispositivos móveis

### 9.2 Otimizações Técnicas

**Cache:** Implementação de cache para melhor performance
**Testes:** Suite completa de testes automatizados
**CI/CD:** Pipeline de integração e deploy contínuo
**Microserviços:** Divisão em serviços menores para escalabilidade

---

**Este manual técnico serve como guia completo para desenvolvimento, deploy e manutenção do Sistema RM Paper. Para dúvidas específicas ou suporte técnico, consulte a documentação adicional ou entre em contato com a equipe de desenvolvimento.**

