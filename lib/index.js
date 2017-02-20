"use strict";
var jwt = require("jsonwebtoken");
var ApiAuth = (function () {
    function ApiAuth() {
    }
    ApiAuth.userToken = function (user, options) {
        return new Promise(function (res, rej) {
            var pl = typeof user == 'string' ? {
                user: user
            } : user;
            jwt.sign({
                data: pl
            }, options.secret, {
                algorithm: 'HS256',
                expiresIn: options.expirationMiliseconds || 1000 * 60 * 60 * 12,
                issuer: 'api.jdash.io',
                subject: options.apikey
            }, function (err, token) {
                err ? rej(err) : res(token);
            });
        });
    };
    return ApiAuth;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ApiAuth;
