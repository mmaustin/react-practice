

export const createPlantation = async(req, res) => {
    res.status(201).json({msg: 'another wonderful plantation has been created'});
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