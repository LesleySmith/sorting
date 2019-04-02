function mergeSort(array){
    if (array.length === 1) {
        return array
    }
    let initialHalves = split(array)
    return mergeArray(mergeSort(initialHalves[0]), mergeSort(initialHalves[1]))
}

function split(arr) {
        if (arr.length === 1){
            return arr
        }
        let leftHalf = arr.slice(0, Math.ceil(arr.length/2))
        let rightHalf = arr.slice(Math.ceil(arr.length/2))
        return [leftHalf, rightHalf]
}

function mergeArray (arr1, arr2) {
    let returnArr = []
    let i = 0
    let j = 0
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i]<arr2[j] || arr2[j] === undefined){
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
