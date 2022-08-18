'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    const { app } = this;
    const QUERY_STR = '*';
    const sql = `select ${QUERY_STR} from user`; // 获取 id 的 sql 语句
    try {
      // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到。
      return await app.mysql.query(sql);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // 新增
  async addUser(name) {
    const { app } = this;
    try {
      // 给 list 表，新增一条数据
      return await app.mysql.insert('list', { name });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // 删除
  async deleteUser(id) {
    const { app } = this;
    try {
      return await app.mysql.delete('list', { id });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}
module.exports = HomeService;
