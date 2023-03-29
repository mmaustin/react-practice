import Plantation from "../models/Plantation";

export const createPlantation = async(req, res) => {
    const {name, owner, location} = req.body

    const plantation = await Plantation.create({name, owner, location})

    res.status(201).json({plantation: {
        name: plantation.name,
        owner: plantation.owner,
        location: plantation.location
    }});
}

export const getPlantation = async(req, res) => {
    res.status(200).json({msg: 'plantation'});
}
export const getAllPlantations = async(req, res) => {
    res.status(200).json({msg: 'plantations'});
}
export const updatePlantation = async(req, res) => {
    res.status(200).json({msg: 'plantation updated'});
}
export const deletePlantation = async(req, res) => {
    res.status(201).json({msg: 'plantation destroyed!'});
}