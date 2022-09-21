function binarySearch(array, left, right, id) {
    const first = array[0].id
    const last = array[array.length - 1].id

    const isInsideArray = first <= id && last >= id
    const equalsFirstElement = first === id
    const equalsLastElement = last === id

    if(!isInsideArray) {
        return -1
    }

    if(equalsFirstElement) {
        return array[0]
    }

    if(equalsLastElement) {
        return array[array.length - 1]
    }

    if(right >= left) {
        const index = parseInt((left + right)/2)
        const presentId = array[index].id

        if(presentId === id) {
            return array[index]
        }

        if(presentId > id) {
            return binarySearch(array, left, index - 1, id)
        }

        return binarySearch(array, index + 1, right, id)
    }

    return -1
}

const array = [
    {
      id: 1,
      name: 'jordan 0',
      age: 17,
      phone: '61368410340',
      tag: 'admin 0'
    },
    {
      id: 33,
      name: 'jordan 8',
      age: 25,
      phone: '61368418348',
      tag: 'admin 8'
    },
    {
      id: 45,
      name: 'jordan 9',
      age: 26,
      phone: '61368419349',
      tag: 'admin 9'
    }
]

console.time('binary search')
console.log(binarySearch(array, 0, array.length - 1, 33))
console.timeEnd('binary search')
