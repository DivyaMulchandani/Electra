const Candidates=require('../models/products');
const getIndividualProduct = async (req, res) => {
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




module.exports={getIndividualProduct,postProduct,checkLoginInfo};