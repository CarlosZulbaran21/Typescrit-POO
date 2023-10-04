// (async () => {
//   async function delay (time: number): Promise<string> {
//     const promise = new Promise<string>(resolve => {
//       setTimeout(() => { resolve('true') }, time)
//     })
//     return await promise
//   }
//   console.log('-----'.repeat(10))
//   const rta = await delay(3000)
//   console.log(rta)
// })()

import axios, { type AxiosResponse } from 'axios'

async function getProducts (): Promise<AxiosResponse<any, any>> {
  const promise = axios.get('https://api.escuelajs.co/api/v1/products')
  return await promise
}

getProducts().then(res => { console.log(res.data) })
  .catch(err => { console.log(err) })
