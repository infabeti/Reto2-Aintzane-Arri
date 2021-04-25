const inventario = require('./public/js/inventario.js');
const sinon = require('sinon');

//global.window = { localStorage: /* your mock localStorage */ }

describe("Tests inventario", function() {
    var sandbox = sinon.sandbox.create();

    beforeEach(function() {
      sandbox = sinon.sandbox.create()
      // fake window.localStorage
    })
  
    afterEach(function() {
      sandbox.restore()
    })

	it("add product debería ", function() {
		const addProduct = inventario.addProduct();
		expect(testA).toBe(2);
	});
});