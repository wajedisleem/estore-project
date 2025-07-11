import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';
import User from '../database/schemas/user.schema.js';
import Translations from '../i18n/translations.js';

admin.initializeApp({
  credential: admin.credential.cert({
    type: 'service_account',
    project_id: 'estore-project-5731e',
    private_key_id: '53d1c382b4fa7fdd336cd32e81669162da5a7b4e',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIcBpsTUQIuAls\nbeMcYV3A1miglWa9+ALMoFAGsk7Go/Fjj32UcZN7qPPw1pHa0i+hnmKi2hpXv+qY\nixPbY+wnkoXGGVId7GmKzaofb55Ptvkk9dEaNXfe2qxOlrTiAcHqEgKFWenJ9/ki\nq9T3JJFQDgtId5QmCy+TjeSIhTCdmmL+4hXsCV5uh1KhRW7tS7n7g0S7DZmBvm/4\nSL2I2HntcZlS8hGmhBX4oLahaCxNe80McAXBMnuZCJBVXMTTd4rj0KZfKWjhJ9Dj\nhzVpuzhYmyVhYGJaldhk1wCbENJxGjVo5f27F5c1HA92gRbOZQPI+SmJbnf/LG99\nfbh+Qus3AgMBAAECggEAHe/kem2V7klymt/Uzo3aX22GxglahaAv5tlA6qciLfgZ\nmzm4032dPhiPita5hTnkhFqwN8ukqJuREgSfzCJiCM0RLvPkOHTxlJpAQR6+QgC9\nuKAAgc4fn8kAeGJ5FNKXYHsdJka2LQTdEKkij2FGVPMsC0BU/9Om4P6N9jgSeU9s\no8BTFzuQmiZDLs1CWbpKg/3Znpaq2UyAi5WtccDup00ru5uKdUurQO4vJ7BRDabW\n+iyTfcmALwedAbST+bapQp8q5kRsKoSGOf9uLL7e895AL3pt6DuDZ5FE7sBBWVPb\nduQJl3lzT16sX8awSJ0e8skKse/w+2GEek0RfRKfLQKBgQDskx/znXbeFZvotAH5\nhSy2Cyl/Iov1BHWh09LWHjjCzjnwFHbzvD5pEHw2vrYIaev3NjB9TkSxaikKv+hy\n7UrjB8nMR6BFyUm+5DjwZLYCRKkI1cTnPZzle568VgzES/X5dzw7Gl4B9cAFGW8K\n4K1jIL2SHLPv/cY61Q3MmWFCbQKBgQDY5V8R7v3WkZIhn/F6RYRQLlL0wF6PSwxR\nLjJgNOHl9MMsk+3cri6YD2ZqkvSnhLu+OGLtTIyhsn5+IokHSieBFH5HmMoGVuQ8\nbiAk32/l1XXoqiNcz37w3nQGzybcyrzh5GqghhmVb23vmN41oorncW3bvL2X4pPp\nePEfm7O9swKBgQC7gcEJbf0Q+T+hqUsHYi6V+zLguZkEkoxJv4KUg0+p15rEVvQR\nK1qsG4zYN0BAWvPT9Pdp2edIV0RAaOrsbHe2ii2/4+V8apYw3uLiZnB8S79OaWCv\nh34bxWeDDxD/ZNWI7KCol7V7CDUx1X7VuE61CvY2INndld7QMp3FVKxp4QKBgQCQ\nj0/uA/vrJtrezluDwxGM31MrDYv4tWxgLwokVRq6yYfMDkxa6Tzk3F7GaWvmuvDm\nt243+u1AWFc2eo4Z7bKmtaH01kDQONml7UA/UyyhYsRTbhJjqWhR4fIzF54vSnDZ\nngPzOW2Ty9DaAGkaFlu+JjuyWPmEYd9znMgY6Q3DQQKBgCJ3HoctwAJwkjDBltPi\nheTiNOzle7oqRSiM66ucP4AWlezV2ZaK6sQ3AaNS5V/0sqEA5xrsv9W4SbMjHYFz\nnbxV5KfZa606EJN19SMEwWsjTYEJKIPn038yFF79b8PVs2tQ4XqJ1mnGmBLFp0W/\nL4Vz6ZsesjG5xxqU7eEOAgHY\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-fbsvc@estore-project-5731e.iam.gserviceaccount.com',
    client_id: '103837660606812241882',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40estore-project-5731e.iam.gserviceaccount.com',
    universe_domain: 'googleapis.com'
  })
});

class AuthController {
  static async login(req, res) {
    let { token } = req.body;

    const decodedToken = await admin.auth().verifyIdToken(token);
    if (!decodedToken) {
      return res.status(401).json({
        success: false,
        message: Translations[req.lang].auth.invalidToken
      });
    }

    let user = await User.findOne({ email: decodedToken.email });
    if (!user) {
      user = new User({
        name: decodedToken.name,
        email: decodedToken.email
      });
      await user.save();
    }

    token = jwt.sign({ id: user._id, fullname: user.name }, process.env.JWT_SECRET_KEY, { expiresIn: '120d' });
    return res.status(200).json({
      success: true,
      message: Translations[req.lang].auth.loginSuccess,
      token,
      user: { id: user._id, fullname: user.name }
    });
  }

  static async verify(req, res) {
    if (!req.user) {
      return res.sendStatus(401);
    }
    return res.status(200).json({ id: req.user.id, fullname: req.user.fullname });
  }
}

export default AuthController;
