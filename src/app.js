const Binance = require('node-binance-api');
const express = require("express");

const app = express();

app.use(express.json());

const boll = require('keltnerchannel').boll;
 


const binance = new Binance().options({
  APIKEY: '<key>',
  APISECRET: '<secret>'
});

// binance.websockets.chart("BTCUSDT", "1m", (symbol, interval, chart) => {
//     let tick = binance.last(chart);
//     const last = chart[tick].close;
//     const data = [last];
//     console.log(data);
// //    let out = boll(last, 2, 2, true);

//   //  console.log(out);
//   });
  
  binance.websockets.candlesticks(['BTCUSDT'], "1m", (candlesticks) => {
    let { e:eventType, E:eventTime, s:symbol, k:ticks } = candlesticks;
    let { o:open, h:high, l:low, c:close, v:volume, n:trades, i:interval, x:isFinal, q:quoteVolume, V:buyVolume, Q:quoteBuyVolume } = ticks;
    const data = [47487.64, 47488.10, 47481.88, 47491.88];
    // console.log(data);

    let out = boll(data, 2, 2, true);
    console.log(out);
  });

module.exports = app;