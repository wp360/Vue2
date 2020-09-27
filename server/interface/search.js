import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
  prefix: '/search'
})

const sign = '9c47f83b359f6f98745a4911c5048b2d' // d8402a2d5ad7e02e80108270d71831cc

router.get('/top', async (ctx) => {
  let {status, data: {top}} = await axios.get(`http://cp-tools.cn/search/top`,{
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  ctx.body = {
    top: status === 200 ? top : []
  }
})

router.get('/hotPlace', async (ctx) => {
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  let {
    status,
    data: {
      result
    }
  } = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      sign,
      city
      // city: encodeURIComponent(city)
    }
  })
  ctx.body = {
    top: status === 200 ? result : []
  }
})

router.get('/resultsByKeywords', async (ctx) => {
  const {city, keyword} = city.query
  let {
    status,
    data: {
      count,
      pois
    }
  } = await axios.get(`http://cp-tools.cn/search/resultsByKeywords`, {
    params: {
      city,
      keyword
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200 ? pois : []
  }
})

export default router
