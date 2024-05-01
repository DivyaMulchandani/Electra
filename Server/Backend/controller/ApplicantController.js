const Applicant=require('../models/applicant');
//To get data from Applicant table
const ApplicantInfoByEmail = async (req, res) => {
    try {
        const mail = req.params.email
        const product = await Applicant.find({Email : mail}).lean().exec()
        res.status(201).json(product)
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

module.exports={ApplicantInfoByEmail,PostInfoApplicant};