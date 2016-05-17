import 'babel-core/register';
import { port } from './config/config';
import server from './server';

const app = server();

app.listen(port, () => console.log(`服务器启动成功！端口号： ${port}`));
