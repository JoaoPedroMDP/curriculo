interface Achievement{
    id: number;
    institution: string;
    title: string;
    description: string;
    date: string;
    hidden?: boolean;
}

const achievements: Achievement[] = [
    {
        "id": 0,
        "institution": "Ecomp UFPR",
        "title": "Desenvolvedor destaque",
        "description": "Prêmio dado ao desenvolvedor que mais se destacou no ano de 2020",
        "date": "01/12/2020"
    },
    {
        "id": 1,
        "institution": "Ecomp UFPR",
        "title": "Desenvolvedor destaque Back End",
        "description": "Prêmio dado ao desenvolvedor de Back End que mais se destacou no ano de 2020",
        "date": "01/12/2020"
    },
    {
        "id": 2,
        "institution": "Ecomp UFPR",
        "title": "Ecomper de Honra",
        "description": "Prêmio dado ao membro votado como destaque de 2020",
        "date": "01/12/2020"
    },
    {
        "id": 3,
        "hidden": true,
        "institution": "Ecomp UFPR",
        "title": "Membro Jim Carrey",
        "description": "Prêmio dado ao membro mais engraçado de 2020",
        "date": "01/12/2020"
    },
    {
        "id": 4,
        "institution": "Ecomp UFPR",
        "title": "Dream Team",
        "description": "Prêmio dado aos integrantes do Dream Team de desenvolvedores de 2020",
        "date": "01/12/2020"
    },
    {
        "id": 5,
        "hidden": true,
        "institution": "Ecomp UFPR",
        "title": "Membro Jim Carrey",
        "description": "Prêmio dado ao membro mais engraçado de 2021",
        "date": "01/12/2021"
    },
    {
        "id": 6,
        "institution": "Ecomp UFPR",
        "title": "Desenvolvedor 'brabo' Back End",
        "description": "Prêmio dado ao desenvolvedor de Back End que mais se destacou no ano de 2021",
        "date": "01/12/2021"
    },
    {
        "id": 7,
        "institution": "Ecomp UFPR",
        "title": "Ecomper de Honra",
        "description": "Prêmio dado ao membro votado como destaque de 2021",
        "date": "01/12/2021"
    },
    {
        "id": 8,
        "institution": "RNP - PoP Paraná",
        "title": "Promoção",
        "description": "Minha primeira promoção! Agora sou Técnico de Desenvolvimento",
        "date": "01/06/2022"
    }
];

interface Experience{
    id: number;
    institution: string;
    start: string;
    end: string | null;
    description: string;
    position?: string;
}

const profExp: Experience[] = [
    {
        "id": 0,
        "institution": "RNP - PoP Paraná",
        "position": "Técnico de desenvolvimento",
        "description": "Promovido a Técnico de Desenvolvimento, mantendo a responsabilidade pelo desenvolvimento de scripts de automação e integração de serviços, agora com maior carga horária e participação no rodízio de plantão semanal para garantir suporte contínuo. Continuo desenvolvendo e otimizando scripts em Python, bem como bots para Telegram e WhatsApp, melhorando a eficiência na resolução de incidentes e na comunicação com universidades parceiras.",
        "start": "06/2022",
        "end":  null,
    },
    {
        "id": 1,
        "institution": "RNP - PoP Paraná",
        "position": "Estagiário de desenvolvimento",
        "description": "Desenvolvi diversos scripts de automação em Python, focados em otimizar processos internos e reduzir o tempo de resposta a incidentes. Criei bots para Telegram e WhatsApp que facilitaram a comunicação e a resolução rápida de problemas com universidades parceiras. Integrei múltiplos serviços de monitoramento e sistemas de tickets, proporcionando uma gestão mais eficiente de incidentes e recursos.",
        "start": "10/2021",
        "end": "06/2022",
    },
    {
        "id": 2,
        "institution": "Clientar CRM",
        "position": "Estagiário desenvolvedor Back-End",
        "description": "Contribuí para o desenvolvimento do back-end de um sistema CRM robusto utilizando Laravel e MySQL, focando na criação de soluções escaláveis e eficientes. Refatorei código legado, aprimorando a manutenibilidade e a performance do sistema. Participei ativamente no planejamento e na implementação de novos módulos, aplicando práticas de Clean Code e Domain Driven Design (DDD) para garantir a qualidade e a sustentabilidade do software.",
        "start": "01/2021",
        "end": "09/2021",
    },
    {
        "id": 3,
        "institution": "Ecomp UFPR",
        "position": "Gerente de Qualidade",
        "description": "Gerenciei o deploy de aplicações em servidores na nuvem, garantindo a estabilidade e segurança das entregas. Planejei e conduzi reuniões de diretoria, alinhando estratégias e acompanhando o progresso das metas organizacionais. Supervisei o acompanhamento e reporte de OKRs, assegurando a aderência aos objetivos-chave e contribuindo para o crescimento sustentável da organização. Recrutei e capacitei novos membros, fortalecendo a equipe com talentos alinhados à cultura e às metas da organização.",
        "start": "09/2021",
        "end": "06/2022",
    },
    {
        "id": 4,
        "institution": "Ecomp UFPR",
        "position": "Assessor de negócios",
        "description": "Realizei o contato com potenciais clientes (leads), conduzi reuniões de briefing e elaborei documentos de funcionalidades para revisão. Facilitei reuniões de Planning Poker com os desenvolvedores e intermediei a comunicação com o cliente (Product Owner), assegurando alinhamento nas entregas.",
        "start": "01/2021",
        "end": "08/2020",
    },
    {
        "id": 5,
        "institution": "Ecomp UFPR",
        "position": "Assessor de Projetos",
        "description": "Auxiliei na gestão de projetos, buscando melhorias e otimizações no processo de desenvolvimento de software. Fui responsável pela capacitação de novos membros, preparando a equipe para atender às demandas.",
        "start": "04/2020",
        "end": "12/2020",
    },
    {
        "id": 6,
        "institution": "Ecomp UFPR",
        "position": "Desenvolvedor Back-End",
        "description": "Atuei como desenvolvedor back-end utilizando Laravel e MariaDB, contribuindo para dois projetos de e-commerce e oferecendo assistência a outros projetos da empresa, com foco em desenvolvimento de soluções escaláveis.",
        "start": "04/2020",
        "end": "06/2022",
    },
];

const acadExp: Experience[] = [
    {
        "id": 0,
        "institution": "Universidade Federal do Paraná",
        "position": "Bolsista - Iniciação Científica em Turismo",
        "start": "09/2022",
        "end": "09/2023",
        "description": "Desenvolvi um Web Scraper utilizando Selenium para coletar e analisar reviews de usuários da plataforma TripAdvisor, contribuindo para a pesquisa de coleta de dados online em projetos científicos. O trabalho resultou na escrita e publicação de um artigo científico na revista iSys, destacando as metodologias, problemas e resultados obtidos ao longo do desenvolvimento do scraper."
    },
    {
        "id": 1,
        "institution": "Laboratório de Inteligência Artificial aplicada à Bioinformática - UFPR",
        "position": "Bolsista - Iniciação Científica em Bioinformática",
        "start": "08/2024",
        "end": null,
        "description": "Desenvolvo o eBLASTIC, um sistema web inovador voltado para a pesquisa de genes homólogos, fornecendo aos biólogos uma ferramenta visual e intuitiva para análise genética. Utilizo Python (com Django e Pandas) e Next.js para criar a interface e o backend do sistema, que é integrado a sistemas externos como o BLAST do Uniprot e SWeeP. Implemento funcionalidades que permitem a inserção de arquivos multifasta, execução de buscas BLAST, coleta de dados taxonômicos adicionais e visualização dos resultados através de gráficos scatter, facilitando a interpretação dos vetores de cada gene."
    },
];

interface UserData{
    name: string;
    birth_date: string;
    sex: string;
    marital_status: string;
    linkedin: string;
    github: string;
    email: string;
    title: string;
    briefs: string[];
    location: string;
}

const userData: UserData = {
    "name": "João Pedro Martins",
    "birth_date": "13/03/2000",
    "sex": "Masculino",
    "marital_status": "Solteiro",
    "linkedin": "https://www.linkedin.com/in/joaopedromdp/",
    "github": "https://github.com/JoaoPedroMDP",
    "email": "joao.pedro.mdp@outlook.com",
    "title": "Desenvolvedor Full Stack com ênfase em Back-end",
    "briefs": [
        "Apaixonado por problemas inéditos, vejo desafios como chances de sair da monotonia. Gosto de criar soluções criativas e eficientes, e quero ampliar meu repertório de ferramentas e técnicas com pessoas experientes. Tenho um forte senso de propósito social e desejo criar soluções que impactem positivamente as pessoas ao meu redor.",
        "Além disso, amo ensinar. No passado já dei capacitações para novos membros, e além de ser elogiado como professor, aprendi muito com a experiência."
    ],
    "location": "Curitiba"
}


export {userData, achievements, profExp, acadExp};
export type {UserData, Achievement, Experience};