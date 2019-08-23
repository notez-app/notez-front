import Router from 'next/router'

const redirect = (ctx, target) => {
  const to = target || ctx

  if (ctx && typeof ctx === 'object') {
    ctx.res.writeHead(303, { Location: to })
    ctx.res.end()
  } else {
    Router.replace(to)
  }
}

export default redirect
