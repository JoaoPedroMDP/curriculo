export default abstract class BaseDAO{
    dataSource: Array<any> = [];

    build(data: any): any {
        throw new Error("Method not implemented.");
    }

    getById(id: number): any {
        let raw_data: any = this.dataSource.find((item) => item.id === id);
        if(raw_data != undefined){
            return this.build(raw_data);
        }
        return undefined;
    }

    getAll(): any[] {
        let data: any[] = [];
        this.dataSource.forEach((raw_data) => {
            data.push(this.build(raw_data));
        });
        return data;
    }

    /**
     * 
     * @param filters Lista de filtros a serem aplicados. São unidos com lógica AND. Cada filtro é composto dos seguintes campos:
     * - field: campo a ser filtrado
     * - value: valor a ser comparado
     * - operator: operador de comparação. Caso não esteja presente, será usado 'eq'
     * 
     * Os operadores podem ser:
     * - eq: igual
     * - neq: diferente
     * - gt: maior que
     * - lt: menor que
     * - gte: maior ou igual
     * - lte: menor ou igual
     * - like: contém
     * - ilike: contém (case insensitive)
     */
    filter(filters: any[]): any[] {
        let data: any[] = [];
        this.dataSource.forEach((entry, index) => {
             let match = true;
             filters.forEach((filter: any) => {
                let op = filter.operator;
                if (op == undefined){
                    op = "eq";
                };

                switch(op){
                    case "eq":
                        match = match && entry[filter.field] == filter.value;
                        break;
                    case "neq":
                        match = match && entry[filter.field] != filter.value;
                        break;
                    case "gt":
                        match = match && entry[filter.field] > filter.value;
                        break;
                    case "lt":
                        match = match && entry[filter.field] < filter.value;
                        break;
                    case "gte":
                        match = match && entry[filter.field] >= filter.value;
                        break;
                    case "lte":
                        match = match && entry[filter.field] <= filter.value;
                        break;
                    case "like":
                        match = match && entry[filter.field].includes(filter.value);
                        break;
                    case "ilike":
                        match = match && entry[filter.field].toLowerCase().includes(filter.value.toLowerCase());
                        break;
                    default:
                        throw new Error("Invalid operator");
                }
                return match;
            });
            
            if(match){
                data.push(this.build(entry));
            }
        });
        return data;
    }
};