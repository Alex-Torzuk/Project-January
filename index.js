// console.log('Hello, world')
// let id1 = Symbol("id"); // створення символу з іменем "id"
// let id2 = Symbol("id"); // створення символу з іменем "id"
// console.log(id1 === id2); // виведе false, оскільки символи завжди унікальні

// function fib(num, offset) {
//     const resulted = [num, num]

//     do {
//         const tmp1 = resulted[resulted.length - 1]
//         const tmp2 = resulted[resulted.length - 2]
        
//         resulted.push(tmp1 + tmp2)
//     } while(resulted.length <= offset)

//     return resulted
// }
// console.log(fib(2, 4))


const testData = [
	{title: 'Book1', author: 'john', sales: 110, price: 24, rating: 4.9},
	{title: 'Book2', author: 'david', sales: 15, price: 24, rating: 3.3},
	{title: 'Book3', author: 'john', sales: 28, price: 10, rating: 4.4},
	{title: 'Book4', author: 'mark', sales: 58, price: 20, rating: 4.4},
	{title: 'Book5', author: 'emanuel', sales: 552, price: 45, rating: 4.9},
	{title: 'Book6', author: 'david', sales: 12, price: 20, rating: 4.1},
]



function groupBy(books, field) {
    for (key in testData ){
        console.log(testData[key])
    }
    let books = testData.author
    if(testData.author)
}

// console.log(groupBy(testData, 'author'))
// {john: Array(2), david: Array(2), mark: Array(1), emanuel: Array(1)}

// console.log(groupBy(testData, 'rating'))
// {4.9: Array(2), 3.3: Array(1), 4.4: Array(2), 4.1: Array(1)}
