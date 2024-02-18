class Learnable{
    id: string
    name: string
    type: string
    textColor: string
    bgColor: string

    constructor(name: string, type: string, bgColor: string, textColor: string){
        // TODO: aqui posso adicionar uma maneira de armazenar todos os learnables separados por tipo, 
        // para depois poder fazer uma barra de pesquisa com eles
        this.id = Math.random().toString(36).substring(7)
        this.name = name
        this.type = type
        this.textColor = textColor
        this.bgColor = bgColor
    }

    render(){
        return <p key={this.id} className={`${this.bgColor} rounded-full px-2 ${this.textColor}`}>{this.name}</p>
    }
}

class Tool extends Learnable{
    constructor(name: string){
        super(name, "tool", "bg-lightBlue", "text-darkBlue")
    }
};

class Skill extends Learnable{
    constructor(name: string){
        super(name, "skill", "bg-yellow", "text-darkBlue")
    }
};

export { Tool, Skill }