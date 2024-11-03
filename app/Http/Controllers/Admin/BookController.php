<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Yajra\DataTables\DataTables;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $query = Book::query();

        // Pencarian
        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where('title', 'like', "%{$search}%")
                  ->orWhere('author', 'like', "%{$search}%");
        }

        // Pagination
        $books = $query->paginate(5);

        return Inertia::render('Books/Index', [
            'books' => $books,
            'search' => $request->input('search'),
        ]);
    }
    public function create()
    {
        return Inertia::render('Books/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'author' => 'required',
        ]);
        Book::create($request->all());
        return Inertia::location(route('books.index'));
    }

    public function edit(Book $book)
    {
        return Inertia::render('Books/Edit', ['book' => $book]);
    }

    public function update(Request $request, Book $book)
    {
        // \Log::info('Updating book', ['book' => $book->id]);
        $request->validate([
            'title' => 'required',
            'author' => 'required',
        ]);
        $book->update($request->all());
        return Inertia::location(route('books.index'));
    }
    public function show(Book $book)
    {
        return Inertia::render('Books/Show', ['book' => $book]);
    }

    public function destroy(Book $book)
    {
        // \Log::info('Deleting book', ['book' => $book->id]);
        $book->delete();
        return Inertia::location(route('books.index'));
    }
}
