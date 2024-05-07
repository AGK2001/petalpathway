const { StatusCodes } = require('http-status-codes');
const mysql = require("mysql");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kramenator51!$',
  database: 'petalpathway'
});

const getOptions = async (req, res) => {
  try {
    const occasions = ['Just Because', 'Valentines Day', 'Birthday'];
    const recipients = ['Friend', 'Mom', 'Partner'];
    const feelings = ['Happiness', 'Romance', 'Sorrow'];

    res.status(StatusCodes.OK).json({ occasions, recipients, feelings });
  } catch (error) {
    console.error('Error fetching options:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

const getRecommendations = async (req, res) => {
  const { occasion, recipient, feeling } = req.body;

  try {
    const query = `
      SELECT * FROM flowers 
      WHERE 
        occasion LIKE CONCAT('%', ?, '%') AND 
        recipient LIKE CONCAT('%', ?, '%') AND 
        feeling LIKE CONCAT('%', ?, '%')
    `;
    
    db.query(query, [occasion, recipient, feeling], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
      }

      console.log('Query Result:', result); // Log query result
      
      if (!result || !result.length) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'No flowers found for the selected options' });
      }

      const flowers = result.map(row => ({
        flowerID: row.id,
        flowerImg: row.photo,
        flowerName: row.name,
        flowerPrice: row.price
      }));

      console.log('Formatted Flowers:', flowers); // Log formatted flowers
      
      res.status(StatusCodes.OK).json({ flowers });
    });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getOptions, getRecommendations };
