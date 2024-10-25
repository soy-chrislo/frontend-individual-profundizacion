const express = require("express");
const sassMiddleware = require("node-sass-middleware");
const path = require("node:path");
const app = express();

app.use(
	sassMiddleware({
		src: path.join(__dirname, "public"),
		dest: path.join(__dirname, "public"),
		indentedSyntax: false, // true = .sass and false = .scss
		sourceMap: true,
	}),
);

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
	console.log("Aplicación escuchando en el puerto 3000");
});
