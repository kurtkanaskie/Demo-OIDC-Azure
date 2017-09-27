// extractJwtKid.js
// ------------------------------------------------------------------

var jwt = context.getVariable(properties.jwtvar);
if (jwt && jwt.length > 0) {
  try {
    jwt = jwtDecode(jwt);
    // set the certificate for the particular Key-id into a context variable
//    context.setVariable("JWTX5t",jwt.header.x5t);
//    var cert = context.getVariable('mscerts.' + jwt.header.x5t);
//    context.setVariable('ms.certificate', cert);
    context.setVariable("JWTKid", jwt.header.kid);
    var modulus = context.getVariable('mscerts.n.' + jwt.header.kid);
    var exponent = context.getVariable('mscerts.e.' + jwt.header.kid);
    context.setVariable('context.var.containing.modulus', modulus);
    context.setVariable('context.var.containing.exponent', exponent);
  }
  catch (exc1) {
    context.setVariable('context.var.containing.modulus', null);
  }
} 