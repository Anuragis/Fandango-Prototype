module.exports.logout = function(req,res,next){
  console.log(req.session.user);
  req.session.destroy();
  console.log('Session Destroyed');
  res.status(200).send();
}
