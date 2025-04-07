import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Admin\BookController::create
 * @see app/Http/Controllers/Admin/BookController.php:35
 * @route /books/create
 */
export const create = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ['get','head'],
    url: '\/books\/create',
}

/**
 * @see \App\Http\Controllers\Admin\BookController::create
 * @see app/Http/Controllers/Admin/BookController.php:35
 * @route /books/create
 */
create.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return create.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Admin\BookController::create
 * @see app/Http/Controllers/Admin/BookController.php:35
 * @route /books/create
 */
create.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: create.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Admin\BookController::create
 * @see app/Http/Controllers/Admin/BookController.php:35
 * @route /books/create
 */
create.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: create.url(options),
    method: 'head',
})

export default create