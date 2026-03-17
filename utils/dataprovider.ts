import { parse } from 'csv-parse';
import fs from 'fs';

export class DataProviders{

    static readDataFromKJSON(path:string){
        const data:any=JSON.parse(fs.readFileSync(path, 'utf-8'));
        return data;
    }

    static readDataFromCSV(path:string){
        const data:any=parse(fs.readFileSync(path), {columns:true, skipEmptyLines:true})
        return data;
    }
}