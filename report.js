const newman = require('newman');

newman.run({
    collection:'https://api.postman.com/collections/33016947-5d918df2-c3c9-4552-899c-669027d32044?access_key=PMAT-01HPVKEVQY8C0WG79SQY4PTG7R',
    reporters:'htmlextra',
    iterationCount:1,
    reporter:{
        htmlextra:{
            export:'./Reports/report.html'
        }
    }
},
    function(err){
    if(err){throw err;}
    console.log('collection run complete!')

})