
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('sign_up', { title: 'Express' });
};