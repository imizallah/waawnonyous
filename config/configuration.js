module.exports = {
  sendEmail: () => {

  },
  
  globalVariables: (req, res, next) => {
    res.locals.success_message = req.flash('success-message');
    res.locals.error_message = req.flash('error-message');
    res.locals.isAuthenticated = req.user ? true : false;
    res.locals.user = req.user || null;

    next();
  }
}