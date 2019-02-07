# SLL
  <p>
    Here,Js class syntax introduced in ES2015 are used to implement different dataStructure
      <strong>You find how to implement different dataStructures using only Js !!! </strong>
    </p>
  
    <ul>
      <li>
        <h3>So, Why singly-linked-list ?</h3>
        <p>It has surtain advantages over arrays !! But what are the advantages ? arrays are slow as its Big O is greater in certain cases.</p>
        <p>So, What are that cases ?</p>
        <p>suppose we have a huge amount of data and we want to remove a certain data at a random location, So, in such condition after removing that data we have to re-asign all the data after that perticular data !! To clear this further</p>
        <div>
          ["A", "B", "C" , "D" , "E", ............]
            0    1    2     3     4
        </div>
        <div>
          <p>In this condition if we removed the 2nd element/data then we have to re-asign all the element/data after it and it increases the time complexity</p>
            ["A", "B", ("C") , "D" , "E", ............]
              0    1    (2)     3     4
          <h1>----------------------------------------------------------</h1>
            [ "A", "B"   "D"     "E", ...............]
               0    1     2       3  
          </div>
      </li>
      <li>
        <p>But there is a certain disadvantage of SSL as well  !! suppose we want to remove the last/any random element from the middle in this case we have iterate over entire list just to rich at that location and remove that AND this increases the time complexity of SLL But Both SLL and Arrays have there own advantages and disadvantages in certain cases</p>
      </li>
    </ul>
