/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
	'/': {
		get: {
			responses: {
				/** OK */
				200: unknown
			}
		}
	}
	'/products': {
		get: {
			parameters: {
				query: {
					productId?: parameters['rowFilter.products.productId']
					created_at?: parameters['rowFilter.products.created_at']
					image?: parameters['rowFilter.products.image']
					price?: parameters['rowFilter.products.price']
					soldBy?: parameters['rowFilter.products.soldBy']
					productName?: parameters['rowFilter.products.productName']
					stock?: parameters['rowFilter.products.stock']
					purchasedBy?: parameters['rowFilter.products.purchasedBy']
					/** Filtering Columns */
					select?: parameters['select']
					/** Ordering */
					order?: parameters['order']
					/** Limiting and Pagination */
					offset?: parameters['offset']
					/** Limiting and Pagination */
					limit?: parameters['limit']
				}
				header: {
					/** Limiting and Pagination */
					Range?: parameters['range']
					/** Limiting and Pagination */
					'Range-Unit'?: parameters['rangeUnit']
					/** Preference */
					Prefer?: parameters['preferCount']
				}
			}
			responses: {
				/** OK */
				200: {
					schema: definitions['products'][]
				}
				/** Partial Content */
				206: unknown
			}
		}
		post: {
			parameters: {
				body: {
					/** products */
					products?: definitions['products']
				}
				query: {
					/** Filtering Columns */
					select?: parameters['select']
				}
				header: {
					/** Preference */
					Prefer?: parameters['preferReturn']
				}
			}
			responses: {
				/** Created */
				201: unknown
			}
		}
		delete: {
			parameters: {
				query: {
					productId?: parameters['rowFilter.products.productId']
					created_at?: parameters['rowFilter.products.created_at']
					image?: parameters['rowFilter.products.image']
					price?: parameters['rowFilter.products.price']
					soldBy?: parameters['rowFilter.products.soldBy']
					productName?: parameters['rowFilter.products.productName']
					stock?: parameters['rowFilter.products.stock']
					purchasedBy?: parameters['rowFilter.products.purchasedBy']
				}
				header: {
					/** Preference */
					Prefer?: parameters['preferReturn']
				}
			}
			responses: {
				/** No Content */
				204: never
			}
		}
		patch: {
			parameters: {
				query: {
					productId?: parameters['rowFilter.products.productId']
					created_at?: parameters['rowFilter.products.created_at']
					image?: parameters['rowFilter.products.image']
					price?: parameters['rowFilter.products.price']
					soldBy?: parameters['rowFilter.products.soldBy']
					productName?: parameters['rowFilter.products.productName']
					stock?: parameters['rowFilter.products.stock']
					purchasedBy?: parameters['rowFilter.products.purchasedBy']
				}
				body: {
					/** products */
					products?: definitions['products']
				}
				header: {
					/** Preference */
					Prefer?: parameters['preferReturn']
				}
			}
			responses: {
				/** No Content */
				204: never
			}
		}
	}
	'/seller': {
		get: {
			parameters: {
				query: {
					id?: parameters['rowFilter.seller.id']
					user?: parameters['rowFilter.seller.user']
					earned?: parameters['rowFilter.seller.earned']
					created_at?: parameters['rowFilter.seller.created_at']
					/** Filtering Columns */
					select?: parameters['select']
					/** Ordering */
					order?: parameters['order']
					/** Limiting and Pagination */
					offset?: parameters['offset']
					/** Limiting and Pagination */
					limit?: parameters['limit']
				}
				header: {
					/** Limiting and Pagination */
					Range?: parameters['range']
					/** Limiting and Pagination */
					'Range-Unit'?: parameters['rangeUnit']
					/** Preference */
					Prefer?: parameters['preferCount']
				}
			}
			responses: {
				/** OK */
				200: {
					schema: definitions['seller'][]
				}
				/** Partial Content */
				206: unknown
			}
		}
		post: {
			parameters: {
				body: {
					/** seller */
					seller?: definitions['seller']
				}
				query: {
					/** Filtering Columns */
					select?: parameters['select']
				}
				header: {
					/** Preference */
					Prefer?: parameters['preferReturn']
				}
			}
			responses: {
				/** Created */
				201: unknown
			}
		}
		delete: {
			parameters: {
				query: {
					id?: parameters['rowFilter.seller.id']
					user?: parameters['rowFilter.seller.user']
					earned?: parameters['rowFilter.seller.earned']
					created_at?: parameters['rowFilter.seller.created_at']
				}
				header: {
					/** Preference */
					Prefer?: parameters['preferReturn']
				}
			}
			responses: {
				/** No Content */
				204: never
			}
		}
		patch: {
			parameters: {
				query: {
					id?: parameters['rowFilter.seller.id']
					user?: parameters['rowFilter.seller.user']
					earned?: parameters['rowFilter.seller.earned']
					created_at?: parameters['rowFilter.seller.created_at']
				}
				body: {
					/** seller */
					seller?: definitions['seller']
				}
				header: {
					/** Preference */
					Prefer?: parameters['preferReturn']
				}
			}
			responses: {
				/** No Content */
				204: never
			}
		}
	}
	'/user': {
		get: {
			parameters: {
				query: {
					id?: parameters['rowFilter.user.id']
					photoURL?: parameters['rowFilter.user.photoURL']
					created_at?: parameters['rowFilter.user.created_at']
					displayName?: parameters['rowFilter.user.displayName']
					/** Filtering Columns */
					select?: parameters['select']
					/** Ordering */
					order?: parameters['order']
					/** Limiting and Pagination */
					offset?: parameters['offset']
					/** Limiting and Pagination */
					limit?: parameters['limit']
				}
				header: {
					/** Limiting and Pagination */
					Range?: parameters['range']
					/** Limiting and Pagination */
					'Range-Unit'?: parameters['rangeUnit']
					/** Preference */
					Prefer?: parameters['preferCount']
				}
			}
			responses: {
				/** OK */
				200: {
					schema: definitions['user'][]
				}
				/** Partial Content */
				206: unknown
			}
		}
		post: {
			parameters: {
				body: {
					/** user */
					user?: definitions['user']
				}
				query: {
					/** Filtering Columns */
					select?: parameters['select']
				}
				header: {
					/** Preference */
					Prefer?: parameters['preferReturn']
				}
			}
			responses: {
				/** Created */
				201: unknown
			}
		}
		delete: {
			parameters: {
				query: {
					id?: parameters['rowFilter.user.id']
					photoURL?: parameters['rowFilter.user.photoURL']
					created_at?: parameters['rowFilter.user.created_at']
					displayName?: parameters['rowFilter.user.displayName']
				}
				header: {
					/** Preference */
					Prefer?: parameters['preferReturn']
				}
			}
			responses: {
				/** No Content */
				204: never
			}
		}
		patch: {
			parameters: {
				query: {
					id?: parameters['rowFilter.user.id']
					photoURL?: parameters['rowFilter.user.photoURL']
					created_at?: parameters['rowFilter.user.created_at']
					displayName?: parameters['rowFilter.user.displayName']
				}
				body: {
					/** user */
					user?: definitions['user']
				}
				header: {
					/** Preference */
					Prefer?: parameters['preferReturn']
				}
			}
			responses: {
				/** No Content */
				204: never
			}
		}
	}
}

export interface definitions {
	products: {
		/**
		 * Format: uuid
		 * @description Note:
		 * This is a Primary Key.<pk/>
		 */
		productId: string
		/**
		 * Format: timestamp with time zone
		 * @default now()
		 */
		created_at?: string
		/** Format: text */
		image: string
		/** Format: numeric */
		price: number
		/** Format: jsonb */
		soldBy: { id: string; profilePic: string; displayname: string }
		/** Format: text */
		productName: string
		/** Format: numeric */
		stock: number
		/** Format: text */
		purchasedBy?: string
	}
	seller: {
		/**
		 * Format: bigint
		 * @description Note:
		 * This is a Primary Key.<pk/>
		 */
		id: number
		/** Format: jsonb */
		user: { id: string; profilePic: string; displayname: string }
		/** Format: real */
		earned: number
		/**
		 * Format: timestamp with time zone
		 * @default now()
		 */
		created_at?: string
	}
	user: {
		/**
		 * Format: text
		 * @description Note:
		 * This is a Primary Key.<pk/>
		 */
		id: string
		/** Format: text */
		photoURL: string
		/**
		 * Format: timestamp with time zone
		 * @default now()
		 */
		created_at?: string
		/** Format: text */
		displayName: string
	}
}

export interface parameters {
	/** @description Preference */
	preferParams: 'params=single-object'
	/** @description Preference */
	preferReturn: 'return=representation' | 'return=minimal' | 'return=none'
	/** @description Preference */
	preferCount: 'count=none'
	/** @description Filtering Columns */
	select: string
	/** @description On Conflict */
	on_conflict: string
	/** @description Ordering */
	order: string
	/** @description Limiting and Pagination */
	range: string
	/**
	 * @description Limiting and Pagination
	 * @default items
	 */
	rangeUnit: string
	/** @description Limiting and Pagination */
	offset: string
	/** @description Limiting and Pagination */
	limit: string
	/** @description products */
	'body.products': definitions['products']
	/** Format: uuid */
	'rowFilter.products.productId': string
	/** Format: timestamp with time zone */
	'rowFilter.products.created_at': string
	/** Format: text */
	'rowFilter.products.image': string
	/** Format: numeric */
	'rowFilter.products.price': string
	/** Format: jsonb */
	'rowFilter.products.soldBy': string
	/** Format: text */
	'rowFilter.products.productName': string
	/** Format: numeric */
	'rowFilter.products.stock': string
	/** Format: jsonb */
	'rowFilter.products.purchasedBy': string
	/** @description seller */
	'body.seller': definitions['seller']
	/** Format: bigint */
	'rowFilter.seller.id': string
	/** Format: jsonb */
	'rowFilter.seller.user': string
	/** Format: real */
	'rowFilter.seller.earned': string
	/** Format: timestamp with time zone */
	'rowFilter.seller.created_at': string
	/** @description user */
	'body.user': definitions['user']
	/** Format: text */
	'rowFilter.user.id': string
	/** Format: text */
	'rowFilter.user.photoURL': string
	/** Format: timestamp with time zone */
	'rowFilter.user.created_at': string
	/** Format: text */
	'rowFilter.user.displayName': string
}

export interface operations {}

export interface external {}
