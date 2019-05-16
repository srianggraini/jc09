// function tambah(a,b){
//     var huruf = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split('')
//     var cari = a.split('') // ['a','b']
//     var index = [] // [0,1]
//     for(var i=0; i<cari.length; i++){
//         var hurufcari = cari[i]
//         var indexhurufcari = huruf.indexOf(hurufcari)
//         index.push(indexhurufcari)
//     }
//     var output = ''
//     for(var j=0; j< index.length; j++){
//         var indexhuruf = index[j]
//         output += huruf[indexhuruf + b ]
//     }
//     return output
// }

// console.log(tambah('g' , 2)); // h


function indexkeberapa(arr,str){
    var hasil = arr.indexOf(str)
    var hasil = ['b','z','u'].indexOf('p')
    if(hasil >= 0){
        return hasil
    }else{
        return 'huruf tidak tersedia'
    }
}

console.log(indexkeberapa(['b','z','u'], 'z')); //1
// console.log(indexkeberapa(['c','a','b'], 'z'));// huruf tidak tersedia