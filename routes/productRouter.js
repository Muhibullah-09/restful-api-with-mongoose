const router = require('express').Router();
const productControl = require('../controllers/productControl');


//Method 1
// router.route('/').get((req, res) => {
//     res.json({ msg: 'get in router' })
// });


//Method 2
// router.route('/').get(productControl.getProducts);

//CRUD Operations

router.route('/')
    .get(productControl.getProducts)
    .post(productControl.createProduct)


router.route('/:id')
    .delete(productControl.deleteProduct)
    .put(productControl.updateProduct)
    .get(productControl.getProduct)

module.exports = router;