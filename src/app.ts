import Fastify from 'fastify'

import helmet from '@fastify/helmet'
import cors from '@fastify/cors'

import { healthRoute } from './routes/health.route'
import { userRoute } from './routes/user.route'

export const app = Fastify({
  logger: true
})

app.register(helmet)

app.register(cors, {
  origin: true
})

app.register(healthRoute)
app.register(userRoute)