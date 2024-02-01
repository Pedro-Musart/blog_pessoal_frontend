# Blog Your Mind
![image](https://github.com/Pedro-Musart/blog_pessoal_frontend/assets/81385823/24f600e6-8985-4e01-9631-c041a2f674f5)

Link de acesso ao site: https://blog-pessoal-frontend-pied.vercel.app/

Blog Your Mind é um website desenvolvido com React.ts, que permite os usuários realizarem operações completas de CRUD, criando seus próprios perfis, criando, atualizando ou deletando postagens e temas. O projeto possui API própria desenvolvida com o framework Spring

#### Como executar o projeto?

- Certifique-se de ter o NodeJs instalado no computador.
- terminal: npm install 
- terminal: npm start

## Arquitetura do projeto

- **Framework:** O projeto é baseado no framework React.js, utilizando a biblioteca vite como ponto de partida.
- **Linguagem de Programação:** Foi utilizado o Typescript como linguagem principal, que possui como principal característica a tipagem forte, que garante aplicações mais consistentes e legíveisz.
- **Persistência de Dados:** Para a persistência de dados, faz uso da API blog-pessoal desenvolvida com Spring.
- **Requisições HTTP:** As requisições HTTP são gerenciadas através da biblioteca axios, proporcionando uma comunicação eficaz com o servidor.
- **Indicadores de Carregamento:** Para aprimorar a experiência do usuário, o projeto utiliza a biblioteca react-skeletons para exibir indicadores de carregamento durante o processamento de dados.
- **Estilização CSS:** A estilização do projeto é implementada com o auxílio Tailwind CSS, permitindo uma estilização altamente flexível e modular.
- **Icones da Aplicação:** Para a utilização de ícones no rodapé do site, foi utilizado a biblioteca phosphor-icons, que possui uma gama de ícones.
- **Navegação entre Páginas:** As transições entre diferentes páginas são efetuadas com o auxílio do react-router, proporcionando uma navegação fluida e amigável.
- **Single Page Application (SPA):** O projeto segue o padrão de SPA, que permite a navegação entre as páginas sem a necessidade de recarregar a página, resultando em uma experiência de usuário mais ágil e interativa.

### Arquitetura de pastas

- **components:** Contém componentes reutilizáveis em várias partes do website.
- **pages:** Agrupa componentes correspondentes às páginas do Blog Your Mind, responsáveis pela renderização com base nas URLs.
- **services:** Gerencia a comunicação com a API Spring, realizando operações CRUD e tratando dados.
- **contexts:** Compartilha dados entre componentes, facilitando a gestão de informações, como autenticação do usuário.
- **assets:** Armazena recursos estáticos, como imagens e ícones, organizados para fácil importação nos componentes.
- **models:** Contem modelos ou esquemas de dados que definem a estrutura das informações na aplicação, essas classes recebem os dados da API quando são instanciadas.
