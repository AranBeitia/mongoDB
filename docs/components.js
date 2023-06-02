module.exports = {
	components: {
		securitySchemes: {
			ApiKeyAuth: {
				type: 'apiKey',
				name: 'Authorization',
				in: 'header',
			},
		},
		schemas: {
			productGetAll: {
				type: 'object',
				// properties: {
				// 	_id: {
				// 		type: 'objectId',
				// 		description: 'product identification number',
				// 		example: '6201064b0028de7866e2b2c4',
				// 	},
				// 	name: {
				// 		type: 'string',
				// 		description: 'product name',
				// 		example: 'Piano',
				// 	},
				// 	price: {
				// 		type: 'number',
				// 		description: 'product price',
				// 		example: '23400',
				// 	},
				// },
			},
			productGet: {
				type: 'object',
				properties: {
					_id: {
						type: 'objectId',
						description: 'product identification number',
						example: '6201064b0028de7866e2b2c4',
					},
					name: {
						type: 'string',
						description: 'product name',
						example: 'Piano',
					},
					price: {
						type: 'number',
						description: 'product price',
						example: '23400',
					},
				},
			},
			productInput: {
				type: 'object',
				properties: {
					name: {
						type: 'string',
						description: "Product's name",
						example: 'Pianola',
					},
					price: {
						type: 'number',
						description: 'The price of the product',
						example: '254',
					},
				},
			},
			_id: {
				type: 'objectId',
				description: 'An id of a product',
				example: '6470da3ba50d0ed22dd4ef96',
			},
		},
	},
}
