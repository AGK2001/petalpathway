const Flower = require('../models/Flower');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const mysql = require("mysql");

//admin use only
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kramenator51!$",
    database: "petalpathway"
})

const createFlower = async (req, res) => {
    req.body.user = req.user.userId;
    //const flower = await Flower.create(req.body);
    const flowerData = req.body;
    db.query("INSERT INTO flowers SET ?", flowerData, (err, data) => {
        if(err){
            console.error("Error creating flower:", err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Error occured while creating flower"});
            return;
        }
        res.status(StatusCodes.CREATED).json({flower: result});
    })
    //res.status(StatusCodes.CREATED).json({flower});
};

const getAllFlowers = async (req,res) => {
    //const flowers = await Flower.find({});
    db.query("SELECT id AS flowerID, photo AS flowerImg, name AS flowerName, price AS flowerPrice FROM flowers", (err, flowers) => {
        if(err){
            console.error("Error fetching flowers", err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Error occured while fetching flowers"});
            return;
        }
        res.status(StatusCodes.OK).json({flowers, count: flowers.length});
    })
    //res.status(StatusCodes.OK).json({flowers, count: flowers.length});
};

const dummy = async (req,res) =>{
    db.query("SELECT * FROM flowers", (err, flowers) => {
        if(err){
            console.error("Error fetching flowers", err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Error occured while fetching flowers"});
            return;
        }
        res.status(StatusCodes.OK).json({flowers, count: flowers.length});
        
    })
    //res.status(StatusCodes.OK).json({flowers, count: flowers.length});
};

const getSingleFlower = async (req, res) => {
    const {id:flowerId} = req.params;
    
    db.query("SELECT id, name, price, photo AS imageUrl FROM flowers WHERE id = ?", [flowerId], (err, flower) => {
        if(err){
            console.error("Error fetching flower", err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Error occured while fetching flower"});
            return;
        }
        if(flower.length === 0){
            throw new CustomError.NotFoundError(`No flower with id: ${flowerId}`);
        }
        res.status(StatusCodes.OK).json({flower: flower[0]});
    })

    //res.status(StatusCodes.OK).json({flower});
};

//admin use only
const updateFlower = async (req, res) => {
    const {id: flowerId} = req.params;
    const flowerData = req.body;

    db.query('UPDATE flowers SET ? WHERE id = ?', [flowerData, flowerId], (err, result) => {
        if (err) {
            console.error('Error updating flower:', err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "An error occurred while updating the flower." });
            return;
        }
        if (result.affectedRows === 0) {
            throw new CustomError.NotFoundError(`No flower with id: ${flowerId}`);
        }
        res.status(StatusCodes.OK).json({ message: "Flower updated successfully" });
    });
    
};

//admin use only
const deleteFlower = async (req, res) => {
    const {id: flowerId} = req.params;
    
    db.query('DELETE FROM flowers WHERE id = ?', [flowerId], (err, result) => {
        if(err){
            console.error('Error deleting flower:', err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "An error occurred while deleting the flower." });
            return;
        }
        if(result.affectedRows === 0){
            throw new CustomError.NotFoundError(`No flower with id: ${flowerId}`);
        }
        res.status(StatusCodes.OK).json({msg: 'Success! Flower removed'})
    });

    //await flower.deleteOne();
    //res.status(StatusCodes.OK).json({msg: 'Success! Flower removed'})
};

module.exports = {
    createFlower,
    getAllFlowers,
    getSingleFlower,
    updateFlower,
    deleteFlower,
    dummy
};