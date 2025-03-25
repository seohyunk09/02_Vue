// 내보내는 변수의 이름과 받는 변수의 이름은 동일해야 한다.
//export default hi;
//=> 가져올 수 있는게 hi 밖에 없다. (무조건 hi)
//=> 저장한 변수의 이름을 바꿔도 hi 가 대입

import abc from './greeting-2.mjs';
//abc={hi, goodbye}=> 이런식으로 쓰면 안됨!! 묶어서~~~~

abc.hi('훈이');
abc.goodbye('훈이');
// import 부분의 이름이 다를 수도 있음!!
