import { queryParams, type QueryParams } from './../../wayfinder'

/**
 * @see \App\Http\Controllers\Admin\BookController::edit
 * @see app/Http/Controllers/Admin/BookController.php:50
 * @route /books/{book}/edit
 */
export const edit = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ['get','head'],
    url: '\/books\/{book}\/edit',
}

/**
 * @see \App\Http\Controllers\Admin\BookController::edit
 * @see app/Http/Controllers/Admin/BookController.php:50
 * @route /books/{book}/edit
 */
edit.url = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
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

    return edit.definition.url
            .replace('{book}', parsedArgs.book.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Admin\BookController::edit
 * @see app/Http/Controllers/Admin/BookController.php:50
 * @route /books/{book}/edit
 */
edit.get = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Admin\BookController::edit
 * @see app/Http/Controllers/Admin/BookController.php:50
 * @route /books/{book}/edit
 */
edit.head = (args: { book: number | { id: number } } | [book: number | { id: number }] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: edit.url(args, options),
    method: 'head',
})

export default edit