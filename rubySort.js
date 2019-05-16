// Read about the Ruby `sort` method. Then sort the following array of hashes by age. (Note - do not use the `sort_by` method for this exercise)

// people = [
//   {"name" => "Saron", "age" => 34},
//   {"name" => "Majora", "age" => 28},
//   {"name" => "Danilo", "age" => 45}
// ]

// p people.sort { |person, person2| person["age"] <=> person2["age"] }

let people = [
  {"name": "Saron", "age": 34},
  {"name": "Majora", "age": 28},
  {"name": "Danilo", "age": 45}
]

let newArr = []; 

for (let k of people) {
  let ages = k["age"];
  newArr.push(ages);
}

console.log(newArr.sort());