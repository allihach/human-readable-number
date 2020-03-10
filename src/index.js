module.exports = function toReadable (number) {
    let str = number+'';
   
    let arr_one = ['zero','one','two','three','four','five','six','seven','eight','nine',
    'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
    'eighteen','nineteen'];

    let arr_ten = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    
    if(number<20) {
        return arr_one[number];
    }
    if(number>19&number<100) {
        return arr_ten[str[0]]+(str[1]=='0'?'':' '+ arr_one[str[1]]);
    }
    if(number>99&number%100<20) {
        return arr_one[str[0]]+' hundred'+(number%100==0?'':' '+arr_one[number%100]);
        
    }
    if(number>99&number%100>19) {
        return arr_one[str[0]]+' hundred '+arr_ten[str[1]]+(str[2]=='0'?'':' '+arr_one[str[2]]);
    }
}
