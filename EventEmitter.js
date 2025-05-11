const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('orderCreated', (amount, orderId) => {
  if (amount > 200) {
    console.log(`一个金额为 ${amount} 的订单，为 ${orderId}，已享受免运费！`);
    console.log(`一个金额为 ${amount} 的订单，为 ${orderId}，赠送优惠券`);
  } else if (amount >= 100) {
    console.log(`一个金额为 ${amount} 的订单，为 ${orderId}，已享受免运费！`);
  } else {
    console.log(`一个金额为 ${amount} 的订单，为 ${orderId}，需支付运费`);
  }
});

emitter.emit('orderCreated', 150, "A001");
emitter.emit('orderCreated', 80, "B002");
emitter.emit('orderCreated', 250, "C003");
