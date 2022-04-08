const numberOne = {
  value: 1,
  name: 'one',
  previousSeries: [0, -1, -2],
  previousNumber: {value: 0, name: 'zero'}
}

// console.log(Object.values(numberOne))
// console.log(Object.keys(numberOne))
// console.log(Object.entries(numberOne))

const keys = Object.keys(numberOne)

keys.forEach(key => {
  console.log(numberOne[key])
})

