import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

export default (_, inject) => {
  const echo = new Echo({
    broadcaster: 'pusher',
    key: 'myappkey', // .env
    wsHost: 'ws.devnx.com.br',
    // wsHost: window.location.hostname,
    wsPort: 6001,
    wssPort: 6001,
    disableStats: true,
    forceTLS: false,
  })

  inject('echo', echo)
}
