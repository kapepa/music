import axios from 'axios';
import config from './../config/index'

export default axios.create({baseURL: config.url})

