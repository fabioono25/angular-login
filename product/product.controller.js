(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['Productservice', '$rootScope'];
    function HomeController(Productservice, $rootScope) {
        var vm = this;

        vm.Product = null;
        vm.allProducts = [];
        vm.deleteProduct = deleteProduct;

        initController();

        function initController() {
            loadCurrentProduct();
            loadAllProducts();
        }

        function loadCurrentProduct() {
            Productservice.GetByProductname($rootScope.globals.currentProduct.Productname)
                .then(function (Product) {
                    vm.Product = Product;
                });
        }

        function loadAllProducts() {
            Productservice.GetAll()
                .then(function (Products) {
                    vm.allProducts = Products;
                });
        }

        function deleteProduct(id) {
            Productservice.Delete(id)
            .then(function () {
                loadAllProducts();
            });
        }
    }

})();