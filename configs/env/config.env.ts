import dotenv from 'dotenv'

dotenv.config()

function getConfig(): Record<string, string | undefined | number> {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ?? 3000
  }
}

function getSanitizedConfig(
  config: Record<string, string | undefined | number>
): Record<string, string | number> {
  return config as Record<string, string | number>
}

const config = getConfig()

const configEnv = getSanitizedConfig(config)

export default configEnv
