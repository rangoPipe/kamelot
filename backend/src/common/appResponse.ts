class AppResponse {

    public success:Boolean;
    public data:any;

    constructor(success:Boolean, data:any = null) {
        this.success = success;
        this.data = data;
    }

    getJson() {
        return { success : this.success , data: this.data };
    }
}

export default AppResponse;