const csv2json = require('csvtojson')
const fs = require('fs')

const file_CSV2JSON = (csvFile='customer-data.csv') => {
  //split name and remove extension then rejoin and append json extension
  let jsonFile = csvFile.split('.').slice(0, -1).join(".") + ".json"

  //console.log(jsonFile)

  //read csv file to csv stream
  let csvStream = fs.createReadStream(csvFile)
  // pipe csv stream to json stream via csv2json
  let jsonStream = csvStream.pipe(csv2json({
    separator: ','
  })
  )

  // pipe json stream to new json file
  jsonStream.pipe(fs.createWriteStream(jsonFile))

  console.log("converted " + csvFile + " to " + jsonFile)
}

file_CSV2JSON(process.argv[2])
