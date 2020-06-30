export const sortArray = (array) => {
    for (let i = 1; i < array.length; i++)
      
        
        for (let j = 0; j < i; j++)
        
            
      if (array[i] < array[j]) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
      }

  return array;
};
