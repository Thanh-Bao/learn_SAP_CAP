module.exports = srv => srv.after('READ', 'Books', each => each.title += ' --- Hello FPT ^^ ')

