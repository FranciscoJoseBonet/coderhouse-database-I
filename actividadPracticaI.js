class ProductManager {
	constructor(_products, _elementsCount) {
		this.products = _products || [];
		this.elementsCount = _elementsCount || 0;
	}

	_isCodeRepeated(_code) {
		return this.products.some((product) => product.code === _code);
	}

	addProduct(_title, _description, _price, _thumbnail, _code, _stock) {
		try {
			if (this._isCodeRepeated(_code)) throw new Error("Code repeated");
			if (!_title || !_description || !_price || !_thumbnail || !_code || !_stock) {
				throw new Error("All the fields are required");
			}

			const product = {
				title: _title,
				description: _description,
				price: _price,
				thumbnail: _thumbnail,
				code: _code,
				stock: _stock,
				id: this.elementsCount + 1,
			};

			this.products.push(product);
			this.elementsCount++;
		} catch (e) {
			console.error(e);
			return false;
		}

		return true;
	}

	getProducts() {
		this.products.map((prod) => {
			console.log(`=====================================`);
			console.log(`PRODUCT ID: ${prod.id}`);
			console.log(`PRODUCT TITLE: ${prod.title}`);
			console.log(`PRODUCT DESCRIPTION: ${prod.description}`);
			console.log(`PRODUCT PRICE: ${prod.price}`);
			console.log(`PRODUCT CODE: ${prod.code}`);
			console.log(`PRODUCT STOCK: ${prod.stock}`);
		});
	}

	getProductById(_id) {
		const prodTargeted = this.products.find((prod) => prod.id === _id);
		return prodTargeted ? prodTargeted : "Not Found";
	}
}
