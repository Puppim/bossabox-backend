const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    const authHeader= req.headers.authorization

    if(!authHeader)
        return res.status(401).send({error:'No token provided 01'})

    const parts = authHeader.split(' ')
    console.log(parts.length)

    if (parts.length === 1)
        return res.status(401).send({error: 'Invalid parts token 02'})

    const [ scheme, token] = parts
    
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'Token malformatted'})
    
    jwt.verify(token, process.env.JWT_SECRET ,(err,  decoded)=>{
        if(err)  return res.status(401).send({error: 'Token invalid  04'})

        req.userId = decoded.id

        return next()
    } )

}