
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('search_book', { title: 'Express' });
};