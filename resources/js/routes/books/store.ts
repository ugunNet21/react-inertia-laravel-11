import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Admin\BookController::store
 * @see app/Http/Controllers/Admin/BookController.php:40
 * @route /books
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/books',
}

/**
 * @see \App\Http\Controllers\Admin\BookController::store
 * @see app/Http/Controllers/Admin/BookController.php:40
 * @route /books
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Admin\BookController::store
 * @see app/Http/Controllers/Admin/BookController.php:40
 * @route /books
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

export default store