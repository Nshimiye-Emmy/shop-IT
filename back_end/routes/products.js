const express = require('express');
const router = express.Router();

const {getProducts,getSingleProduct,newProducts,updateProduct,deleteProduct } = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);
router.route('/admin/products/new').post(newProducts);
router.route('/admin/products/:id').put(updateProduct)
                                   .delete(deleteProduct);





module.exports = router;