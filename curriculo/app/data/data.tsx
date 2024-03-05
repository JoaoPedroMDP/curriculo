const institutions: any = [
    {
        "id": 0,
        "name": "Ecomp UFPR",
    },
    {
        "id": 1,
        "name": "Clientar CRM",
    },
    {
        "id": 2,
        "name": "RNP - PoP Paraná",
    },
    {
        "id": 3,
        "name": "Universidade Federal do Paraná",
    }
];

const achievements: any = [
    {
        "id": 0,
        "institution_id": 0,
        "title": "Desenvolvedor destaque",
        "description": "Prêmio dado ao desenvolvedor que mais se destacou no ano de 2020",
        "date": "01/12/2020"
    },
    {
        "id": 1,
        "institution_id": 0,
        "title": "Desenvolvedor destaque Back End",
        "description": "Prêmio dado ao desenvolvedor de Back End que mais se destacou no ano de 2020",
        "date": "01/12/2020"
    },
    {
        "id": 2,
        "institution_id": 0,
        "title": "Ecomper de Honra",
        "description": "Prêmio dado ao membro votado como destaque de 2020",
        "date": "01/12/2020"
    },
    // {
    //     "id": 3,
    //     "institution_id": 0,
    //     "title": "Membro Jim Carrey",
    //     "description": "Prêmio dado ao membro mais engraçado de 2020",
    //     "date": "01/12/2020"
    // },
    {
        "id": 4,
        "institution_id": 0,
        "title": "Dream Team",
        "description": "Prêmio dado aos integrantes do Dream Team de desenvolvedores de 2020",
        "date": "01/12/2020"
    },
    // {
    //     "id": 5,
    //     "institution_id": 0,
    //     "title": "Membro Jim Carrey",
    //     "description": "Prêmio dado ao membro mais engraçado de 2021",
    //     "date": "01/12/2021"
    // },
    {
        "id": 6,
        "institution_id": 0,
        "title": "Desenvolvedor 'brabo' Back End",
        "description": "Prêmio dado ao desenvolvedor de Back End que mais se destacou no ano de 2021",
        "date": "01/12/2021"
    },
    {
        "id": 7,
        "institution_id": 0,
        "title": "Ecomper de Honra",
        "description": "Prêmio dado ao membro votado como destaque de 2021",
        "date": "01/12/2021"
    },
    {
        "id": 8,
        "institution_id": 2,
        "title": "Promoção",
        "description": "Minha primeira promoção! Agora sou Técnico de Desenvolvimento",
        "date": "01/06/2022"
    }
];

const experiences: any = [
    {
        "id": 0,
        "institution_id": 3,
        "type": "course",
        "name": "Tecnologia em análise e desenvolvimento de sistemas",
        "start": "01/01/2020",
        "end": "31/12/2024",
        "description": "",
        "tools": ["Javascript", "React Native", "MySQL", "Java", "Spring Boot", "Rabbit MQ", "Docker", "PHP", "HTML", "CSS", "Bizagi", "Astah", "Diagrams.net", "Scikit-learn", "Python", "PyQt"],
        "skills": ["Trabalho em equipe"],
        "level": "Graduação"
    },
    {
        "id": 1,
        "institution_id": 3,
        "type": "research",
        "subject": "Web Scraping",
        "start": "01/09/2022",
        "end": "01/09/2023",
        "tools": ["Python", "Selenium", "Docker", "Escrita científica"],
        "description": "Pesquisa sobre Web Scraping para obtenção de dados turísticos do Tripadvisor. Escrevi um artigo científico sobre o tema, ainda em revisão pela revista iSys."
    },
    {
        "id": 4,
        "institution_id": 2,
        "type": "job",
        "position": "Técnico de desenvolvimento",
        "tools": ["Python", "Django", "Docker", "Linux", "Flask", "Ansible", "Git", "Postman", "API REST", "Pytest", "Redis", "Netbox", "Topdesk"],
        "skills": [],
        "description": "Após ser promovido, as atividades continuaram praticamente as mesmas. As diferenças estão na carga horária e na participação do rodízio de plantão semanal.",
        "start": "01/06/2022",
        "end":  null,
    },
    {
        "id": 5,
        "institution_id": 2,
        "type": "job",
        "position": "Estagiário de desenvolvimento",
        "tools": ["Python", "Django", "Docker", "Linux", "Flask", "Ansible", "Git", "Postman", "API REST", "Bots", "Pytest", "Redis", "Netbox", "Topdesk"],
        "skills": ["Coleta de Requisitos", "Desenvolvimento de sistemas", "Planejamento de sistemas", "Gestão de projetos"],
        "description": "Desenvolvimento de vários scripts de automação com Python, bem como bots para Telegram/Whatsapp que agilizam a resolução de incidentes e a comunicação com as universidades parceiras. Integração de diversos serviços de monitoramento e tickets.",
        "start": "04/10/2021",
        "end": "01/06/2022",
    },
    {
        "id": 6,
        "institution_id": 1,
        "type": "job",
        "position": "Estagiário desenvolvedor Back-End",
        "tools": ["Laravel", "Mysql", "Dbeaver", "Postman", "API REST", "Back-end"],
        "skills": ["Planejamento de sistemas"],
        "description": "Desenvolvimento de back-end para um sistema de CRM com Laravel e MySQL. Refatoração de código legado e planejamento de novos módulos para o sistema utilizando Clean Code, Domain Driven Design e outras arquiteturas de software.",
        "start": "11/01/2021",
        "end": "10/09/2021",
    },
    {
        "id": 7,
        "institution_id": 0,
        "type": "job",
        "position": "Gerente de Qualidade",
        "tools": ["Linux", "Git", "Deploy", "SSH"],
        "skills": ["Gestão de pessoas",  "Administração de sistemas", "Condução de reuniões", "Capacitação de novos membros"],
        "description": "Responsável por realizar deploy de aplicações em servidores na nuvem, planejar e conduzir reuniões de diretoria, reportar OKR's, selecionar e capacitar novos membros.",
        "start": "01/09/2021",
        "end": "01/06/2022",
    },
    {
        "id": 8,
        "institution_id": 0,
        "type": "job",
        "position": "Assessor de negócios",
        "tools": ["Scrum", "Backlog", "Funil de vendas", "Persona"],
        "skills": ["Product Owner", "Planejamento de sistemas", "Comunicação com cliente", "Condução de reuniões", "Planning Poker", "Briefing"],
        "description": "Responsável por entrar em contato com potenciais clientes ('leads'), realizar reuniões de briefing, montar documento de funcionalidades para revisão do cliente, conduzir reuniões de Planning Poker com os desenvolvedores, intermediar a comunicação com o cliente (P.O).",
        "start": "01/01/2021",
        "end": "31/08/2020",
    },
    {
        "id": 9,
        "institution_id": 0,
        "type": "job",
        "position": "Assessor de Projetos",
        "tools": ["Scrum", "Gitlab", "OBS Studio"],
        "skills": ["Resolução de problemas", "Falar em público", "Capacitação de novos membros", "Inovação"],
        "description": "Responsável por auxiliar na gestão de projetos, procurando por melhorias e otimizações no processo de desenvolvimento de software. Também responsável pela capacitação de novos membros",
        "start": "01/04/2020",
        "end": "31/12/2020",
    },
    {
        "id": 10,
        "institution_id": 0,
        "type": "job",
        "position": "Desenvolvedor Back-End",
        "tools": ["Laravel", "PHP", "MariaDB", "Git", "Scrum", "Postman", "PagSeguro", "Linux", "API REST", "Back-end"],
        "skills": ["Trabalhar sob pressão", "Trabalho em equipe", "Planejamento de sistemas"],
        "description": "Desenvolvedor back-end com Laravel e MariaDB. Participei de 2 projetos e-commerce, além de dar assistência a outros projetos da empresa.",
        "start": "01/04/2020",
        "end": "01/06/2022",
    }
];

const curriculumData: any = {
    "user": {
        "name": "João Pedro Martins de Paula",
        "birth_date": "13/03/2000",
        "sex": "Masculino",
        "marital_status": "Solteiro",
        "linkedin": "https://www.linkedin.com/in/joaopedromdp/",
        "github": "https://github.com/JoaoPedroMDP",
        "email": "joao.pedro.mdp@outlook.com",
        "title": "Graduando em Análise e Desenvolvimento de Sistemas UFPR",
    }
}

export {curriculumData, institutions, achievements, experiences};