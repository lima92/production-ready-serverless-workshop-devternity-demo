let initialized = false

const init = async () => {
  if (initialized) {
    return
  }
  process.env.restaurants_table             = "restaurants-dev-anders"
  process.env.restaurants_api               = "https://ycws3kc4u9.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurant_notification_topic = 'restaurants-dev-anders'
  process.env.AWS_REGION                    = "eu-west-1"
  
  initialized = true
}

module.exports = {
  init
}