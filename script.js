const car = {
    stamp : 'Kia',
    release : 2020 ,
    color : 'Blue'
}

car.startTheEngine = function() {
    console.log(`${car.stamp} is starting the engine`)
}

car.startTheEngine()





const user = {
    name: "John",
    age: 25 ,
    addres: "St.Tulpanov 1/1"
}

user.age = 21

console.log(user)




const book = {
    title: "Пересмешник",
    author: "Алексей Пехов",
    release: 2009
}

let { title,author,release} = book

titleX.innerText = (`Название: ${title}`)
authorX.innerText = (`Автор: ${author}`)
releaseX.innerText = (`Год издания: ${release}`)



const animal = {
    makeAsound(){
        console.log(`Animal make a sound`)
    }
}

animal.makeAsound()



car.color = 'Red'

console.log(car)



const product = {
    title: "Батончик",
    price: "100 руб",
    quantity: 10
}

product.quantity =(product.quantity + 5)

console.log(product)




const computer = {
    computerOn(){
        console.log(`The computer is turned on`)
    }
}

computer.computerOn()




user.addres = "St.Demokraticheskaya"

console.log(user)




const fruit = {
    peelTheFruit(){
        console.log(`The fruit is peeled`)
    }
}

fruit.peelTheFruit()



for(key in user){
    console.log(key)
}




const city = {
    title: "Сочи",
    population: 446599 ,
    country: "Россия"
}

console.log(city)
