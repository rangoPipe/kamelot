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
        const message:string = `
            Status: ${this.status}
            Message: ${this.message}`;
        fs.appendFile(path.join('backend', 'src', 'var', 'log', 'log.txt'), message, (err) => {
            if(err)
                console.log(err);
        })
    }
}

export default BaseException;