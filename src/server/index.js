import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../client/App';
import serialize from "serialize-javascript";
import path from 'path';
import { ChunkExtractor } from '@loadable/server'

const fetch = require('node-fetch');
const app = express(); 

app.use(express.static('assets'));

app.get("*", (req, res, next) => {
    const emptyArray = [];
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';
    const statsFile = path.resolve('./assets/loadable-stats.json')
    const extractor = new ChunkExtractor({ statsFile });

    const fetchUrl = url => fetch(url).then(response => response.json())
                                      .then(data => emptyArray.concat(data.drinks))
                                      .then(array => {
                                        const jsx = extractor.collectChunks(<App arrayFromFetch={array} />)
                                        const html = renderToString(jsx)
                                        const scriptTags = extractor.getScriptTags()
                                        
                                          res.send(`
                                            <!DOCTYPE html>
                                            <html>
                                              <head>
                                                <title>SSR with React</title>
                                                <script>window.__INITIAL_ARRAYFETCH__ = ${serialize(array)}</script>
                                              </head>
                                              <body>
                                                <div id="app">${html}</div>
                                                ${scriptTags}
                                              </body>
                                            </html>
                                          `)
                                          }
                                        )
                                    .catch((error) => {
                                      console.warn(error)
                                      return null
                                    });

  fetchUrl(url)

  /* const jsx = extractor.collectChunks(<App />)
  const html = renderToString(jsx)
  const scriptTags = extractor.getScriptTags() */

  /* res.send(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>SSR with React</title>
              </head>
              <body>
                <div id="app">${html}</div>
                ${scriptTags}
              </body>
            </html>
          `) */
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})