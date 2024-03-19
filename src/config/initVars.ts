import network from './network'

const writeDeploymentVariables = async (): Promise<void> => {
  try {
    network.SHIFT_RANGE.push(1)
  } catch (error) {
    throw new Error(error)
  }
}

export default writeDeploymentVariables
