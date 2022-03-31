var parser = require("./aa-parser");
var makeHints = require("./hints");

require("..").registerTransmutation({
    requires: [],
    id: "text-to-syntax-tree",
    type: "transformation",
    run: function(context) {
        try {
            context.output = parser.parse(context.lastInput);
            context.status = "pass";
        } catch(e) {
            var basic = "Unexpected " + JSON.stringify(e.found);
            
            var hints = makeHints(context.lastInput, e);
            
            throw {
                kind: "ERROR",
                text: basic,
                original: e.message,
                hints: hints,
                location: e.location,
                fail: true
            }
        }
    }
})