import { firebaseConnection } from '../../../firebase';
export function GetImage(cb) {
    let datasnapshot = firebaseConnection.database().ref('Table1/Image');
    datasnapshot.on('value', (images) => {
        let arrData = [];
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
        });
        cb(arrData);
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
export function GetLineHorizontal(cb){
    let datasnapshot = firebaseConnection.database().ref('Table1/LineHorizontal');
    datasnapshot.on('value', (labels) => {
        let arrData = [];
        labels.forEach(element => {
            const key = element.key;
            const length = element.val().length;
            const left = element.val().left;
            const top = element.val().top;
            arrData.push({
                key: key,
                length: length,
                left: left,
                top: top
            });
        });
        cb(arrData);
    })
}