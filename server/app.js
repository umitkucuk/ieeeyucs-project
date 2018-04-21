const express = require('express');
const app=express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/test");
var productschema = new mongoose.Schema({
    name:String,
    barcode:String
},{collection:'akilli'});

var listschema = new mongoose.Schema({
    name:String,
    count:Number,
    buy:Boolean
},{collection:'liste'});

var pveriler = mongoose.model('pveriler',productschema);
var listveriler = mongoose.model('listveriler',listschema);

const Main = async function(){
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    app.get("/Save/:barcode/:productname", async (req,res)=>{
        var product = new pveriler({
            name : req.params.productname,
            barcode : req.params.barcode
        })
        product.save(function(err,doc){
            if(err) res.send("bir hata meydana geldi : \n\r " + err);
            else res.status(200).send("OK");
        });
    });
    app.get("/Find/:barcode", async (req,res)=>{
        pveriler.findOne({barcode : req.params.barcode}, function(err,obj) { 
           if(err) res.send("Ürün Bulunamadı");
           else res.send(obj.name);
        });
    });
    app.get("/GetListItem/:productname", async (req,res)=>{
        listveriler.findOne({name : req.params.productname},function(err,resp){
           if(resp){
            var a = JSON.stringify(resp.count);
           res.send(a);
           }
           else res.send("Ürün Alısveris Lisesinde Bulunamadı.");
       })
   });
   app.get("/GetList/", async (req,res)=>{
        listveriler.find(function(err,obj){
            res.json(obj);
        })
    });
    app.get("/List/delete/:productname", async (req,res)=>{
        listveriler.findOneAndRemove({name : req.params.productname},function(err,obj){
            if(obj) res.status(200).send("Üürn alısveris Listesinden Silindi.");
            else res.send("Ürün silinirken hata olustu");
        })
    });
    app.get("/List/deleteall", async (req,res)=>{
        listveriler.remove({},function(err,obj){
            if(obj) res.status(200).send("Alısveris Listesi Temizlendi");
            else res.send("Liste temizlenirken hata olustu");
        })
    });
    app.get("/List/buy/:productname/:status", async (req,res)=>{
       listveriler.findOneAndUpdate({name : req.params.productname},{$set:{buy : req.params.status}},function(err,obj){
           if(obj){
               res.status(200).send("Ürün durumu değistirildi!");
            }else{
                res.send("Hata");
            }
       })
    });
    app.get("/List/Save/:productname/:count", async (req,res)=>{
        var lproduct = new listveriler({
            name : req.params.productname,
            count : req.params.count,
            buy : false
        });
        listveriler.findOne({name : req.params.productname},function(err,resp){
            if (resp) {
                listveriler.findOneAndUpdate({name : req.params.productname},{$set:{count : req.params.count}},function(erro, obj) {
                    res.status(200).send("Ürün Sayısı değistirildi"); //console.log(erro + " --- " + obj + "****" + err + "/////" + resp);
                })
            } else {
                lproduct.save(function(error,doc) {
                    if (error) res.send("bir hata meydana geldi : \n\r " + error);
                    else res.status(200).send("OK");
                })
            }
        });
    })
    app.listen(8000,console.log("sunucu çalısıyor"));
}
Main();