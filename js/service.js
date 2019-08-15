class Service {
    constructor(http){
        this.http = http;
    }
    async getStructure(path = 'data/structure.json'){
        const res = await this.http.get(path);
        return res.data;
    }
}
export default Service;