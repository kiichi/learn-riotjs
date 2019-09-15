class PdfEngine {
    constructor(pdf){
        this.pdf = pdf;
    }
    download(source){
        // todo: https://github.com/ZEITIO/markdown-to-pdfmake
        const docDefinition = {
            content:[source]
        };
        this.pdf.createPdf(docDefinition).download();
    }
}
export default PdfEngine;