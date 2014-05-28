"use strict";
var fs = require('fs');
var request = require('request');
var csv = require('csv');
var async = require('async');
var _ = require('lodash');

var mapper = function (func, list, callback) {
    async.map(list, func, callback)
};

var wcsvparse = function(response, body, callback){
    csv.parse(response.body, callback)
};

var bufferToString = function(buffer, callback){
    callback(null, buffer + '')
};

var map = function(url, colnames, callback) {
    async.waterfall([
        request.bind(request, url),
        wcsvparse.bind(null),
        mapper.bind(null, function(item, next){ next(null, _.zipObject(colnames, item)) })
    ], function (err, results) {
        callback(err, results)
    })
};

var mapFile = function(filePath, colnames, callback) {
    async.waterfall([
        fs.readFile.bind(fs, filePath),
        bufferToString,
        csv.parse.bind(csv),
        mapper.bind(null, function(item, next){ next(null, _.zipObject(colnames, item)) })
    ], function (err, results) {
        callback(err, results)
    })
};

module.exports = {
    map : map,
    mapFile: mapFile
};
