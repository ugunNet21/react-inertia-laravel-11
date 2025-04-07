import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Admin\BookController::destroy
 * @see app/Http/Controllers/Admin/BookController.php:70
 * @route /books/{book}
 */
export const destroy = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ['delete'],
    url: '\/books\/{book}',
}

/**
 * @see \App\Http\Controllers\Admin\BookController::destroy
 * @see app/Http/Controllers/Admin/BookController.php:70
 * @route /books/{book}
 */
destroy.url = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return destroy.definition.url
            .replace('{book}', parsedArgs.book.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Admin\BookController::destroy
 * @see app/Http/Controllers/Admin/BookController.php:70
 * @route /books/{book}
 */
destroy.delete = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: destroy.url(args, options),
    method: 'delete',
})

export default destroy