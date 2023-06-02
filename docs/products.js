module.exports = {
	paths: {
		'/products/{_id}': {
			get: {
				tags: {
					Products: 'Get a product by id',
				},
				description: 'Get products',
				operationId: 'getProducts',
				parameters: [
					{
						name: '_id',
						in: 'path',
						schema: {
							$ref: '#/components/schemas/_id',
						},
						description: 'Id of Product to be updated',
					},
				],
				responses: {
					200: {
						description: 'Products were obtained',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/productGet',
								},
							},
						},
					},
				},
			},
		},
		'/products/getAll': {
			get: {
				tags: {
					Products: 'Get all products',
				},
				description: 'Get products',
				operationId: 'getProducts',
				parameters: [],
				responses: {
					200: {
						description: 'Products were obtained',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/productGetAll',
								},
							},
						},
					},
				},
			},
		},
		'/products': {
			post: {
				security: [{ ApiKeyAuth: [] }],
				tags: {
					Product: 'Create a product',
				},
				description: 'Create Product',
				operationId: 'createProduct',
				parameters: [],
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/productInput',
							},
						},
					},
				},
				responses: {
					201: {
						description: 'Product created successfully',
					},
					500: {
						description: 'Server error',
					},
				},
			},
		},
		'/products/id/{_id}': {
			put: {
				security: [{ ApiKeyAuth: [] }],
				tags: {
					Product: 'Update a product',
				},
				description: 'Update Product',
				operationId: 'updateProduct',
				parameters: [
					{
						name: '_id',
						in: 'path',
						schema: {
							$ref: '#/components/schemas/_id',
						},
						description: 'Id of Product to be updated',
					},
				],
				requestBody: {
					content: {
						'application/json': {
							schema: { $ref: '#/components/schemas/productInput' },
						},
					},
				},
				responses: {
					200: { description: 'Product updated successfully' },
					404: { description: 'Product not found' },
					500: { description: 'Server error' },
				},
			},
			delete: {
				security: [{ ApiKeyAuth: [] }],
				tags: {
					Product: 'Delete a product',
				},
				description: 'Deleting a Product',
				operationId: 'deleteProduct',
				parameters: [
					{
						name: '_id',
						in: 'path',
						schema: {
							$ref: '#/components/schemas/_id',
						},
						description: 'Deleting a Product',
					},
				],
				responses: {
					200: { description: 'Product deleted successfully' },
					404: { description: 'Product not found' },
					500: { description: 'Server error' },
				},
			},
		},
	},
}
