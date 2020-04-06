import fs from "fs";
import path from 'path';

class BaseException {

    public status:number = 200;
    public message:string;

    constructor(status:number, message:string ) {
        this.status = status;
        this.message = message;
        this.crearLog();
    }

    crearLog(){
        const dir:string = path.join('var','log');
        const message:string = `
            Status: ${this.status}
            Message: ${this.message}`;
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        fs.appendFile(path.join(dir, 'log.txt'), message, (err) => {
            if(err)
                console.log(err);
        })
    }
}

export default BaseException;