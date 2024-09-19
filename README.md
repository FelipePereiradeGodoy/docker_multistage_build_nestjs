This is a repository for studying a docker container using a node image with nestjs

```mermaid
flowchart TB
    subgraph Multi-stage Build
        direction TB
        A((Iniciar)) --> B((Escrever Dockerfile))
        B --> C((Construir Imagem))
        C --> D((Criar Container))
        D --> E((Executar Aplicação))
    end

    subgraph Primeira Etapa
        B1((Definir Base))
        B2((Copiar Código))
        B3((Instalar Dependências))
    end
