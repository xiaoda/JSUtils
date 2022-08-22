const express = require('express')
const router = express.Router()
const {arrayToObject} = require('../core/structure/array-to-object')

/**
 * @api {post} /structure/array-to-object 数组转对象（Post）
 * @apiName arrayToObjectPost
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/structure/array-to-object.js)
 * @apiGroup Structure
 * 
 * @apiBody {Array} array 原始数组
 * @apiBody {Object} fields 字段列表
 */
router.post('/array-to-object', (req, res, next) => {
  let {array, fields} = req.body
  const object = arrayToObject(array, fields)
  res.json({object})
})

module.exports = router