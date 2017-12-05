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
}

const file_CSV2JSON2 = (csvFile='customer-data.csv') => {
  //split name and remove extension then rejoin and append json extension
  let jsonFile = csvFile.split('.').slice(0, -1).join(".") + ".json"
  let jsonArr = []

  let convert = csv2json()
  .fromFile(csvFile)
  .on('json', (jsonObj) => {
    jsonArr.push(jsonObj)
  })
  .on('done', (error) => {
    if (error) return process.exit(1)
    console.log("converted " + csvFile + " to " + jsonFile)

    fs.writeFile(jsonFile, JSON.stringify(jsonArr, null, 2), (error) => {
      if (error) return process.exit(1)
      console.log("wrote " + jsonFile)
      process.exit(0)
    })
  })
}

file_CSV2JSON2(process.argv[2])
