//导入export{}中的变量
import { flag, sum } from "./a1.js";
console.log(sum(50, 10));
console.log(123);
//导入在export时定义的变量
import { num } from "./a1.js";
console.log(num);
//3. 导入export的function
import { xx, Person } from "./a1.js";
console.log(xx(2, 3));
const p = new Person("jenny", 18);
p.run();

//4. export default导出的数据
import tenM from "./a1.js";
console.log(tenM(5));

//5. 把所有导出的数据都导入

import * as allData from "./a1.js";
console.log(allData);
console.log(allData.num, allData.Person);
