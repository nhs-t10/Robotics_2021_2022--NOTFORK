var path = require("path");

var query = require("../query");

module.exports = {
    summary: "Unreachable Statepath",
    run: function(ast, folder, filename, originalFileContent) {

        var gotoStatements = query.getAllOfType(ast, "GotoStatement");
        var statepaths = query.getAllOfType(ast, "LabeledStatepath");
        
        var warns = [];
        
        //validate that there aren't any dynamic `goto`s. If there are, then this check shouldn't trigger.
        if(gotoStatements.find(x=>x.path.type!="Identifier")) return;

        var statepathsThatHaveAGoto = gotoStatements.map(x=>x.path.value);

        //make it into an object for better performance
        statepathsThatHaveAGoto = Object.fromEntries(statepathsThatHaveAGoto.map(x=>[x,true]));
        
        //look through for any statepaths that *don't* have a `goto`. Start at 1 because statepath 0 is automatic.
        for(var i = 1; i < statepaths.length; i++) {
            if(!statepathsThatHaveAGoto[statepaths[i].label]) {
                warns.push({
                    kind: "WARNING",
                    text: `There is no \`goto\` to statepath \`${statepaths[i].label}\``,
                    location: statepaths[i].location,
                    titleNote: statepaths[i].label
                });
            }
        }
        return warns;
    }
}