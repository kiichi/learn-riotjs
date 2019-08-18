class Publisher {
    constructor(http,markdown){
        this.markdown = markdown;
        this.http = http;
    }

    // it takes multiple sources from contents[index].File and returned aggregated results after all promises resolved
    async getSource(contents){
        const res = await this.http.all(contents.map(cts=>this.http.get(cts.File)))
            .then(res=>{
                //console.log(res.map(re=>re.data).join('\n'));
                return res.map(re=>re.data).join('\n');
            });
        return res;
    }
    getHtml(mdSource){
        return this.markdown.makeHtml(mdSource);
    }
}
export default Publisher;