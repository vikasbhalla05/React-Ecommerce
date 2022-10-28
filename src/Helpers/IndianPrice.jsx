
const IndianPrice = ({price}) => {

    let indianPrice = (new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 2 }).format(price/100));

  return indianPrice;
}

export default IndianPrice