// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter( d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(driver, revenue) {
  drivers = driver.filter( d => d.revenue > revenue )
  return drivers.map( d => d.name)
}

function exactMatch(driver, obj) {
  return driver.filter( d => d)
}