module.exports = {
    test1 : function(req, res){
        console.log("req.body");
        console.log(req);
        res.send({
            "status" : "suceess"
        })
    }
}