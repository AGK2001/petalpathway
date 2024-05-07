const mysql = require("mysql");



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kramenator51!$',
    database: 'petalpathway'
  });

  function test(){
    const query = 'SELECT * FROM flowers';
    const result = db.query(query, [occasion, recipient, feeling], (err, result) => {
      if (err) {
        console.error('Error fetching recommendations:', err); // Change error to err here
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
      }

      if (!result || !result.length) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'No flowers found for the selected options' });
      }

      const flowers = result.map(row => ({
        flowerID: row.flowerID,
        flowerImg: row.flowerImg,
        flowerName: row.flowerName,
        flowerPrice: row.flowerPrice
      }));

      res.status(StatusCodes.OK).json({ flowers });
      console.log(result);
    });
}

export default test();