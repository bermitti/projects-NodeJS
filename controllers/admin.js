  // класс для создания объекта нового продукта
  const Product = require('../models/product');

  exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

  exports.getProducts = (req, res, next) => {
    // через статический метод получаем массив продуктов
    Product.fetchAll( products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Products',
        path: '/admin/products'
      });
    });
  };  

  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    // создаём объект нового продукта
    const product = new Product(title, imageUrl, description, price);
    // сохраняем объект нового продукта в массиве продуктов
    product.save();
    res.redirect('/');
  };