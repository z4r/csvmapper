"use strict";
var assert = require('chai').assert;
var csvmapper = require('../lib');
var nock = require('nock');

describe('Map', function() {
    describe('a csv url in to columns', function() {
        it('from url', function(done) {
            var scope = nock('http://example.net')
                .get('/sources.csv')
                .replyWithFile(200, __dirname + '/resources/sources.csv');
            var expected = [
                {company: "Ut Ltd", date: "2014/11/12", email: "nulla.ante.iaculis@massaMauris.com", name: "Ethan"},
                {company: "Integer Company", date: "2014/01/12", email: "urna@NuncmaurisMorbi.com", name: "Craig"},
                {company: "Aliquet Phasellus Corporation", date: "2014/05/07", email: "sed@liberoProinsed.edu", name: "Julian"},
                {company: "Nonummy Ipsum Corporation", date: "2015/01/13", email: "elementum@Sed.ca", name: "Perry"}
            ];
            csvmapper.map('http://example.net/sources.csv', ['name', 'email', 'date', 'company'], function (err, results) {
                assert.ifError(err);
                assert.deepEqual(expected, results);
                scope.done();
                done();
            })
        })

        it('from file', function(done) {
            var expected = [
                {company: "Ut Ltd", date: "2014/11/12", email: "nulla.ante.iaculis@massaMauris.com", name: "Ethan"},
                {company: "Integer Company", date: "2014/01/12", email: "urna@NuncmaurisMorbi.com", name: "Craig"},
                {company: "Aliquet Phasellus Corporation", date: "2014/05/07", email: "sed@liberoProinsed.edu", name: "Julian"},
                {company: "Nonummy Ipsum Corporation", date: "2015/01/13", email: "elementum@Sed.ca", name: "Perry"}
            ];
            csvmapper.mapFile(__dirname + '/resources/sources.csv', ['name', 'email', 'date', 'company'], function (err, results) {
                assert.ifError(err);
                assert.deepEqual(expected, results);
                done();
            })
        })
    })
});
