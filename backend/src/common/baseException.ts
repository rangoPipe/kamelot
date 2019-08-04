class BaseException {

    public status:number = 200;
    public message:string;

    constructor(status:number, message:string ) {
        this.status = status;
        this.message = message;
    }

    crearLog(){
        try {
            
        } catch (error) {
            
        }
    }
}