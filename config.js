exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                       'mongodb://bob:pass123@ds139985.mlab.com:39985/thinkful'


                            // 'mongodb://localhost/shopping-list' :
                            // 'mongodb://localhost/shopping-list-dev');
exports.PORT = process.env.PORT || 8080;
