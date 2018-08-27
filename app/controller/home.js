'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('register/index.html');
  }

  async save() {
    const { ctx } = this;
    const { body } = ctx.request;
    const { email } = body;
    const hasEmail = await ctx.model.Register.findOne({ email });
    if (hasEmail) {
      ctx.response.body = { code: 2, msg: '此email已被人注册过' };
      return;
    }
    const result = await ctx.model.Register.create(body);
    if (result) {
      ctx.response.body = { code: 0, msg: '注册成功' };
      return;
    }
    ctx.response.body = { code: 1, msg: '注册失败' };
  }
}

module.exports = HomeController;
