class Sorter {
  constructor() {
    this.array = [];
  }
  add(element) {
    this.array.push(element);
  }
  at(index) {
    return this.array[index];
  }
  get length() {
    return this.array.length;
  }

  toArray() {
   return this.array;
  }

  sort(indices) {

      let new_array = []; 
      let k = 0;
      let newindices;
    
      if(indices){
        newindices = indices.sort(numberComparison);
      } else {
        return "No elements are passed to sort.";
      }
 

      while(k<newindices.length)
      {
        new_array.push(this.array[newindices[k]]);
        k++;
    }
 
    switch(this.comparator){
      case undefined:
      new_array = new_array.sort(numberComparison);
      break;
      default:
      new_array = new_array.sort(this.comparator);
    }

    let j = 0; 

    while(j < new_array.length){
      this.array[newindices[j]] = new_array[j];
      j++;
    }   

    function numberComparison(x,y) {
      return x - y;
    }
      return this.array;
  }
  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}
module.exports = Sorter;