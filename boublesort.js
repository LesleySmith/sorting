function bubbleSort(array) {
    for (j=array.length; j>0; j--){
        for (i=1; i<j; i++){
            if (array[i]<array[i-1]){
                swap(array, i-1, i)
            } 
        }
    }
    return array

}



function swap(arr, bigInd, smallInd){
    var holder = arr[bigInd]
    arr[bigInd] = arr[smallInd]
    arr[smallInd] = holder
}