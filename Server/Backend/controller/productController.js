const Candidates=require('../models/products');
const getAllProduct = async (req, res) => {
    try {
        const product = await Candidates.find({})
        res.status(200).json(product)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

//finding id
const checkLoginInfo = async (req, res) => {
    try {
        const mail = req.params.email
        const product = await Candidates.find({Email : mail}).lean().exec()
        res.status(201).json(product)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

const postProduct = async (req, res) => {
    const {} = req.body
    try{
        const newProduct = new Candidates(req.body)
        await newProduct.save()
        if (newProduct) {
            res.status(201).json(newProduct);
        } else {
            res.status(500).json({ error: 'Failed to add new Product' });
        }
    }
    catch (error){
    console.log(error);
    res.status(404).json({ error: 'Sorry! something went wrong' });
    }
}




const patchCand = async (req, res) => {
    const mail = req.params.email;
    try {
        const product = await Candidates.findOneAndUpdate({Email:mail}, {$set: req.body}, { new: true });
        if (!product) {
            return res.status(404).json({ error: 'Candidate not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        console.log("geki")
        res.status(500).json({ error: 'Sorry! Something went wrong' });
    }
}


module.exports={getAllProduct,postProduct,checkLoginInfo,patchCand};