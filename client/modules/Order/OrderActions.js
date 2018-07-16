import callApi from '../../util/apiCaller';

// Export Constants
export const ORDER_SUCCESS = 'ORDER_SUCCESS';

// Export Actions
export function createOrderRequest(name, address, payOption) {
  console.log("my" + name + address + payOption);
  return (dispatch) => {
    return callApi('createorder', 'post', {
      order: {
        cusId: 'rishika',
        name: name,
        payOption: payOption,
        address: address,
      },
    }).then(res => {
      console.log('Order succesful' + res.order);
      dispatch(orderSuccessful(res.order._id));
    });
  };
}

export function orderSuccessful(orderId) {
  return {
    type: ORDER_SUCCESS,
    orderId,
  };
}
