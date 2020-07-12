const db = require("../models");

const products = {
  //   findAll: function (req, res) {
  //     // console.log('all product route being hit!')
  //     db.Products.find(req.query)
  //       .then((ProdDB) => {
  //         console.log("WE ARE LOOKING FOR THE CATEGORY", ProdDB.data);
  //         res.json(ProdDB);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },

  findOne: function (req, res) {
    db.Products.findById(req.params.category3)
      .then((getOneProduct) => {
        // console.log("This is our one product: ", getOneProduct)
        res.json(getOneProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = products;
