import { queryParams, type QueryParams } from './../../../../../wayfinder'

/**
 * @see \App\Http\Controllers\Admin\BookController::index
 * @see app/Http/Controllers/Admin/BookController.php:13
 * @route /books
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '\/books',
}

/**
 * @see \App\Http\Controllers\Admin\BookController::index
 * @see app/Http/Controllers/Admin/BookController.php:13
 * @route /books
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\Admin\BookController::index
 * @see app/Http/Controllers/Admin/BookController.php:13
 * @route /books
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\Admin\BookController::index
 * @see app/Http/Controllers/Admin/BookController.php:13
 * @route /books
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

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

const BookController = { index, create, store, show, edit, update, destroy }

export default BookController