class Learnable{
    name: string
    type: string
    theme: string

    constructor(name: string, type: string, theme: string){
        // TODO: aqui posso adicionar uma maneira de armazenar todos os learnables separados por tipo, 
        // para depois poder fazer uma barra de pesquisa com eles
        this.name = name
        this.type = type
        this.theme = theme
    }
}

class Tool extends Learnable{
    constructor(name: string){
        super(name, "tool", "dark")
    }

    static collectTools(tools: string[]): Tool[]{
        return tools.map((tool) => {
            return new Tool(tool);
        });
    }
};

class Skill extends Learnable{
    constructor(name: string){
        super(name, "skill", "light")
    }

    static collectSkills(skills: string[]): Skill[]{
        return skills.map((skill) => {
            return new Skill(skill);
        });
    }
};

export { Tool, Skill, Learnable }