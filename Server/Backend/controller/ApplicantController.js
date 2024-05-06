
const Applicant=require('../models/Applicant');
//To get data from Applicant table
const ApplicantInfoByName = async (req, res) => {
    try {
        const email = req.params.email
        const product = await Applicant.find({Email : email}).lean().exec()
        res.status(201).json(product)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

const getallApp = async (req, res) => {
    try {
        const product = await Applicant.find({})
        res.status(200).json(product)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}



const PostInfoApplicant = async (req, res) => {
    const {} = req.body
    try{
        const newApp = new Applicant(req.body)
        await newApp.save()
        if (newApp) {
            res.status(201).json(newApp);
        } else {
            res.status(500).json({ error: 'Failed to add new Applicant' });
        }
    }
    catch (error){
    console.log(error);
    res.status(404).json({ error: 'Sorry! something went wrong' });
    }
}

module.exports={ApplicantInfoByName,PostInfoApplicant,getallApp};