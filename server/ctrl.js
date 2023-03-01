const houseData = require("./db.json");
let houseId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houseData)
    },

    deleteHouse: (req, res) => {
        let id = req.params.id
        let idNum = houseData.findIndex(e => e.id === +id)
        console.log(idNum)
        houseData.splice(idNum, 1)
        res.status(200).send(houseData)
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: houseId,
            address: address,
            price: +price,
            imageURL: imageURL
        }
        houseData.push(newHouse)
        res.status(200).send(houseData)
        houseId++
    },
    
    updateHouse: (req, res) => {
        // get front end info, save to variables
        let { id } = req.params
        let { type } = req.body
        // find index of the given id
        let idNum = houseData.findIndex(e => e.id === +id)
        // conditional checks for 'minus' or 'plus'
        if (type === 'plus'){
            houseData[idNum].price += 10000
        } else if (type === 'minus'){
            houseData[idNum].price -= 10000
        } 
        // change prince by 10,000 up or down
        // res status the house data
        res.status(200).send(houseData)
    }
}