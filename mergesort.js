function mergeSort(array){
    if (array.length === 1) {
        return array
    }
    let initialHalves = split(array)
    if (initialHalves[0].length > 2) {
        let leftHolder = mergeSort(initialHalves[0])
        let rightHolder = mergeSort(initialHalves[1])
        initialHalves[0] = leftHolder
        initialHalves[1] = rightHolder
    }
    return mergeArray(initialHalves[0],initialHalves[1]) 
}

function split(arr) {
        if (arr.length === 1){
            return arr
        }
        let leftHalf = arr.slice(0, Math.ceil(arr.length/2))
        let rightHalf = arr.slice(Math.ceil(arr.length/2), arr.length)
        return [leftHalf, rightHalf]
}

function mergeArray (arr1, arr2) {
    let returnArr = []
    let i = 0
    let j = 0
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i]<arr2[j]){
            returnArr.push(arr1[i])
            i++
        }
        else {
            returnArr.push(arr2[j])
            j++
        }
    }
    return returnArr
}
