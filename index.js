let express = require("express");
var cors = require('cors');

const app = express();
app.use(cors())
app.use(express.static(__dirname + "/public"))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})
app.listen(process.env.PORT || 3000);