import * as express from "express";
const port = 5000;
const app = express();

import books from "./routes/bookRoutes";
import genres from "./routes/genreRoutes";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/books", books);
app.use("/api/genres", genres);

app.listen(port, () => console.log(`Server started on port ${port}`));
