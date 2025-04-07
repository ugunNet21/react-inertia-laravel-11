import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Admin\BookController::update
 * @see app/Http/Controllers/Admin/BookController.php:55
 * @route /books/{book}
 */
export const update = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ['put','patch'],
    url: '\/books\/{book}',
}

/**
 * @see \App\Http\Controllers\Admin\BookController::update
 * @see app/Http/Controllers/Admin/BookController.php:55
 * @route /books/{book}
 */
update.url = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { book: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { book: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            book: args[0],
        }
    }

    const parsedArgs = {
        book: typeof args.book === 'object'
            ? args.book.id
            : args.book,
    }

    return update.definition.url
            .replace('{book}', parsedArgs.book.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Admin\BookController::update
 * @see app/Http/Controllers/Admin/BookController.php:55
 * @route /books/{book}
 */
update.put = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'put',
} => ({
    url: update.url(args, options),
    method: 'put',
})

/**
 * @see \App\Http\Controllers\Admin\BookController::update
 * @see app/Http/Controllers/Admin/BookController.php:55
 * @route /books/{book}
 */
update.patch = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

export default update