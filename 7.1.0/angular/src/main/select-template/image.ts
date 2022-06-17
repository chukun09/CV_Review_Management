export class Image {
    public id: number;
    public  templateURL: string;
    public imageURL: string;
    public name: string;
    constructor(id: number, templateURL: string, imageURL: string, name: string){
        this.id = id;
        this.templateURL = templateURL;
        this.imageURL = imageURL;
        this.name = name;
    }
   }