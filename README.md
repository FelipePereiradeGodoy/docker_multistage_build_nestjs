This is a repository for studying a docker container using a node image with nestjs

```mermaid
flowchart LR
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#fff,stroke:#333,stroke-width:2px
    style C fill:#fff,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
    style E fill:#9ff,stroke:#333,stroke-width:2px

    A(Iniciar) --> B{Primeira Etapa}
    B --> C{Segunda Etapa}
    C --> D{Terceira Etapa}
    D --> E(Imagem Final)

    subgraph Primeira Etapa
        B1((Imagem Base 1))
        B2((Instalação de Ferramentas))
        B3((Compilação do Código))
    end

    subgraph Segunda Etapa
        C1((Imagem Base 2))
        C2((Cópia de Artefatos))
    end

    subgraph Terceira Etapa
        D1((Imagem Base 3))
        D2((Configuração Final))
    end
