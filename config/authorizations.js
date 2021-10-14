module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    }else{
      req.flash('error-message', 'Please login to continue');
      res.redirect('/user/login');
    }
  }
}