import "bootstrap/dist/css/bootstrap.min.css";

// import './bootstrap';
import React from "react";

import { createRoot } from "react-dom/client";

import { InertiaApp } from "@inertiajs/inertia-react";

const el = document.getElementById('app');

if (el) {
    const root = createRoot(el);
    root.render(
        <InertiaApp
            initialPage={JSON.parse(el.dataset.page)}
            resolveComponent={(name) => import(`./Pages/${name}`).then(module => module.default)}
        />
    );
}
