/**
 * Forwards routes in the given list to a route with a trailing slash in the dev server
 * Useful for multi page vite apps where all rollup inputs are known.
 * 
 * Vite fix is upcoming, which will make this plugin unnecessary
 * https://github.com/vitejs/vite/issues/6596
 */
// forward-to-trailing-slash-plugin.ts
import type { Plugin } from 'vite'
import { IncomingMessage } from 'connect'

export default (routes: string[]): Plugin => ({
    name: 'forward-to-trailing-slash',
    configureServer(server) {
        server.middlewares.use((req: IncomingMessage, _res, next) => {
            // check if req.url is defined
            if (req.url) {
                const requestURLwithoutLeadingSlash = req.url.substring(1)

                if (routes.includes(requestURLwithoutLeadingSlash)) {
                    req.url = `${req.url}/`
                }
            }
            next()
        })
    }
})
