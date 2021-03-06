const demoDataBaseStructure = {
    "clients": {
        "Highland Family Practice": {
            "owner": "Dr. Hopper",
            "assistants": {
                "availabilities": [
                    {
                        "title": 'Available',
                        "start": new Date(new Date().setHours(14,0,0,0)),
                        "end": new Date(new Date().setHours(16,0,0,0)),
                        "resourceId": 'assistant',
                        "id": 2,
                        "backgroundColor": "#f7f7f7"
                    }
                ]
            },
            "doctors": {
                "availabilities": [
                    {
                        "title": 'Available',
                        "start": new Date(new Date().setHours(8,0,0,0)),
                        "end": new Date(new Date().setHours(12,0,0,0)),
                        "resourceId": 'doctor',
                        "id": 1,
                        "backgroundColor": "#76c1d4"
                    }
                ]
            },
            "hygienists": {
                "availabilities": [
                    {
                        "title": 'Available',
                        "start": new Date(new Date().setHours(12,0,0,0)),
                        "end": new Date(new Date().setHours(14,0,0,0)),
                        "resourceId": 'hygienist',
                        "id": 3,
                        "backgroundColor": "#AEF1B4"
                    }
                ]
            },
            "address": "4460 Highland Dr, Ste 400, Salt Lake City, UT 84124",
            "phone": "+1 801 272 4111"
        }
    }
}

module.exports={
    getData: (req, res) => {
        res.status(200).send(demoDataBaseStructure)
    },
    postData: (req, res) => {
        const { body } = req;
        const resourceKey = body.resourceId + 's';
        demoDataBaseStructure['clients']['Highland Family Practice'][resourceKey]['availabilities'].push(body);
        console.log(demoDataBaseStructure, body)
        res.status(200).send(demoDataBaseStructure)
    }
}