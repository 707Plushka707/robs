const Binance = require('node-binance-api');
const express = require("express");

const app = express();

app.use(express.json());

//const boll = require('keltnerchannel').boll;

var BB = require('technicalindicators').BollingerBands


const boll = require('bollinger-bands');
 
const binance = new Binance().options({
  APIKEY: '<key>',
  APISECRET: '<secret>'
});

binance.candlesticks("BTCUSDT", "5m", (error, ticks, symbol) => {
  let last_tick = ticks[ticks.length - 1];
  let last_tick2 = ticks[ticks.length - 2];
  let last_tick3 = ticks[ticks.length - 3];
  let last_tick4 = ticks[ticks.length - 4];
  let last_tick5 = ticks[ticks.length - 5];
  let last_tick6 = ticks[ticks.length - 6];
  let last_tick7 = ticks[ticks.length - 7];
  let last_tick8 = ticks[ticks.length - 8];
  let last_tick9 = ticks[ticks.length - 9];
  let last_tick10 = ticks[ticks.length - 10];
  let last_tick11 = ticks[ticks.length - 11];
  let last_tick12 = ticks[ticks.length - 12];
  let last_tick13 = ticks[ticks.length - 13];
  let last_tick14 = ticks[ticks.length - 14];
  let last_tick15 = ticks[ticks.length - 15];
  
  let last_tick16 = ticks[ticks.length - 16];
  let last_tick17 = ticks[ticks.length - 17];
  let last_tick18 = ticks[ticks.length - 18];
  let last_tick19 = ticks[ticks.length - 19];
  let last_tick20 = ticks[ticks.length - 20];
  
  let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
  
  let [time2,open2, high2, low2, close2, volume2, closeTime2, assetVolume2, trades2, buyBaseVolume2, buyAssetVolume2, ignored2] = last_tick2;
  
  let [time4,open4, high4, low4, close4, volume4, closeTime4, assetVolume4, trades4, buyBaseVolume4, buyAssetVolume4, ignored4] = last_tick3;

  let [time6,open6, high6, low6, close6, volume6, closeTime6, assetVolume6, trades6, buyBaseVolume6, buyAssetVolume6, ignored6] = last_tick4;

  let [time8,open8, high8, low8, close8, volume8, closeTime8, assetVolume8, trades8, buyBaseVolume8, buyAssetVolume8, ignored8] = last_tick5;
  
  let [time10, open10, high10, low10, close10, volume10, closeTime10, assetVolume10, trades10, buyBaseVolume10, buyAssetVolume10, ignored10] = last_tick6;

  let [time12, open12, high12, low12, close12, volume12, closeTime12, assetVolume12, trades12, buyBaseVolume12, buyAssetVolume12, ignored12] = last_tick7;

  let [time14, open14, high14, low14, close14, volume14, closeTime14, assetVolume14, trades14, buyBaseVolume14, buyAssetVolume14, ignored14] = last_tick8;
  
  let [time16, open16, high16, low16, close16, volume16, closeTime16, assetVolume16, trades16, buyBaseVolume16, buyAssetVolume16, ignored16] = last_tick9;

  let [time18, open18, high18, low18, close18, volume18, closeTime18, assetVolume18, trades18, buyBaseVolume18, buyAssetVolume18, ignored18] = last_tick10;

  let [time20, open20, high20, low20, close20, volume20, closeTime20, assetVolume20, trades20, buyBaseVolume20, buyAssetVolume20, ignored20] = last_tick11;

  let [time22, open22, high22, low22, close22, volume22, closeTime22, assetVolume22, trades22, buyBaseVolume22, buyAssetVolume22, ignored22] = last_tick12;
  
  let [time24, open24, high24, low24, close24, volume24, closeTime24, assetVolume24, trades24, buyBaseVolume24, buyAssetVolume24, ignored24] = last_tick13;
  
  let [time26, open26, high26, low26, close26, volume26, closeTime26, assetVolume26, trades26, buyBaseVolume26, buyAssetVolume26, ignored26] = last_tick14;
  
  let [time28, open28, high28, low28, close28, volume28, closeTime28, assetVolume28, trades28, buyBaseVolume28, buyAssetVolume28, ignored28] = last_tick15;
  
  let [time30, open30, high30, low30, close30, volume30, closeTime30, assetVolume30, trades30, buyBaseVolume30, buyAssetVolume30, ignored30] = last_tick16;

  let [time32, open32, high32, low32, close32, volume32, closeTime32, assetVolume32, trades32, buyBaseVolume32, buyAssetVolume32, ignored32] = last_tick17;

  let [time34, open34, high34, low34, close34, volume34, closeTime34, assetVolume34, trades34, buyBaseVolume34, buyAssetVolume34, ignored34] = last_tick18;

  let [time36, open36, high36, low36, close36, volume36, closeTime36, assetVolume36, trades36, buyBaseVolume36, buyAssetVolume36, ignored36] = last_tick19;

  let [time38, open38, high38, low38, close38, volume38, closeTime38, assetVolume38, trades38, buyBaseVolume38, buyAssetVolume38, ignored38] = last_tick20;


  let close1 = parseFloat(close)
  let close3 = parseFloat(close2)
  let close5 = parseFloat(close4)
  let close7 = parseFloat(close6)
  let close9 = parseFloat(close8)
  let close11 = parseFloat(close10)
  let close13 = parseFloat(close12)
  let close15 = parseFloat(close14)
  let close17 = parseFloat(close16)
  let close19 = parseFloat(close18)
  let close21 = parseFloat(close20)
  let close23 = parseFloat(close22)
  let close25 = parseFloat(close24)
  let close27 = parseFloat(close26)
  let close29 = parseFloat(close28)
  let close31 = parseFloat(close30)
  let close33 = parseFloat(close32)
  let close35 = parseFloat(close34)
  let close37 = parseFloat(close36)
  let close39 = parseFloat(close38)
  
  var period = 20

  var data = [close1,close3,close5,close7,close9,close11,close13, close15, close17, close19, close21,close23, close25, close27,close29, close31, close33,close35,close37,close39]

  console.log(data);
  var input = {
  period : period, 
  values : data,
  stdDev : 2
      
  }


  console.log(BB.calculate(input));

},);
module.exports = app;