import logger from '../logger/index.js';

class HomeController {
  static index(req, res) {
    return res.send(`eStore Project API v${process.env.APP_VERSION}`);
  }

  static async health(req, res) {
    return res.status(200).json({ status: 'ok' });
  }

  static async environment(req, res) {
    return res.status(200).json(process.env.NODE_ENV);
  }

  static async log(req, res) {
    logger.info('This is an info log');
    return res.status(200).json({ log: 'Done' });
  }
}

export default HomeController;
