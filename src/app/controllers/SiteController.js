class SiteController {
  index(req, res) {
    res.render('news');
  }
  //[GET] /news/:slug
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
