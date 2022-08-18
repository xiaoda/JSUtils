const express = require('express')
const router = express.Router()
const {arrayToObject} = require('../core/structure/array-to-object')

/**
 * @api {get} /structure/array-to-object 数组转对象
 * @apiName arrayToObject
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/structure/array-to-object.js)
 * @apiGroup Structure
 * 
 * @apiQuery {Array} array 原始数组
 * @apiQuery {Object} fields 字段列表
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "object": {
 *         "美元": {
 *           "买入价": 100
 *         }
 *       }
 *     }
 */
router.get('/array-to-object', (req, res, next) => {
  let {array, fields} = req.query
  const object = arrayToObject(eval(array), eval(fields))
  res.json({object})
})

module.exports = router