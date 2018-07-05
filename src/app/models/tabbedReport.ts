import { Report } from "./report";
 
export class TabbedReport extends Report{
    headers: Array<string>;

    constructor(headers: string[], values: string[]){
        super(values);
        this.headers  = headers;
    }

    run(){
        console.log(this.headers);
        super.run();
    }
}