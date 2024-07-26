import { app } from './app'
import { env } from './env'
import os from 'os'
import cluster from 'cluster'

const runPrimaryProcess = () => {
  const processCount = os.cpus().length

  console.log(`Primary process ${process.pid} is running.`)
  console.log(`Forking Server with ${processCount} cpus.\n`)

  for (let i = 0; i < processCount; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed. Starting a new worker.`)
      cluster.fork()
    }
  })
}

const runWorkerProcess = () => {
  app
    .listen({
      host: '0.0.0.0',
      port: env.PORT,
    })
    .then(() => {
      console.log(
        `Server is running on port 3333. Worker process ${process.pid} is running.`,
      )
    })
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess()
