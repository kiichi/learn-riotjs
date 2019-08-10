class Publisher {
    constructor(http,markdown){
        this.markdown = markdown;
        this.http = http;
    }
    async getSource(path){
        const res = await this.http.get(path);
        return res.data;
    }
    getHtml(mdSource){
        return this.markdown.makeHtml(mdSource);
    }
}
export default Publisher;