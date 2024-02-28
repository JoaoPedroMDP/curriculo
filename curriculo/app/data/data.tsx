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
    },
    "description": [
        {"id": "0", "text": "Desde criança, me apresentaram o conhecimento como algo cativante. Também me apresentaram um desktop com tela de tubo catódico que tinha em casa, e passei um bom tempo mexendo no manual do Windows XP durante a infância."},
        {"id": "1", "text": "Atualmente, como aluno da UFPR, aproveito o máximo de oportunidades para aprender mais e colocar em prática meus conhecimentos."},
        {"id": "2", "text": "Além do conhecimento, sou movido pelo amor ao próximo. Adventista do Sétimo Dia desde o berço, aprendi desde pequeno a seguir os passos de Jesus: usar meus recursos, mentais ou físicos, para ajudar o próximo."}
    ],
    "academic_experiences": [
            {
                "institution": "Universidade Federal do Paraná",
                "experiences": [
                    {"id": "0",
                    "type": "course",
                    "title": "Tecnologia em análise e desenvolvimento de sistemas",
                    "dates": {
                        "start": "01/01/2020",
                        "end": "31/12/2024"
                    },
                    "description": "",
                    "tools": ["Javascript", "React Native", "MySQL", "Java", "Spring Boot", "Rabbit MQ", "Docker", "PHP", "HTML", "CSS", "Bizagi", "Astah", "Diagrams.net", "Scikit-learn", "Python", "PyQt"],
                    "skills": ["Trabalho em equipe"],
                    "level": "Graduação"
                },
                {
                    "id": "1",
                    "type": "research",
                    "institution": "Universidade Federal do Paraná",
                    "subject": "Web Scraping",
                    "dates": {
                        "start": "01/09/2022",
                        "end": "01/09/2023"
                    },
                    "tools": ["Python", "Selenium", "Docker"],
                    "description": "Pesquisa sobre Web Scraping para obtenção de dados turísticos do Tripadvisor. Desenvolvi um Scrapper, juntamente de um artigo científico sobre o tema."
                },
                {
                    "id": "2",
                    "type": "paper",
                    "institution": "Universidade Federal do Paraná",
                    "title": "Coleta de dados com Web Scraping: problemas, soluções e otimizações",
                    "magazine": "iSys",
                    "skills": ["Escrita acadêmica"],
                    "description": "Artigo científico sobre Web Scraping, com foco nos problemas que foram enfrentados no processo e como os resolvi. Publicado na revista iSys"
                }
                ],
            }
        ],
    "professional_experiences": [
        {
            "institution": "Rede Nacional de Ensino e Pesquisa - POP Paraná",
            "experiences": [
                {
                    "id": "6",
                    "type": "job",
                    "position": "Técnico de desenvolvimento",
                    "tools": ["Python", "Django", "Docker", "Linux", "Flask", "Ansible", "Git", "Postman", "API REST", "Pytest", "Redis", "Netbox", "Topdesk"],
                    "skills": [],
                    "description": "Após ser promovido, as atividades continuaram praticamente as mesmas. As diferenças estão na carga horária e na participação do rodízio de plantão semanal.",
                    "dates": {
                        "start": "01/06/2022",
                        "end": null
                    }
                },
                {
                    "id": "5",
                    "type": "job",
                    "position": "Estagiário de desenvolvimento",
                    "tools": ["Python", "Django", "Docker", "Linux", "Flask", "Ansible", "Git", "Postman", "API REST", "Bots", "Pytest", "Redis", "Netbox", "Topdesk"],
                    "skills": ["Coleta de Requisitos", "Desenvolvimento de sistemas", "Planejamento de sistemas", "Gestão de projetos"],
                    "description": "Desenvolvimento de vários scripts de automação com Python, bem como bots para Telegram/Whatsapp que agilizam a resolução de incidentes e a comunicação com as universidades parceiras. Integrei diversos serviços nos bots, como o Topdesk (Gerenciamento de Tickets), Netbox (Gerenciamento de recursos de Rede) e Icinga (Monitoramento de rede).",
                    "dates": {
                        "start": "04/10/2021",
                        "end": "01/06/2022"
                    }
                },
            ]
        },
        {
            "institution": "Clientar CRM",
            "experiences": [
                {
                    "id": "4",
                    "type": "job",
                    "position": "Estagiário desenvolvedor Back-End",
                    "tools": ["Laravel", "Mysql", "Dbeaver", "Postman", "API REST", "Back-end"],
                    "skills": ["Planejamento de sistemas"],
                    "description": "Desenvolvimento de back-end para um sistema de CRM. Utilizei Laravel e MySQL. Supervisionado nos 4 primeiros meses, aprendi Clean Code e maneiras mais robustas de se organizar o código. Depois, meu supervisor saiu e fiquei sozinho no desenvolvimento da API. Planejei e comecei o desenvolvimento de um módulo de versionamento de orçamentos e impostos.",
                    "dates": {
                        "start": "11/01/2021",
                        "end": "10/09/2021"
                    }
                }
            ]
        },
        {
            "institution": "Ecomp - Empresa Júnior de Computação da UFPR",
            "experiences": [
                {
                    "id": "3",
                    "type": "job",
                    "position": "Gerente de Qualidade",
                    "tools": ["Linux", "Git", "Deploy", "SSH"],
                    "skills": ["Gestão de pessoas",  "Administração de sistemas", "Condução de reuniões", "Capacitação de novos membros"],
                    "description": "Responsável por realizar deploy de aplicações em servidores na nuvem. Gestão de pessoas, planejamento de OKR's. Fui para Qualidade pois a diretoria passou por uma crise e ficou praticamente sem membros, ficando apenas eu e outra pessoa. Preparamos um plano de reestruturação da diretoria e conseguimos terminar 2021 com o prêmio de Diretoria do Ano.",
                    "dates": {
                        "start": "01/09/2021",
                        "end": "01/06/2022"
                    }
                },
                {
                    "id": "2",
                    "type": "job",
                    "position": "Assessor de negócios",
                    "tools": ["Scrum", "Backlog", "Funil de vendas", "Persona"],
                    "skills": ["Planejamento de sistemas", "Comunicação com cliente", "Condução de reuniões", "Planning Poker", "Briefing"],
                    "description": "Responsável por entrar em contato com potenciais clientes ('leads') (prospecção passiva por meio de Google Ads), realizar reuniões de briefing, montar documento de funcionalidades para revisão do cliente, conduzir reuniões de Planning Poker com os desenvolvedores. Também fui P.O de um projeto em andamento com mestrandas de Enfermagem, cujos produtos finais foram 5 aplicativos que atualmente se encontram na Play/App store do Governo Federal.",
                    "dates": {
                        "start": "01/01/2021",
                        "end": "31/08/2020"
                    }
                },
                {
                    "id": "1",
                    "type": "job",
                    "position": "Assessor de Projetos",
                    "tools": ["Scrum", "Gitlab", "OBS Studio"],
                    "skills": ["Resolução de problemas", "Falar em público", "Capacitação de novos membros", "Inovação"],
                    "description": "Responsável por auxiliar na gestão de projetos, procurando por melhorias e otimizações no processo de desenvolvimento de software. Também responsável pela capacitação de novos membros (Realizei 03 capacitações ao longo de toda a minha estadia na empresa)",
                    "dates": {
                        "start": "01/04/2020",
                        "end": "31/12/2020"
                    }
                },
                {
                    "id": "0",
                    "type": "job",
                    "position": "Desenvolvedor Back-End",
                    "tools": ["Laravel", "PHP", "MariaDB", "Git", "Scrum", "Postman", "PagSeguro", "Linux", "API REST", "Back-end"],
                    "skills": ["Trabalhar sob pressão", "Trabalho em equipe", "Planejamento de sistemas"],
                    "description": "Responsável por desenvolver back-ends. Participei de quase todos os projetos dentro da empresa, tanto aqueles aos quais fui alocado, quanto outros projetos que precisavam de ajuda.",
                    "dates": {
                        "start": "01/04/2020",
                        "end": "01/06/2022"
                    }
                }
            ]
        },
    ],
    "achievements": [
        {
            "institution": "Ecomp",
            "achievements": [
                {
                    "id": "0",
                    "title": "Desenvolvedor destaque",
                    "description": "Prêmio dado ao desenvolvedor que mais se destacou no ano de 2020",
                    "date": "01/12/2020"
                },
                {
                    "id": "1",
                    "title": "Desenvolvedor destaque Back End",
                    "description": "Prêmio dado ao desenvolvedor de Back End que mais se destacou no ano de 2020",
                    "date": "01/12/2020"
                },
                {
                    "id": "2",
                    "title": "Ecomper de Honra",
                    "description": "Prêmio dado ao membro votado como destaque de 2020",
                    "date": "01/12/2020"
                },
                {
                    "id": "3",
                    "title": "Membro Jim Carrey",
                    "description": "Prêmio dado ao membro mais engraçado de 2020",
                    "date": "01/12/2020"
                },
                {
                    "id": "4",
                    "title": "Dream Team",
                    "description": "Prêmio dado aos integrantes do Dream Team de desenvolvedores de 2020",
                    "date": "01/12/2020"
                },
                {
                    "id": "5",
                    "title": "Membro Jim Carrey",
                    "description": "Prêmio dado ao membro mais engraçado de 2021",
                    "date": "01/12/2021"
                },
                {
                    "id": "6",
                    "title": "Desenvolvedor 'brabo' Back End",
                    "description": "Prêmio dado ao desenvolvedor de Back End que mais se destacou no ano de 2021",
                    "date": "01/12/2021"
                },
                {
                    "id": "7",
                    "title": "Ecomper de Honra",
                    "description": "Prêmio dado ao membro votado como destaque de 2021",
                    "date": "01/12/2021"
                }
            ]
        },
    ]
}

export default curriculumData;