function triangulo(a, b, c){
    if(a==b & a==c){
        return 'Equilátero'
    } else if(a==b || a==c || b==c){
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulo(10,10,10))
console.log(triangulo(10,10,20))
console.log(triangulo(10,20,30))
