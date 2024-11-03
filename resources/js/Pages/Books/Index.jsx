import React, { useState } from "react";

import {
    Button,
    Container,
    Form,
    Spinner,
    Table,
} from "react-bootstrap";

import { Inertia } from "@inertiajs/inertia";

const Index = ({ books, search, per_page }) => {
    const [loading, setLoading] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(per_page);

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this book?')) {
            setLoading(true);
            Inertia.delete(`/books/${id}`, {
                onSuccess: () => setLoading(false),
                onError: () => setLoading(false)
            });
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get('/books', { search, per_page: itemsPerPage }, { preserveState: true });
    };

    const handleItemsPerPageChange = (e) => {
        const value = e.target.value;
        setItemsPerPage(value);
        Inertia.get('/books', { search, per_page: value }, { preserveState: true });
    };

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <h1>Books</h1>
                <Form onSubmit={handleSearch} className="d-flex">
                    <Form.Group controlId="search" className="mb-0">
                        <Form.Control
                            type="text"
                            placeholder="Search by title or author"
                            value={search || ""}
                            onChange={(e) => Inertia.get('/books', { search: e.target.value, per_page: itemsPerPage }, { preserveState: true })}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="ms-2">Search</Button>
                </Form>
            </div>
            <div className="mb-3">
                <Form.Select value={itemsPerPage} onChange={handleItemsPerPageChange} aria-label="Select items per page">
                    <option value={10}>10</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </Form.Select>
            </div>
            <Button variant="primary" href="/books/create" className="mb-3">Add Book</Button>
            {loading && <Spinner animation="border" />}

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.data.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <Button variant="warning" href={`/books/${book.id}/edit`}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(book.id)} className="ms-2">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Pagination */}
            <div className="d-flex justify-content-end">
                <nav>
                    <ul className="pagination">
                        {books.links.map(link => (
                            <li key={link.label} className={`page-item ${link.active ? 'active' : ''}`}>
                                <Button
                                    className="page-link"
                                    onClick={() => Inertia.get(link.url, { preserveState: true, per_page: itemsPerPage })}
                                    dangerouslySetInnerHTML={{ __html: link.label }} // Menampilkan HTML dengan benar
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </Container>
    );
};

export default Index;
