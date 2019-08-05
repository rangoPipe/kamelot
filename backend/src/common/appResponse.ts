class AppResponse {

    public success:Boolean;
    public message:String;
    public data:any;

    constructor(success:Boolean, message:string, data:any = null) {
        this.success = success;
        this.data = data;
        this.message = message;
    }

    getJson() {
        return { success : this.success , data: this.data };
    }
}

export default AppResponse;