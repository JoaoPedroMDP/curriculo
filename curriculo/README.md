# Currículo de João Pedro

Coisas que fiz que me orgulhei aqui neste projeto:
1. Consegui adaptar a dockerização e a configuração de build do projeto mesmo sem ter feito isso antes.
Precisava habilitar o HotReload mas não funcionava apenas com volumes. Lendo de novo o terminal e o Dockerfile, deduzi que poderia
ter a ver com algum tipo de otimização que faz o servidor ler o projeto de outro lugar (na real nem rodou pq o volume tava sobrescrevendo alguma coisa).
Descobri a questão do 'standalone', e percebi que se quisesse um hotreload, precisaria desabilitar isso. Mas apenas em dev pq no Next.js dizia que isso melhorava a performance. Então usei variáveis de ambiente no docker-compose para controlar se era 'production' ou 'development', e criei um novo Dockerfile para 'development', bem simples, para apenas rodar o projeto sem otimizações nem nada. 'Works like a charm'. *Pelo menos até agora*