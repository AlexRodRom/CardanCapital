import { Injectable } from '@angular/core';
import { StructuredProduct } from '../classes/structured-product';


const products: StructuredProduct[] = [
  {
    "isin":"ISIN_TECH1",
    "issue_date":"20180101",
    "tags": ["tech", "technology", "innovation", "squash"],
    "components": [
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      }
    ]
  },
  {
    "isin":"ISIN_TECH2",
    "issue_date":"20180101",
    "tags": ["tech", "technology", "innovation", "art", "tennis"],
    "components": [
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "CB",
        "tickers" : ["ABC", "DEF"],
        "start_date" : "20180101",
        "value" : 120
      }
    ]
  },
  {
    "isin":"ISIN_TECH3",
    "issue_date":"20180101",
    "tags": ["tech", "technology", "football", "innovation"],
    "components": [
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "CB",
        "tickers" : ["ABC", "DEF"],
        "start_date" : "20180101",
        "value" : 120
      }
    ]
  },
  {
    "isin":"ISIN_TECH4",
    "issue_date":"20180101",
    "tags": ["tech", "technology", "innovation"],
    "components": [
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "CB",
        "tickers" : ["ABC", "DEF"],
        "start_date" : "20180101",
        "value" : 120
      }
    ]
  },
  {
    "isin":"ISIN_TECH5",
    "issue_date":"20180101",
    "tags": ["tech", "technology","art", "innovation"],
    "components": [
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "CB",
        "tickers" : ["ABC", "DEF"],
        "start_date" : "20180101",
        "value" : 120
      }
    ]
  },
  {
    "isin":"ISIN_TECH6",
    "issue_date": "20180101",
    "tags": ["tech", "technology", "computers", "innovation"],
    "components": [
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "CB",
        "tickers" : ["ABC", "DEF"],
        "start_date" : "20180101",
        "value" : 120
      }
    ]
  },
  {
    "isin":"ISIN_TECH7",
    "issue_date": "20180101",
    "tags": ["tech", "technology", "art" ,"innovation" , "tennis"],
    "components": [
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "ZC",
        "value" : 12.5,
        "start_date" : "20180101",
        "quantity" : 100,
      },
      {
        "type" : "CB",
        "tickers" : ["ABC", "DEF"],
        "start_date" : "20180101",
        "value" : 120
      }
    ]
  }
]


@Injectable({
  providedIn: 'root'
})
export class ProductSevice {
  products: StructuredProduct[] = products;
  constructor() { }
}
