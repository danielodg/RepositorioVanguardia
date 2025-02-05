const addHechicero =async (request, response) => {
    response.status(200).json({
        status:200,
         message: 'addHechicero' });
    }       
    
const UpdateHechicero =async (request, response) => {
    response.status(200).json({
        status:200,
         message: 'updateHechicero' });
    }   

const DesactivarHechicero =async (request, response) => {
    response.status(200).json({
        status:200,
         message: 'DesactivarHechicero' });
    }
    
const getHechicero =async (request, response) => {
    response.status(200).json({
        status:200,
         message: 'getHechicero' });
    }    

const getAllHechiceros = async (request, response) => {   
    response.status(200).json({
        status:200,
         message: 'getAllHechiceros' });
    }

module.exports = {addHechicero,UpdateHechicero,DesactivarHechicero,getHechicero,getAllHechiceros};    