
import http from 'k6/http'
import { check, group } from 'k6'
import config from '../config.js'

export let options = {
    vus: 20,
    duration: '10s',
    thresholds: {
        http_req_duration: [{ threshold: 'p(95)<1000' }]
    }
}

export default function () {
   
}
