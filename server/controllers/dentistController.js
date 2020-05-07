const demoDataBaseStructure = {
    "clients": {
        "Highland Family Practice": {
            "owner": "Dr. Hopper",
            "assistants": {
                "availabilities": [

                ]
            },
            "dentists": {
                "availabilities": [

                ]
            },
            "hygientists:": {
                "availabilities": [

                ]
            },
            "address": "4460 Highland Dr, Ste 400, Salt Lake City, UT 84124",
            "phone": "+1 801 272 4111"
        }
    }
}

module.exports={
    getData: (req,res) => {
        console.log(req)
        res.status(200).send(demoDataBaseStructure)
    },
    postData: (req, res) => {

    },
    putData: (req, res) => {

    },
    deleteData: (req, res) => {

    }
}