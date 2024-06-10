import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import "./index.css";

import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader, action as contactAction } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

// Create the router using createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Index />} />
      <Route
        path="contacts/:contactId"
        element={<Contact />}
        loader={contactLoader}
        action={contactAction}
        errorElement={<ErrorPage />}
      />
      <Route
        path="contacts/:contactId/edit"
        element={<EditContact />}
        loader={contactLoader}
        action={editAction}
        errorElement={<ErrorPage />}
      />
      <Route
        path="contacts/:contactId/destroy"
        action={destroyAction}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
