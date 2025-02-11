const { set } = require("../app");
const gremio =[{id:1, name:'gremio1', cantidad:1,status:1},{id:2, name:'gremio2', canitdad:5, status:0}];
const Gremios = require("../model/gremioModel");

const addGremio =async (request, response) => {
     try {
        const gremio = new Gremios(request.body);
        await gremio.save();
       
        response.status(200).json({ status: 200, message: 'Gremio agregado con exito' });
        
    }catch (error) {
        response.status(500).json({ status: 500, message: error.message });
    }   
}
const getAllGremio =async (request, response) => {
     
    try {
        const gremios = await Gremios.find();
        response.status(200).json({ status: 200, gremios });
        
    } catch (error) {
        response.status(500).json({ status: 500, message: error.message });
    }
   
    }   
    
    const UpdateGremio = async (request, response) => {
        try {
            const { id } = request.params; 
            const { name, cantidad, status } = request.body; 
    
            const gremioIndex = gremio.findIndex(g => g.id === parseInt(id));
    
            if (gremioIndex === -1) {
                return response.status(404).json({ status: 404, message: "Gremio not found" });
            }
    
            if (name !== undefined) gremio[gremioIndex].name = name;
            if (cantidad !== undefined) gremio[gremioIndex].cantidad = cantidad;
            if (status !== undefined) gremio[gremioIndex].status = status;
    
            return response.status(200).json({ status: 200, message: "Gremio updated successfully", gremio: gremio[gremioIndex] });
    
        } catch (error) {
            response.status(500).json({ status: 500, message: error.message });
        }
    };
    

const DeleteGremio =async (request, response) => {
    response.status(200).json({
        status:200,
         message: 'DeleteGremio' });
    }
    
const getGremio =async (request, response) => {
    response.status(200).json({
        status:200,
         message: 'getGremio' });
    }    

const addMembers = async (request, response) => {   
    response.status(200).json({
        status:200,
         message: 'addMembers' });
    }
    
module.exports = {addGremio,getAllGremio,UpdateGremio,DeleteGremio,getGremio,addMembers};