var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
 
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());
@@ -13,92 +13,92 @@ Book =require('./models/book');
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;
 
app.get('/', function(req, res){
app.get('/', (req, res) => {
res.send('here is our updated news');
});
 
-app.get('/api/genres', function(req, res){
-	Genre.getGenres(function(err, genres){
+app.get('/api/genres', (req, res) => {
+	Genre.getGenres((err, genres) => {
 		if(err){
 			throw err;
 		}
 		res.json(genres);
 	});
 });
 
app.post('/api/genres', function(req, res){
app.post('/api/genres', (req, res) => {
 	var genre = req.body;
Genre.addGenre(genre, function(err, genre){
Genre.addGenre(genre, (err, genre) => {
 		if(err){
 			throw err;
 		}
 		res.json(genre);
 	});
 });
 
app.put('/api/genres/:_id', function(req, res){
app.put('/api/genres/:_id', (req, res) => {
 	var id = req.params._id;
 	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
	Genre.updateGenre(id, genre, {}, (err, genre) => {
 		if(err){
 			throw err;
 		}
 		res.json(genre);
 	});
 });
 
app.delete('/api/genres/:_id', function(req, res){
app.delete('/api/genres/:_id', (req, res) => {
 	var id = req.params._id;
	Genre.removeGenre(id, function(err, genre){
	Genre.removeGenre(id, (err, genre) => {
 		if(err){
 			throw err;
 		}
 		res.json(genre);
 	});
 });
 
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
 		if(err){
 			throw err;
 		}
 		res.json(books);
 	});
 });
 
app.get('/api/books/:_id', function(req, res){
Book.getBookById(req.params._id, function(err, book){
app.get('/api/books/:_id', (req, res) => {
Book.getBookById(req.params._id, (err, book) => {
 		if(err){
 			throw err;
 		}
 		res.json(book);
 	});
 });
 
app.post('/api/books', function(req, res){
app.post('/api/books', (req, res) => {
 	var book = req.body;
	Book.addBook(book, function(err, book){
Book.addBook(book, (err, book) => {
 		if(err){
 			throw err;
 		}
 		res.json(book);
 	});
 });
 
app.put('/api/books/:_id', function(req, res){
app.put('/api/books/:_id', (req, res) => {
 	var id = req.params._id;
 	var book = req.body;
Book.updateBook(id, book, {}, function(err, book){
Book.updateBook(id, book, {}, (err, book) => {
 		if(err){
 			throw err;
 		}
 		res.json(book);
 	});
 });
 
app.delete('/api/books/:_id', function(req, res){
app.delete('/api/books/:_id', (req, res) => {
 	var id = req.params._id;
	Book.removeBook(id, function(err, book){
	Book.removeBook(id, (err, book) => {
 		if(err){
 			throw err;
 		}
@@ -107,4 +107,4 @@ app.delete('/api/books/:_id', function(req, res){
 });
 
 app.listen(3000);
console.log('Running on port 3000...'); 
console.log('Running on port 3000...');
