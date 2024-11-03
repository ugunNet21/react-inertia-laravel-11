import React, { useState } from "react";

import {
    Button,
    Container,
    Form,
    Spinner,
} from "react-bootstrap";

import { Inertia } from "@inertiajs/inertia";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        Inertia.post('/books', { title, author }, {
            onSuccess: () => setLoading(false),
            onError: () => setLoading(false)
        });
    };

    return (
        <Container>
            <h1 className="mt-4">Add Book</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter book title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter author name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
                    {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Add Book'}
                </Button>
            </Form>
        </Container>
    );
};

export default Create;
