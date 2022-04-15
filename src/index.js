import { Server } from "miragejs";

new Server({
    routes() {
        this.namespace = "api";

        this.get("/users/", () => {
            return [
                {
                    "full": "router.use((req, res, next) => {\n  if (!req.user || !req.user.isAdmin) {\n    res.status(401).json({ error: 'Unauthorized' });\n    return;\n  }\n\n  next();\n});",
                },
                {
                    "full": "router.post('/books/add', async (req, res) => {\n  try {\n    const book = await Book.add(Object.assign({ userId: req.user.id }, req.body));\n    res.json(book);\n  } catch (err) {\n    logger.error(err);\n    res.json({ error: err.message || err.toString() });\n  }\n});",
                },
                {
                    "full": "const book = await Book.add(Object.assign({ userId: req.user.id }, req.body)); \n",
                },
                {
                    "full": "// Start listening\nPromise.fromNode(cb => {\n  api.listen(config.LANDO_API_PORT, cb);\n})\n// Load our routes\n.then(() => {\n  fs.readdirSync(path.join(__dirname, 'routes')).map(file => {\n    require(`./routes/${file}`)(api, handler, {config, slack});\n    log.info('Loaded route %s', file);\n  });\n  log.info('Listening on port: %s', config.LANDO_API_PORT);\n});",
                },
                {
                    "full": "router.post('/torrents/delete', (req, res) => {\n  const {deleteData, hash: hashes} = req.body;\n  const callback = ajaxUtil.getResponseFn(res);\n\n  req.services.clientGatewayService\n    .removeTorrents({hashes, deleteData})\n    .then(callback)\n    .catch(err => {\n      callback(null, err);\n    });\n});",
                },
                {
                    "full": "router.use((req, res, next) => {\n  if (!req.user || !req.user.isAdmin) {\n    res.status(401).json({ error: 'Unauthorized' });\n    return;\n  }\n\n  next();\n});",
                },
                {
                    "full": "router.post('/books/add', async (req, res) => {\n  try {\n    const book = await Book.add(Object.assign({ userId: req.user.id }, req.body));\n    res.json(book);\n  } catch (err) {\n    logger.error(err);\n    res.json({ error: err.message || err.toString() });\n  }\n});",
                },
                {
                    "full": "const book = await Book.add(Object.assign({ userId: req.user.id }, req.body)); \n",
                },
                {
                    "full": "// Start listening\nPromise.fromNode(cb => {\n  api.listen(config.LANDO_API_PORT, cb);\n})\n// Load our routes\n.then(() => {\n  fs.readdirSync(path.join(__dirname, 'routes')).map(file => {\n    require(`./routes/${file}`)(api, handler, {config, slack});\n    log.info('Loaded route %s', file);\n  });\n  log.info('Listening on port: %s', config.LANDO_API_PORT);\n});",
                },
                {
                    "full": "router.post('/torrents/delete', (req, res) => {\n  const {deleteData, hash: hashes} = req.body;\n  const callback = ajaxUtil.getResponseFn(res);\n\n  req.services.clientGatewayService\n    .removeTorrents({hashes, deleteData})\n    .then(callback)\n    .catch(err => {\n      callback(null, err);\n    });\n});",
                },
            ]
        });
    }
});


const mainDiv = document.getElementById("code-snippets-container");

function getCodeSnippets() {
    fetch("/api/users/")
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(json => buildSnippets(json));
};

function buildSnippets(codeSnippets) {
    codeSnippets.forEach((snippet) => {
        const addSnippet = document.createElement('div');
        addSnippet.className = "code-snip";
        addSnippet.textContent = snippet.full;
        mainDiv.appendChild(addSnippet);
    });
}


let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    let searchQuery = document.getElementById("searchbox").value;
    let snips = document.querySelectorAll('.code-snip');
    for (var i = 0; i < snips.length; i++) {
        if (snips[i].innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
            snips[i].classList.remove("is-hidden");
        } else {
            snips[i].classList.add("is-hidden");
        }
    }
}
);


getCodeSnippets();

