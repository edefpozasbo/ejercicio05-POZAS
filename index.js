const csvFilePath='./data.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((json)=>{
    for(let i=0;i<json.length;i++){
        let it=json[i];
        let headers=["no_consecutivo","no_control","nombre","calificacion"];
        for(let e=0;e<headers.length;e++){
            console.log(headers[e],":",it[headers[e]]);
        }
        console.log("----------------")
    }
});