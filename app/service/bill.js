'use strict';

const Service = require('egg').Service;

class BillService extends Service {
  async add(params) {
    const { app } = this;
    try {
      // 往 bill 表中，插入一条账单数据
      return await app.mysql.insert('bill', params);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async list(id) {
    const { app } = this;
    const QUERY_STR = 'id, pay_type, amount, date, type_id, type_name, remark';
    const sql = `select ${QUERY_STR} from bill where user_id = ${id}`;
    try {
      return await app.mysql.query(sql);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = BillService;
