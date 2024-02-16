class Learnable{
    id: string
    name: string
    type: string

    constructor(name: string, type: string){
        // TODO: aqui posso adicionar uma maneira de armazenar todos os learnables separados por tipo, 
        // para depois poder fazer uma barra de pesquisa com eles
        this.id = Math.random().toString(36).substring(7)
        this.name = name
        this.type = type
    }
}

class Tool extends Learnable{
    constructor(name: string){
        super(name, "tool")
    }
    
    render(){
        return <p className=" bg-lightBlue rounded-full px-2 text-darkBlue">{this.name}</p>
    }
};

class Skill extends Learnable{
    constructor(name: string){
        super(name, "skill")
    }

    render(){
        return <p className="bg-yellow text-darkBlue rounded-full px-2">{this.name}</p>
    }
};

export { Tool, Skill }