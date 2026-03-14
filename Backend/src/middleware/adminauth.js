const express = require('express');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "MY_KEY";
 function adminAuth(req, res, next) {
  const authHeader =  req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.admin = decoded;
    next();
  }
  catch (err){
    res.status(401).json({message:"Invalid token"})
  }
}
module.exports = adminAuth;