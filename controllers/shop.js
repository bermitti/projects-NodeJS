  // класс для создания объекта нового продукта
  const Product = require('../models/product');

  exports.getProducts = (req, res, next) => {
    // через статический метод получаем массив продуктов
    Product.fetchAll( products => {
      res.render('shop/product-list.pug', {
        prods: products,
        pageTitle: 'Aii products',
        path: '/products'
      });
    });
  };

  exports.getIndex = (req, res, next) => {
    // через статический метод получаем массив продуктов
    Product.fetchAll( products => {
      res.render('shop/index.pug', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };

  exports.getCard = (req, res, next) => {
    // через статический метод получаем массив продуктов
    Product.fetchAll( products => {
      res.render('shop/card', {
        prods: products,
        pageTitle: 'Your card',
        path: '/card',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };

  exports.getCheckout = (req, res, next) => {
    // через статический метод получаем массив продуктов
    Product.fetchAll( products => {
      res.render('shop/checkout', {
        prods: products,
        pageTitle: 'Checkout',
        path: '/card',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };