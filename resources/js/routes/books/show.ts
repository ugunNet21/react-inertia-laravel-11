import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Admin\BookController::show
 * @see app/Http/Controllers/Admin/BookController.php:65
 * @route /books/{book}
 */
export const show = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ['get','head'],
    url: '\/books\/{book}',
}

/**
 * @see \App\Http\Controllers\Admin\BookController::show
 * @see app/Http/Controllers/Admin/BookController.php:65
 * @route /books/{book}
 */
show.url = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return show.definition.url
            .replace('{book}', parsedArgs.book.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Admin\BookController::show
 * @see app/Http/Controllers/Admin/BookController.php:65
 * @route /books/{book}
 */
show.get = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: show.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Admin\BookController::show
 * @see app/Http/Controllers/Admin/BookController.php:65
 * @route /books/{book}
 */
show.head = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: show.url(args, options),
    method: 'head',
})

export default show