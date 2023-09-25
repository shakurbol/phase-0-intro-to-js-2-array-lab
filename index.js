var customerName;
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}
function setBestCustomer() {
  bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
  bestCustomer = 'new best customer';
}
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new least favorite customer'; 
}
