const csvParsing = 
`ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;


const rows = csvParsing.split("\n").map(line =>line.split(','));
//console.log(rows)

// Declare a variable that stores the number of columns in each row of data within the CSV.


function convertToObjects(data) {
  // Extract the header row and convert each header to lowercase
  const headers = data[0].map((header) => header.toLowerCase());

  // Map over the rows, starting from index 1 to skip the header row
  return data.slice(1).map((row) => {
    // Create an object for each row
    const rowObject = {};
    row.forEach((value, index) => {
      rowObject[headers[index]] = value;
    });
    return rowObject;
  });
}

const convertedData = convertToObjects(rows);
console.log(convertedData);

let removeLastElement = convertedData.splice(0,3);
console.log(removeLastElement)


let newAddedObject = convertedData.pop({
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});


//console.log(convertedData.unshift(newAddedObject));

let addEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

//console.log(convertedData.pop(addEnd));

