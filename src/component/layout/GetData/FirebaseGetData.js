import { firebaseConnection } from '../../../firebase';
export function GetImage(cb) {
    let datasnapshot = firebaseConnection.database().ref('Table1/Image');
    datasnapshot.on('value', (images) => {
        let arrData = [];
        let arrDataRun=[]
        images.forEach(element => {
            const key = element.key;
            const src = element.val().src;
            const left = element.val().left;
            const top = element.val().top;
            const nameElement = element.val().nameElement;
            const stateElement = element.val().state;
            arrData.push({
                key: key,
                src: src,
                left: left,
                top: top,
                nameElement: nameElement,
                stateElement: stateElement
            });
            if (stateElement){
                arrDataRun.push({
                    key: key,
                    nameElement: nameElement,
                });
            }
        });
        cb(arrData,arrDataRun);
    })

}
export function GetLabel(cb) {
    let datasnapshot = firebaseConnection.database().ref('Table1/Label');
    datasnapshot.on('value', (labels) => {
        let arrData = [];
        labels.forEach(element => {
            const key = element.key;
            const text = element.val().text;
            const left = element.val().left;
            const top = element.val().top;
            arrData.push({
                key: key,
                text: text,
                left: left,
                top: top
            });
        });
        cb(arrData);
    })
}
export function GetLineData(cb){
    let datasnapshot = firebaseConnection.database().ref('Table1/Line');
    datasnapshot.on('value', (labels) => {
        let arrData = [];
        labels.forEach(element => {
            const key = element.key;
            const idRun=element.val().idRun;
            const type=element.val().type
            const length = element.val().length;
            const left = element.val().left;
            const top = element.val().top;
            arrData.push({
                key: key,
                length: length,
                left: left,
                top: top,
                idRun:idRun,
                type:type
            });
        });
        cb(arrData);
    })
}
