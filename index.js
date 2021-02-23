class SortedList {
  //Iteration 1: add items as an array, and add length as the length of array
  constructor(items, length) {
    this.items= [],
    this.length = this.items.length
  }

  //Iteration 2 : the items array should be in ascending order. 
  //And length property should be updated when a new number is added
  add(item) {
     //push() adds to the end of array + returns new length of array
    this.items.push(item)
    //sort() returns a sorted array...and is default to return in ascending order
    this.items.sort((a,b) => {
      return a-b
    })
    //length is being updated after new item was pushed and sorted
    this.length = this.items.length
  }


//Iteration 3 : get the index position of an item in array
//should return error if that index does not exist 
//throw new Error('OutOfBounds')
  get(pos) {
    //if pos is greater than the array length = no good
    if(pos >= this.items.length)
    throw new Error('OutOfBounds')
    else
    return this.items[pos]
  }

//Iteration 4 : return the highest value in array
// if an empty array return throw new Error('EmptySortedList')
  max() {
    if(this.items.length === 0)
    throw new Error('EmptySortedList')
    else
    return Math.max.apply(null,this.items) //Math.max() returns largest number or NAN if no numbers exist
  }


//Iteration 5 : return the lowest value in array
//incase empty return same EmptySortedList from above  
  min() {
    if(this.items.length === 0)
    throw new Error('EmptySortedList')
    else
    return Math.min.apply(null,this.items)
  }


  //Iteration 6 : find the sum of the array
  //to find sum use reduce()
  sum() {
    [].reduce((acc, val) =>
     acc + val
    )
    console.log(sum)
  }

  avg() {}
}

module.exports = SortedList;
